import { PropsWithChildren } from "react";

export interface ILayoutProps extends PropsWithChildren {
  pageProps: {
    isDarken: boolean;
  };
}
