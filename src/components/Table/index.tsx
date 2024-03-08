import React from "react";
import { IProps } from "./interfaces";

function Table(props: IProps) {
  const { titles, rowItems } = props;

  return (
    <table className="m-auto w-3/6 p-5">
      <thead>
        <tr>
          {titles.map((title: string, key: number) => {
            return <th key={key}>{title}</th>;
          })}
        </tr>
      </thead>
      <tbody>{rowItems}</tbody>
    </table>
  );
}
export default Table;
