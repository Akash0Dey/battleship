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

export const findInField = (field, position) => {
  const rowNo = position.at(0);
  const colNo = position.at(1) - 1;

  return field[rowNo][colNo]
}

export const setShip = (field, shipPosition) => {
  const updatedField = structuredClone(field);

  findInField(updatedField, shipPosition).isEmpty = false;

  return updatedField;
};

export const setShips = (field, shipPositions) => {
  return shipPositions.reduce(
    (updatedField, shipPosition) => setShip(updatedField, shipPosition),
    field
  );
};

export const guessPosition = (field, position) => {

}
// console.log(setShips(createField(5), ["a1", "a2", "b4", "c1"]))