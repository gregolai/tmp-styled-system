import { get, createParser } from './core';
import css from './css';

export const variant = ({
  scale,
  prop = 'variant',
  // enables new api
  variants = {},
  // shim for v4 API
  key
}) => {
  let sx;
  if (Object.keys(variants).length) {
    sx = (value, scale, props) => css(get(scale, value, null))(props.theme);
  } else {
    sx = (value, scale) => get(scale, value, null);
  }
  sx.scale = scale || key;
  sx.defaults = variants;
  return createParser({
    [prop]: sx
  });
};

export default variant;

export const buttonStyle = variant({ key: 'buttons' });
export const textStyle = variant({ key: 'textStyles', prop: 'textStyle' });
export const colorStyle = variant({ key: 'colorStyles', prop: 'colors' });
