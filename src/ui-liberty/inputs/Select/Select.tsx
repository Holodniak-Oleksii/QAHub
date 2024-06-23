import arrowDown from "@/assets/icons/arrow-down.svg";
import { IOption } from "@/common/types/general";

import { renderInputError } from "@/common/helpers";
import { useOnClickOutside } from "@/common/hooks";
import {
  ChangeEvent,
  FC,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowIconWrapper,
  Container,
  Input,
  InputWrapper,
  Label,
  List,
  Message,
  NotFound,
  Row,
  Wrapper,
} from "./styles";
import { ISelectProps } from "./types";

const Select: FC<ISelectProps> = (props) => {
  const {
    label,
    options,
    error,
    onChange,
    isShowingClearOption,
    registerOptions,
    onChangeOption,
    initialValue,
    renderOptionLeft,
    renderInputLeft,
    withoutError,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<HTMLInputElement | undefined>();
  const [filteredOptions, setFilteredOptions] = useState<IOption[]>(options);
  const refWrapper = useRef<HTMLDivElement>(null);
  const selectHintId = useId();

  useLayoutEffect(() => {
    const select = document.getElementById(selectHintId) as HTMLInputElement;
    if (select) {
      setSelect(select);
    }
  }, []);

  useOnClickOutside(refWrapper, () => setIsOpen(false));

  const handlerFilter = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setIsOpen(true);
      const result = options?.filter((option) =>
        option.label
          .toLocaleLowerCase()
          .startsWith(event.target.value.toLocaleLowerCase())
      );
      setFilteredOptions(result);
    } else {
      setIsOpen(false);
      setFilteredOptions(options);
    }
  };

  const chooseOptionHandler = (option: IOption) => {
    if (select) {
      select.value = option.id === -1 ? "" : option.value;

      const value = {
        target: select,
        type: "select",
      } as ChangeEvent<HTMLInputElement>;
      onChange?.(value);
      onChangeOption?.(option);

      registerOptions?.onChange(value);
      setIsOpen(false);
    }
  };

  const getClearOption = (): IOption => {
    return {
      id: -1,
      label: "none",
      value: "none",
    };
  };

  const renderOptions = () => {
    let optionsToRender = filteredOptions;

    if (isShowingClearOption) {
      optionsToRender = [getClearOption(), ...optionsToRender];
    }

    return optionsToRender?.map((option) => (
      <Row key={option.id} onClick={() => chooseOptionHandler(option)}>
        {renderOptionLeft && renderOptionLeft(option)}
        {option.label}
      </Row>
    ));
  };

  useEffect(() => {
    if (initialValue && select) {
      select.value = initialValue.value;
    }
  }, [initialValue, select]);

  useEffect(() => {
    setFilteredOptions(options);
  }, [JSON.stringify(options)]);

  return (
    <Wrapper ref={refWrapper} className="form_item">
      {label && <Label>{label}</Label>}
      <Container>
        <InputWrapper isError={!!error} isDisabled={rest.disabled}>
          {renderInputLeft && renderInputLeft()}

          <Input
            {...rest}
            {...registerOptions}
            isError={!!error}
            id={selectHintId}
            aria-invalid={!!error}
            onChange={(e) => {
              handlerFilter(e);
              onChange?.(e);
              registerOptions?.onChange(e);
            }}
          />
        </InputWrapper>
        <ArrowIconWrapper
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src={arrowDown} alt={"indicator"} />
        </ArrowIconWrapper>
      </Container>
      <List isOpen={isOpen} withoutError={withoutError}>
        {filteredOptions.length ? (
          renderOptions()
        ) : (
          <NotFound>No data found</NotFound>
        )}
      </List>
      {error && <Message>{renderInputError(error)}</Message>}
    </Wrapper>
  );
};
export default Select;
