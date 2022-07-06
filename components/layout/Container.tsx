/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";

export type Props = {
  children: ComponentChildren;
  title?: string;
  name?: string;
  description?: string;
};

export default function Container({ children, ...customMeta }: Props) {
  return (
    <>
      <Head>
        <title>Hi there!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"  href="/styles.css" />
      </Head>
      <div className="container">{children}</div>
    </>
  );
}
