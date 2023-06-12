import { Dictionary } from "./ToCamelOrSnakeCase.types";
import { Masks } from '../../constants/Masks';

export function toCamelOrSnakeCase(
  dictionary: Dictionary | Dictionary[],
  isCamelCase: boolean,
): Dictionary | Dictionary[] {
  if (Array.isArray(dictionary)) {
    return dictionary.map(item => toCamelOrSnakeCase(item, isCamelCase));
  }
  
  const newDictionary: Dictionary = {};

  Object.keys(dictionary).forEach(key => {
    const newKey = isCamelCase
      ? key.replace(Masks.HyphensAndUnderscoresWithSmallLetters, ($1) => {
          return $1.toUpperCase()
            .replace('-', '')
            .replace('_', '');
        })
      : key.replace(Masks.Uppercase, "_$1").toLowerCase();

    if (typeof dictionary[key] === "object" && dictionary[key] !== null) {
      newDictionary[newKey] = toCamelOrSnakeCase(dictionary[key], isCamelCase);
    } else {
      newDictionary[newKey] = dictionary[key];
    }
  });

  return newDictionary;
}