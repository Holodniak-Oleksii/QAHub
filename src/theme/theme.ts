import { colors } from "./colors";
import { ITheme } from "./types";

export const theme: ITheme = {
  text: {
    overflow: `
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
    `,
    getLineClamp: (lines = 4) =>
      `
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
        overflow: hidden;
      `,
    getDefault: ({ size = 14, weight = 500, color = "#1D2939" } = {}) => `
      font-size: ${size}px;
      font-weight: ${weight};
      color: ${color};
      font-family: var(--font-roboto);
      font-style: normal;
      line-height: normal;
    `,
  },
  absoluteCenter: `
    opacity: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  flex: {
    center: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    row: `
      display: flex;
      align-items: center;
    `,
    column: `
      display: flex;
      flex-direction: column;
    `,
    between: `
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
  },
  colors: colors,
  boxShadow: {
    xs: `0px 2px 8px 0px rgba(16, 24, 40, 0.08);`,
    sm: `0px 0px 4px -2px rgba(16, 24, 40, 0.06), 0px 2px 8px -2px rgba(16, 24, 40, 0.10), 0px 0px 4px -2px rgba(16, 24, 40, 0.06), 0px 2px 8px -2px rgba(16, 24, 40, 0.10)`,
    md: `0px 3px 6px 0px rgba(16, 24, 40, 0.14)`,
    lg: `0px 4px 12px 0px rgba(16, 24, 40, 0.06)`,
    xl: `0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 4px 24px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 4px 24px -4px rgba(16, 24, 40, 0.08) `,
    xl2: `0px 4px 8px -2px rgba(16, 24, 40, 0.03), 0px 12px 20px -4px rgba(16, 24, 40, 0.08), 0px 4px 8px -2px rgba(16, 24, 40, 0.03), 0px 12px 20px -4px rgba(16, 24, 40, 0.08)`,
    xl3: `0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)`,
    xl4: `-20px 2px 60px 0px rgba(16, 24, 40, 0.08)`,
  },
  content: {
    mainContainerPadding: `
      padding: 0 120px 0 120px;
      @media screen and (max-width: 1920px) {
        padding: 0 6.3vw;
      }
      @media screen and (max-width: 1440px) {
        padding: 0 7vw;
      }
      @media screen and (max-width: 1280px) {
        padding: 0 40px;
      }
      @media screen and (max-width: 767px) {
        padding: 0 16px;
      }
    `,
    headerSpace: `
      padding-top: 104px;
      @media screen and (max-width: 1280px) {
        padding-top: 80px; 
      }
      @media screen and (max-width: 540px) {
        padding-top: 72px; 
      }
    `,
    mainContainerWidth: `
      width: 100%;
      max-width: 1920px;
      margin: 0 auto;
      position: relative;
    `,
    indention: `
      padding: 60px 0;
      @media screen and (max-width: 767px) {
        padding: 40px 0;
      }
      @media screen and (max-width: 540px) {
        padding: 32px 0;
      }
    `,
  },
};
