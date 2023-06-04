import { css } from "styled-components";
import type { FlattenSimpleInterpolation } from "styled-components";

export const forSafari = (styles: FlattenSimpleInterpolation) => css`
  @supports (-webkit-hyphens: none) {
    ${styles}
  }
`;

export const forChromium = (styles: FlattenSimpleInterpolation) => css`
  @supports (not (-webkit-hyphens: none)) and (not (-moz-appearance: none)) and
    (list-style-type: "*") {
    ${styles}
  }
`;

export const forFirefox = (styles: FlattenSimpleInterpolation) => css`
  @supports (-moz-appearance: none) {
    ${styles}
  }
`;
