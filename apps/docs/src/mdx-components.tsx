import { IconButton } from "@kobalte/pigment";
import { Title as MetaTitle } from "@solidjs/meta";
import { clsx } from "clsx";
import { ComponentProps, createSignal, Show, splitProps } from "solid-js";

export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => {
    const [local, others] = splitProps(props, ["children"]);

    return (
      <h1 {...others}>
        <MetaTitle>{local.children + " – Pigment"}</MetaTitle>
        {local.children}
      </h1>
    );
  },
  code: (props: ComponentProps<"code">) => {
    const [local, others] = splitProps(props, ["class"]);

    return (
      <span class={clsx(local.class, "not-prose")}>
        <code
          class="pg-code rounded text-slate-800 bg-slate-900/5 px-[0.4em] py-[0.2em] text-[0.9em] font-mono break-words dark:text-slate-300 dark:bg-white/10"
          {...others}
        />
      </span>
    );
  },
  pre: (props: ComponentProps<"pre">) => {
    let domRef: HTMLPreElement | undefined;

    const [local, others] = splitProps(props, ["children"]);

    const [isCopied, setIsCopied] = createSignal(false);

    const reset = () => {
      setIsCopied(false);
    };

    const copyToClipboard = () => {
      const innerText = domRef?.querySelector("code")?.innerText ?? "";
      setIsCopied(true);
      void navigator.clipboard.writeText(innerText);
      setTimeout(() => setIsCopied(false), 2000);
    };

    return (
      <pre ref={domRef} onMouseLeave={reset} {...others}>
        <IconButton
          aria-label="copy to clipboard"
          variant="text"
          size="xs"
          class="pg-copy-btn absolute top-2 right-2 z-10"
          onClick={copyToClipboard}
          icon={isCopied() ? "i-tabler-check" : "i-tabler-clipboard"}
        />
        {local.children}
      </pre>
    );
  },
  table: (props: ComponentProps<"table">) => {
    const [local, others] = splitProps(props, ["class"]);

    return (
      <div style={{ "overflow-x": "auto" }} class="mb-10">
        <table class={clsx(local.class, "pg-table !my-0")} {...others} />
      </div>
    );
  },
  a: (props: ComponentProps<"a">) => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  },
};
