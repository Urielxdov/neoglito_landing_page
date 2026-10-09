import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

/** Ancho máximo y gutter lateral comunes a todas las secciones. */
export function Container<T extends ElementType = "div">({
  as,
  className = "",
  ...props
}: ContainerProps<T>) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={`mx-auto max-w-[1320px] px-[clamp(20px,4vw,48px)] ${className}`}
      {...props}
    />
  );
}
