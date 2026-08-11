import type { SVGProps } from "react";

export function XXFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-xx"
      viewBox="0 0 640 480"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        stroke="#adb5bd"
        strokeWidth="1.1"
        d="M.5.5h638.9v478.9H.5z"
      />
      <path
        fill="none"
        stroke="#adb5bd"
        strokeWidth="1.1"
        d="m.5.5 639 479m0-479-639 479"
      />
    </svg>
  );
}
