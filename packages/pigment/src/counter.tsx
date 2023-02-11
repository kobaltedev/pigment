import type { Component } from "solid-js";
import { createSignal } from "solid-js";

export interface CounterProps {
  initialValue?: number;
  theme?: "default" | "red";
}

export const Counter: Component<CounterProps> = props => {
  const [count, setCount] = createSignal(props.initialValue ?? 0);

  const getColor = () => (props.theme === "red" ? "red" : "black");

  return (
    <div class="bg-info-500 dark:bg-success-500">
      <button style={{ color: getColor() }} onClick={() => setCount(c => c + 1)}>
        Click <span>{count()}</span> times
      </button>
    </div>
  );
};
