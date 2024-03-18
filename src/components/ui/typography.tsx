import { PropsWithChildren } from "react";

export function TypographyH1({ children }: PropsWithChildren) {
  return (
    <h1 className="scroll-m-20 pb-2 text-4xl font-extrabold lg:text-5xl">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: PropsWithChildren) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold">
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: PropsWithChildren) {
  return (
    <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold [&:not(:first-child)]:mt-6">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: PropsWithChildren) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight [&:not(:first-child)]:mt-2">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: PropsWithChildren) {
  return <p className="mt-2 leading-7">{children}</p>;
}

type TypographyListItemProps = {
  text: string;
};

export function TypographyListItem({ text }: TypographyListItemProps) {
  return <li className="m-2 leading-7">{text}</li>;
}

export function TypographyColumnList({ children }: PropsWithChildren) {
  return (
    <ul className="my-2  grid sm:grid-cols-2 md:grid-cols-3 [&>li]:mt-2 ">
      {children}
    </ul>
  );
}
