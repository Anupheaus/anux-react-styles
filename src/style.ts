import { style as typeStyle } from 'typestyle';
import { is, IMap } from 'anux-common';
import { NestedCSSSelectors } from 'typestyle/lib/types';
import { CSSProperties } from 'react';

interface IStyleObject extends CSSProperties, IMap {
  $nest?: Record<keyof NestedCSSSelectors, IStyleObject>;
}

export function style(...objects: IStyleObject[]): string {
  if (objects.length === 0) { return ''; }
  return typeStyle(...objects);
}

export function classNames(...objects: (string | IStyleObject)[]): string {
  return objects.map(item => is.stringAndNotEmpty(item) ? item : style(item)).filter(is.stringAndNotEmpty).join(' ');
}
