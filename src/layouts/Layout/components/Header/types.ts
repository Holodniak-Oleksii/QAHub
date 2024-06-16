import { ICategoryModelSecond } from "@/common/types";

export interface IHeaderWrapperProps {
  isDarken: boolean;
  visible: boolean;
}

export interface IHeaderProps {
  categories: ICategoryModelSecond[];
  isDarken: boolean;
}
