import type { SVGProps } from "react";

export function SDFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-sd"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="sd-a">
          <path fillOpacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath="url(#sd-a)"
        transform="scale(.9375)"
      >
        <path fill="#000001" d="M0 341.3h1024V512H0z" />
        <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
        <path fill="red" d="M0 0h1024.8v170.7H0z" />
        <path fill="#009a00" d="M0 0v512l341.3-256z" />
      </g>
    </svg>
  );
}
