import { usePrevious } from "../usePrevious";

export function useWhyDidUpdate<T extends Object>(props: T) {
  const prevPropsRef = usePrevious(props);

  const prevProps = prevPropsRef.current;

  if(!prevProps) {
    console.log('Initial render');
    return;
  }

  const prevKeys = Object.keys(prevProps);
  const keys = Object.keys(props);

  const allKeys = [ ...new Set(keys.concat(prevKeys))];
  let hasChanged = false;

  allKeys.forEach((key) => {
    if (props[key] !== prevProps[key]) {
      console.group('============');
      console.log(`Prop ${key} changed`);
      console.log(`Prev value ${prevProps[key]}`);
      console.log(`Current value ${props[key]}`);
      console.groupEnd();

      hasChanged = true;
    }
  });

  if (!hasChanged) {
    console.log('Nothing changes');
  }
}