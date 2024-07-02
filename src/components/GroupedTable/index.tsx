import React from "react";
import { groupItemsByKey } from "../../utils/groupItemsByKey";
import { Column } from "../../types/utils";

export type IGroupedTableProps<T> = {
  items: T[];
  groupBy: keyof T;
  columns: Column<T>[];
};

const GroupedTable = <T,>({
  items,
  groupBy,
  columns,
}: IGroupedTableProps<T>) => {
  const groupedItems = groupItemsByKey(items, groupBy);

  return (
    <div className="w-full overflow-auto">
      <table className="w-full min-w-[600px]">
        <thead className="border-t-[1px] border-amber-700">
          <tr className="text-white">
            {columns.map((column) => (
              <th className="py-3" key={String(column.accessor)}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedItems).map(([groupKey, groupItems]) => (
            <React.Fragment key={groupKey}>
              <tr>
                <td colSpan={columns.length}>
                  <p className="text-white font-bold bg-amber-700 text-center py-1">
                    {groupKey.toUpperCase()}
                  </p>
                </td>
              </tr>
              {groupItems.map((item, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td
                      key={String(column.accessor)}
                      className="text-white text-center py-3"
                    >
                      {column.render
                        ? column.render(item[column.accessor])
                        : String(item[column.accessor])}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupedTable;
