import { ICategoryModel } from "@/common/types";
import { PropsWithChildren } from "react";

export interface ILayoutProps extends PropsWithChildren {
  pageProps: {
    categories: ICategoryModel[];
    isDarken: boolean;
  };
}
