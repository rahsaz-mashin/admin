import React from "react";

export default {
  title: "Icons/OutlinedArrowDown",
  component: ({ size }: { size?: number }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 10L12 14L8 10"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
};

export const Icon = {
  args: {
    size: 48,
  },
};
