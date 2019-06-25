import { IChainable } from './chain';
import { style as typeStyle } from 'typestyle';
import { is } from 'anux-common';
import { NestedCSSProperties } from 'typestyle/lib/types';

type StyleObject = IChainable | NestedCSSProperties;

export function style(...objects: StyleObject[]): string {
  if (objects.length === 0) { return ''; }
  return typeStyle(...objects);
}

export function classNames(...objects: (string | IChainable)[]): string {
  return objects.map(item => is.stringAndNotEmpty(item) ? item : style(item)).filter(is.stringAndNotEmpty).join(' ');
}
