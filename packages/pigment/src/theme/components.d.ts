import { ButtonProps, ButtonSlots, LinkButtonProps, LinkButtonSlots } from "../button/button.props";
import { AlertProps, AlertSlots } from "../alert/alert.props";
import { CloseButtonProps, CloseButtonSlots } from "../close-button/close-button.props";

export interface ComponentTheme<Props, Slots extends string> {
  /** Default props to be passed to the component. */
  defaultProps?: Partial<Props>;

  /** Additional CSS classes to be passed to the component. */
  additionalClasses?: Record<Slots, string> | ((props: Props) => Record<Slots, string>);
}

export interface Components {
  // alphabetical order
  Alert?: ComponentTheme<AlertProps, AlertSlots>;
  Button?: ComponentTheme<ButtonProps, ButtonSlots>;
  CloseButton?: ComponentTheme<CloseButtonProps, CloseButtonSlots>;
  LinkButton?: ComponentTheme<LinkButtonProps, LinkButtonSlots>;
}
