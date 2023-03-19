/*!
 * Portions of this file are based on code from solid-highlight.
 *
 * Credits to the solid-highlight team:
 * https://github.com/aidanaden/solid-highlight/blob/02d1762e3d89186fcff760e5e3f6724655f5a00f/src/index.tsx
 */

import { cn, IconButton } from "@kobalte/pigment";
import HighlightJS from "highlight.js";
import { createMemo, createSignal, Show } from "solid-js";

import { CheckIcon, CopyIcon } from "./icons";

type HighlightProps = {
  class?: string;
  language: string;
  code: string;
};

export function Highlight(props: HighlightProps) {
  let domRef: HTMLPreElement | undefined;

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

  const getHighlightedCode = createMemo(() => {
    const result = HighlightJS.highlight(props.code, {
      language: props.language,
      ignoreIllegals: true,
    });

    return result.value;
  });

  return (
    <pre
      ref={domRef}
      onMouseLeave={reset}
      class={cn("pg-hljs not-prose relative m-0 p-0 border-none", props.class)}
    >
      <IconButton
        aria-label="copy to clipboard"
        variant="ghost"
        color={isCopied() ? "success" : "neutral"}
        size="xs"
        class={cn(
          "pg-copy-btn absolute top-2 right-2 z-10 text-slate-400",
          isCopied() ? "hover:text-green-800" : " hover:text-slate-100"
        )}
        onClick={copyToClipboard}
      >
        <Show when={isCopied()} fallback={<CopyIcon />}>
          <CheckIcon />
        </Show>
      </IconButton>
      {/* eslint-disable-next-line solid/no-innerhtml */}
      <code class={cn("hljs", props.language)} innerHTML={getHighlightedCode()} />
    </pre>
  );
}
