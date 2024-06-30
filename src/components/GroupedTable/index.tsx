import React from "react";
import { groupItemsByKey } from "../../utils/groupItemsByKey";
import { Column } from "../../types/utils";

type IGroupedTableProps<T> = {
  items: T[];
  groupBy: keyof T;
  columns: Column<T>[];
  renderGroupHeader: (groupKey: string) => React.ReactNode;
};

const GroupedTable = <T,>({
  items,
  groupBy,
  columns,
  renderGroupHeader,
}: IGroupedTableProps<T>) => {
  const groupedItems = groupItemsByKey(items, groupBy);

  return (
    <table>
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
              <td className="text-white" colSpan={columns.length}>
                {renderGroupHeader(groupKey)}
              </td>
            </tr>
            {groupItems.map((item, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={String(column.accessor)}
                    className="text-white text-center py-1"
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
  );
};

export default GroupedTable;
