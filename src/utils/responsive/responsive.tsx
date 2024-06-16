import { PropsWithChildren } from "react";
import MediaQuery from "react-responsive";
import { IResponsiveOff } from "./types";

export const MobileOnRes = (props: PropsWithChildren): JSX.Element => (
  <MediaQuery {...props} maxWidth={767} />
);
export const MobileOffRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={768} />
);
export const LittleMobileOnRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={540} />
);
export const LittleMobileOffRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={541} />
);
export const DesktopOnRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={1440} />
);
export const DesktopOffRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={1441} />
);
export const LittleDesktopOnRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={1280} />
);
export const LittleDesktopOffRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={1281} />
);
export const TabletOffRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={1025} />
);
export const TabletOnRes = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={1024} />
);
export const ResponsiveRes = (props: IResponsiveOff) => (
  <MediaQuery {...props} />
);
