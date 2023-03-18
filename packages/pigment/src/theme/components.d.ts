import { AlertProps, AlertSlots } from "../alert/alert.props";
import { BadgeProps, BadgeSlots } from "../badge/badge.props";
import { ButtonProps, ButtonSlots, LinkButtonProps, LinkButtonSlots } from "../button/button.props";
import { CheckboxProps, CheckboxSlots } from "../checkbox/checkbox.props";
import { CloseButtonProps, CloseButtonSlots } from "../close-button/close-button.props";
import { SelectProps, SelectSlots } from "../select/select.props";
import { TextFieldProps, TextFieldSlots } from "../text-field/text-field.props";

export interface ComponentTheme<Props, Slots extends string> {
  /** Default props to be passed to the component. */
  defaultProps?: Partial<Props>;

  /** CSS classes to be passed to the component slots. */
  slotClasses?: Record<Slots, string> | ((props: Props) => Record<Slots, string>);
}

export interface Components {
  // alphabetical order
  Alert?: ComponentTheme<AlertProps, AlertSlots>;
  Badge?: ComponentTheme<BadgeProps, BadgeSlots>;
  Button?: ComponentTheme<ButtonProps, ButtonSlots>;
  Checkbox?: ComponentTheme<CheckboxProps, CheckboxSlots>;
  CloseButton?: ComponentTheme<CloseButtonProps, CloseButtonSlots>;
  LinkButton?: ComponentTheme<LinkButtonProps, LinkButtonSlots>;
  Select?: ComponentTheme<SelectProps, SelectSlots>;
  TextField?: ComponentTheme<TextFieldProps, TextFieldSlots>;
}
