import { PropsWithChildren } from "react";
import ReactModal from "react-modal";

export interface IContentProps {
  maxWidth?: number;
  minHeight?: number;
}

export interface IModalLayoutProps
  extends PropsWithChildren,
    ReactModal.Props,
    IContentProps {}
