import { useCallback, useMemo, useState } from 'react';
import { Actions, StableActions } from './useSet.types';

export function useSet<K>(initialSet = new Set<K>()): [Set<K>, Actions<K>] {
  const [set, setSet] = useState(initialSet);

  const stableActions = useMemo<StableActions<K>>(() => {
    function add(item: K) {
      setSet((prevSet) => new Set([...Array.from(prevSet), item]));
    }

    function remove(item: K) {
      setSet((prevSet) => new Set(Array.from(prevSet).filter((i) => i !== item)));
    }
    function toggle(item: K) {
      setSet((prevSet) =>
        prevSet.has(item)
          ? new Set(Array.from(prevSet).filter((i) => i !== item))
          : new Set([...Array.from(prevSet), item])
      );
    }

    return { add, remove, toggle, reset: () => setSet(initialSet) };
  }, [setSet]);

  const utils = {
    has: useCallback((item) => set.has(item), [set]),
    ...stableActions,
  } as Actions<K>;

  return [set, utils];
};
