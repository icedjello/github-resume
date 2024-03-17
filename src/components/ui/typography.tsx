import { PropsWithChildren } from "react";

export function TypographyH1({ children }: PropsWithChildren) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: PropsWithChildren) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: PropsWithChildren) {
  return (
    <h3 className="scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight [&:not(:first-child)]:mt-6">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: PropsWithChildren) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight [&:not(:first-child)]:mt-4">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: PropsWithChildren) {
  return <p className="leading-7 [&:not(:first-child)]:mt-2">{children}</p>;
}

type TypographyListItemProps = {
  text: string;
};

export function TypographyListItem({ text }: TypographyListItemProps) {
  return <li className="m-2">{text}</li>;
}

export function TypographyColumnList({ children }: PropsWithChildren) {
  return <ul className="my-2  grid grid-cols-3 [&>li]:mt-2 ">{children}</ul>;
}
