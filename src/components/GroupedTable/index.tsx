import React from "react";
import { groupItemsByKey } from "../../utils/groupItemsByKey";
import { Column } from "../../types/utils";

type IGroupedTableProps<T> = {
  items: T[];
  groupBy: keyof T;
  columns: Column<T>[];
  renderGroupHeader: (groupKey: string) => React.ReactNode;
  variant?: string;
  textColor?: string;
};

const GroupedTable = <T,>({
  items,
  groupBy,
  columns,
  renderGroupHeader,
  variant = "amber-700",
  textColor = "white",
}: IGroupedTableProps<T>) => {
  const groupedItems = groupItemsByKey(items, groupBy);

  return (
    <table>
      <thead className={`border-t-[1px] border-${variant}`}>
        <tr className={`text-${textColor}`}>
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
              <td className={`text-${textColor}`} colSpan={columns.length}>
                {renderGroupHeader(groupKey)}
              </td>
            </tr>
            {groupItems.map((item, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={String(column.accessor)}
                    className={`text-${textColor} text-center py-3`}
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
