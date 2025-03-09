export const range = (start, stop, step = 1) => {
  const numbers = [];

  for (let number = start; number < stop; number += step) {
    numbers.push(number);
  }

  return numbers;
};

export const defaultFieldSpace = () => {
  return { isEmpty: true, isFound: false };
};

export const createRow = (rowSize) => {
  const row = [];
  for (const _ of range(0, rowSize)) {
    row.push(defaultFieldSpace());
  }

  return row;
};
export const createField = (width) => {
  const rows = "abcdefghijklmnopqrstuvwxyz".slice(0, width);
  return rows.split("").reduce((field, row) => {
    field[row] = createRow(width);
    return field;
  }, {});
};

export const setShip = (field, shipPosition) => {
  const updatedField = structuredClone(field);
  const rowNo = shipPosition.at(0);
  const colNo = shipPosition.at(1) - 1;

  updatedField[rowNo][colNo].isEmpty = false;

  return updatedField;
};
