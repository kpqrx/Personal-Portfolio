// @ts-nocheck
import dynamic from "next/dynamic";
import type { ComponentType, ReactComponentElement, Ref } from "react";
import { forwardRef } from "react";
import type { IconProps } from "@components/Icon/Icon.types";

type ForwardedRefProp<P> = {
  forwardedRef?: Ref<unknown>;
} & P;

// TODO: fix typings
const withForwardedRefProp = <P extends ReactComponentElement>(
  LoadedIcon: ComponentType<P>
): ComponentType<ForwardedRefProp<P>> => {
  const component = ({ forwardedRef, ...props }: ForwardedRefProp<P>) => (
    <LoadedIcon {...props} ref={forwardedRef} />
  );
  component.displayName = LoadedIcon.displayName;
  return component;
};

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { name, size = 24, gradientStroke = false, ...restProps } = props;

  const LoadedIcon = dynamic<IconProps>(
    () =>
      import(`react-feather/dist/icons/${name}`).then(({ default: Icon }) =>
        withForwardedRefProp(Icon)
      ),
    {
      loading: () => (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} />
      ),
    }
  );

  return (
    <LoadedIcon
      forwardedRef={ref}
      size={size}
      stroke={gradientStroke ? "url(#gradient)" : "currentColor"}
      {...restProps}
    />
  );
});

Icon.displayName = "Icon";

export default Icon;
