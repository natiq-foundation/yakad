import type { SVGProps } from "react";

export function ZWFlag(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            id="flag-icons-zw"
            viewBox="0 0 640 480"
        >
            {/* Green */}
            <path fill="#319208" d="M0 0h640v68.57H0z" />

            {/* Yellow */}
            <path fill="#FFD200" d="M0 68.57h640v68.57H0z" />

            {/* Red */}
            <path fill="#DE2010" d="M0 137.14h640v68.57H0z" />

            {/* Black */}
            <path fill="#000" d="M0 205.71h640v68.57H0z" />

            {/* Red */}
            <path fill="#DE2010" d="M0 274.29h640v68.57H0z" />

            {/* Yellow */}
            <path fill="#FFD200" d="M0 342.86h640v68.57H0z" />

            {/* Green */}
            <path fill="#319208" d="M0 411.43h640V480H0z" />

            {/* Triangle border */}
            <path fill="#000" d="M0 0v480l280-240z" />

            {/* White triangle */}
            <path fill="#FFF" d="M0 20v440l257-220z" />

            {/* Red star */}
            <path
                fill="#D40000"
                d="
          m120 150
          14.7 45.2
          h47.5
          l-38.4 27.9
          14.7 45.2
          -38.5-27.9
          -38.5 27.9
          14.7-45.2
          -38.4-27.9
          h47.5z
        "
            />

            {/* Zimbabwe Bird */}
            <g fill="#FFD200" stroke="#000" strokeWidth="3">
                <path
                    d="
            M120 180
            c-8-13 0-30 15-35
            c12-4 25 2 30 13
            l-7 10
            c-8-7-17-8-23-3
            c-7 6-7 15-2 22
            l-5 17
            c-3 10-2 21 4 29
            l-12 5
            c-12-15-14-34-7-51
            z
          "
                />

                <path
                    d="
            M150 158
            l25-18
            -7 28
            12 17
            -22-6
            z
          "
                />

                <path
                    d="
            M130 226
            c8 5 17 6 25 2
            l15 12
            -13 8
            -20-6
            z
          "
                />
            </g>
        </svg>
    );
}