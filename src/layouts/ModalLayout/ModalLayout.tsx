import { FC } from "react";
import Modal from "react-modal";
import { Content, Wrapper } from "./styles";
import { IModalLayoutProps } from "./types";

const ModalLayout: FC<IModalLayoutProps> = ({
  children,
  maxWidth,
  minHeight,
  onRequestClose,
  ...rest
}) => (
  <Modal {...rest} onRequestClose={onRequestClose}>
    <Wrapper onClick={onRequestClose}>
      <Content
        minHeight={minHeight}
        maxWidth={maxWidth}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Content>
    </Wrapper>
  </Modal>
);

export default ModalLayout;
