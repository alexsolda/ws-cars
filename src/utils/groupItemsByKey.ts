import { GroupedItems } from "../types/utils";

export const groupItemsByKey = <T, K extends keyof T>(items: T[], key: K): GroupedItems<T> => {
    return items.reduce((acc, item) => {
      const groupKey = item[key];
      const groupKeyString = String(groupKey); // Convert key to string for object keys
      if (!acc[groupKeyString]) {
        acc[groupKeyString] = [];
      }
      acc[groupKeyString].push(item);
      return acc;
    }, {} as GroupedItems<T>);
  };