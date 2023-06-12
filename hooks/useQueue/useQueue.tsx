import { useState } from 'react';
import { QueueReturn } from './useQueue.types';

export function useQueue<T>(initialValue: T[] = []): QueueReturn<T> {
  // Добавить в будущем мемоизацию
  const [state, setState] = useState(initialValue);

  return {
    add: (value) => {
      setState((queue) => [...queue, value]);
    },
    remove: () => {
      let result;
      setState(([first, ...rest]) => {
        result = first;
        return rest;
      });
      return result;
    },
    get first() {
      return state[0];
    },
    get last() {
      return state[state.length - 1];
    },
    get size() {
      return state.length;
    },
  };
};