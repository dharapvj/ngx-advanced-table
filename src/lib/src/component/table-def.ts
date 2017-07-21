export enum Align {
  Left,
  Right,
  Center
}
/* export enum SortOrder {
  Ascending  = 'asc' ,
  Descending  = 'desc'
} */

export interface Column {
  display: string;
  attr: string;
  // dataType?: string;
  checkbox?: boolean;
  align?: Align;
  formatter?: (val: any) => string;  // return type might need to be other than string.
}

export interface SortInfo {
  attr: string;
  sortDir?: 'asc'|'desc';
}
