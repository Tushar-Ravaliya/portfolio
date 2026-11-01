import type { SVGProps } from "react";

export function Arrow({
  direction = "up-right",
  ...props
}: SVGProps<SVGSVGElement> & {
  direction?: "up-right" | "right" | "down" | "left";
}) {
  const rotation = { "up-right": 0, right: 45, down: 135, left: 225 }[
    direction
  ];
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <g transform={`rotate(${rotation} 12 12)`}>
        <path d="M5 19 19 5M5 5h14v14" />
      </g>
    </svg>
  );
}

