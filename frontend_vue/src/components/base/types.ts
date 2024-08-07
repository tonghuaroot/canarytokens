export interface BaseStateVariantInterface {
  danger: string;
  warning: string;
  success: string;
  info: string;
}

export interface BaseColorVariantInterface extends BaseStateVariantInterface {
  primary: string;
  secondary: string;
  danger: string;
}

export interface BaseButtonVariantInterface extends BaseColorVariantInterface {
  text: string;
  'text-light': string;
  grey: string;
  danger: string;
}

export type ButtonVariantType = keyof BaseButtonVariantInterface;
export type NotificationBoxVariantType = keyof BaseStateVariantInterface;
export type BaseColorVariantType = keyof BaseColorVariantInterface;
