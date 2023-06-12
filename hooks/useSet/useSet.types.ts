export type StableActions<K> = {
  add: (key: K) => void;
  remove: (key: K) => void;
  toggle: (key: K) => void;
  reset: () => void;
}

export interface Actions<K> extends StableActions<K> {
  has: (key: K) => boolean;
}