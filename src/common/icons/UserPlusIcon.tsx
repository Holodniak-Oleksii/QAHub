import * as React from "react";

const UserPlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M9 11a4 4 0 100-8 4 4 0 000 8zM3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M16 11h6m-3-3v6"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MemoUserPlusIcon = React.memo(UserPlusIcon);
export default MemoUserPlusIcon;
