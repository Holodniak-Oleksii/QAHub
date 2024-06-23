import { theme } from "@/theme/theme";
import * as React from "react";

function BookmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M8 2h8a3 3 0 013 3v15a2 2 0 01-3.348 1.477l-2.978-2.717a1 1 0 00-1.348 0l-2.978 2.717A2 2 0 015 20V5a3 3 0 013-3z"
        fill={theme.colors.main700}
      />
    </svg>
  );
}

const MemoBookmarkIcon = React.memo(BookmarkIcon);
export default MemoBookmarkIcon;
