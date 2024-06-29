import { ReactNode } from "react";

export interface GroupedItems<T> {
    [key: string]: T[];
  }

  export interface Column<T> {
    header: string;
    accessor: keyof T;
    render?: (value: T[k]) => ReactNode;
  }