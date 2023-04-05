import { useState, ChangeEvent } from 'react';

export function useInput(
  initialValue: string | number,
  mask?: RegExp,
) {
  const [value, setValue] = useState(`${initialValue}`);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const getValue = event.target.value;
    if (!mask) {
      setValue(getValue);
    }

    if (mask?.test(getValue) || getValue === '') {
      setValue(getValue);
    }
  }

  return {
    value,
    onChange,
  }
}