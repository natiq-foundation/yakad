import type { SVGProps } from "react";

export function UAFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-ua"
      viewBox="0 0 640 480"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#0057b8" d="M0 0h640v240H0z" />
        <path fill="gold" d="M0 240h640v240H0z" />
      </g>
    </svg>
  );
}
