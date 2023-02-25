import { ClassValue } from "clsx";
import { ButtonProps, ButtonSlots } from "./button/button.props";

interface AdditionalClassesFnParams<Props> {
  /** The component props. */
  props: Props;

  /** A utility function for constructing CSS `class` strings conditionally. */
  cn: (...inputs: ClassValue[]) => string;
}

export interface ComponentTheme<Props, Slots extends string> {
  /** Default props to be passed to the component. */
  defaultProps?: Partial<Props>;

  /** Additional CSS classes to be passed to the component. */
  additionalClasses?:
    | Record<Slots, string>
    | ((params: AdditionalClassesFnParams<Props>) => Record<Slots, string>);
}

export interface Components {
  // alphabetical order
  Button?: ComponentTheme<ButtonProps, ButtonSlots>;
  Alert?: ComponentTheme<{ foo: boolean }, "fee">;
}
