export type QueueReturn<T> = {
  add: (item: T) => void;
  remove: () => T;
  first: T;
  last: T;
  size: number;
}