import { memo } from "react";

const PlusIcon = ({
  width = 26,
  height = 26,
  fill = "none",
  stroke = "#fff",
  strokeWidth = 1.5,
}) => (
  <svg
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.0002 3.2L8.0002 12.8M12.8002 8L3.2002 8"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export default memo(PlusIcon);
