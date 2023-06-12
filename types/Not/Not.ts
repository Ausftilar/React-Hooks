export type Not<T> = {
  [P in keyof T]?: void;
};
