import { ButtonProps, ButtonSlots, LinkButtonProps, LinkButtonSlots } from "../button/button.props";

export interface ComponentTheme<Props, Slots extends string> {
  /** Default props to be passed to the component. */
  defaultProps?: Partial<Props>;

  /** Additional CSS classes to be passed to the component. */
  additionalClasses?: Record<Slots, string> | ((props: Props) => Record<Slots, string>);
}

export interface Components {
  // alphabetical order
  Button?: ComponentTheme<ButtonProps, ButtonSlots>;
  LinkButton?: ComponentTheme<LinkButtonProps, LinkButtonSlots>;
}
