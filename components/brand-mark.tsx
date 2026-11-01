import type { SVGProps } from "react";
import {
  brandPaths,
  brandViewBox,
  foldPaths,
  foldViewBox,
} from "@/lib/brand";

export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox={brandViewBox}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {brandPaths.map((path) => <path key={path} d={path} />)}
    </svg>
  );
}

export function FoldMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="38"
      viewBox={foldViewBox}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {foldPaths.map((path) => <path key={path} d={path} />)}
    </svg>
  );
}
