export interface IButton {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => any, // tslint:disable-line no-any
  disabled?: boolean,
  label?: string,
  children?: JSX.Element | JSX.Element[],
}
