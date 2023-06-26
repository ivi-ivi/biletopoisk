export type SvgIconProps = {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  width?: string;
  height?: string;
};

export const defaultSvgProps: SvgIconProps = {
  className: '',
  fill: 'currentColor',
  stroke: 'currentColor',
  strokeWidth: 0,
  width: '24px',
  height: '24px',
};
