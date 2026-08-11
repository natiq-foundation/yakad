import type { SVGProps } from "react";

export function GWFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="flag-icons-gw"
      viewBox="0 0 640 480"
    >
      <path fill="#ce1126" d="M0 0h220v480H0z" />
      <path fill="#fcd116" d="M220 0h420v240H220z" />
      <path fill="#009e49" d="M220 240h420v240H220z" />
      <g id="gw-b" transform="matrix(80 0 0 80 110 240)">
        <path
          id="gw-a"
          fill="#000001"
          d="M0-1v1h.5"
          transform="rotate(18 0 -1)"
        />
        <use
          xlinkHref="#gw-a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </g>
      <use
        xlinkHref="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(72 110 240)"
      />
      <use
        xlinkHref="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(144 110 240)"
      />
      <use
        xlinkHref="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(-144 110 240)"
      />
      <use
        xlinkHref="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(-72 110 240)"
      />
    </svg>
  );
}
