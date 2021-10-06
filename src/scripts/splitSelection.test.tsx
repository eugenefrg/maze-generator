import "@testing-library/jest-dom";
import splitSelection from "./splitSelection";

test("Will split selection (Column) ", async () => {
  const selection = [
    { x1: 150, y1: 150, x2: 300, y2: 300 },
    { x1: 150, y1: 300, x2: 300, y2: 450 },
    { x1: 150, y1: 450, x2: 300, y2: 600 },
    { x1: 300, y1: 150, x2: 450, y2: 300 },
    { x1: 300, y1: 300, x2: 450, y2: 450 },
    { x1: 300, y1: 450, x2: 450, y2: 600 },
    { x1: 450, y1: 150, x2: 600, y2: 300 },
    { x1: 450, y1: 300, x2: 600, y2: 450 },
    { x1: 450, y1: 450, x2: 600, y2: 600 },
    { x1: 600, y1: 150, x2: 750, y2: 300 },
    { x1: 600, y1: 300, x2: 750, y2: 450 },
    { x1: 600, y1: 450, x2: 750, y2: 600 },
    { x1: 750, y1: 150, x2: 900, y2: 300 },
    { x1: 750, y1: 300, x2: 900, y2: 450 },
    { x1: 750, y1: 450, x2: 900, y2: 600 },
    { x1: 900, y1: 150, x2: 1050, y2: 300 },
    { x1: 900, y1: 300, x2: 1050, y2: 450 },
    { x1: 900, y1: 450, x2: 1050, y2: 600 },
  ];
  const division = [
    { x1: 600, y1: 150, x2: 750, y2: 300 },
    { x1: 600, y1: 300, x2: 750, y2: 450 },
    { x1: 600, y1: 450, x2: 750, y2: 600 },
  ];
  const side1 = [
    { x1: 150, y1: 150, x2: 300, y2: 300 },
    { x1: 300, y1: 150, x2: 450, y2: 300 },
    { x1: 450, y1: 150, x2: 600, y2: 300 },
    { x1: 150, y1: 300, x2: 300, y2: 450 },
    { x1: 300, y1: 300, x2: 450, y2: 450 },
    { x1: 450, y1: 300, x2: 600, y2: 450 },
    { x1: 150, y1: 450, x2: 300, y2: 600 },
    { x1: 300, y1: 450, x2: 450, y2: 600 },
    { x1: 450, y1: 450, x2: 600, y2: 600 },
  ];
  const side2 = [
    { x1: 750, y1: 150, x2: 900, y2: 300 },
    { x1: 900, y1: 150, x2: 1050, y2: 300 },
    { x1: 750, y1: 300, x2: 900, y2: 450 },
    { x1: 900, y1: 300, x2: 1050, y2: 450 },
    { x1: 750, y1: 450, x2: 900, y2: 600 },
    { x1: 900, y1: 450, x2: 1050, y2: 600 },
  ];
  const expectResult = { side1, side2, division };
  const values = splitSelection({ column: 3 }, selection);
  expect(values?.toString()).toEqual(expectResult.toString());
});

test("Will split selection (column) ", async () => {
  const selection = [
    { x1: 150, y1: 150, x2: 300, y2: 300 },
    { x1: 150, y1: 300, x2: 300, y2: 450 },
    { x1: 150, y1: 450, x2: 300, y2: 600 },
    { x1: 300, y1: 150, x2: 450, y2: 300 },
    { x1: 300, y1: 300, x2: 450, y2: 450 },
    { x1: 300, y1: 450, x2: 450, y2: 600 },
    { x1: 450, y1: 150, x2: 600, y2: 300 },
    { x1: 450, y1: 300, x2: 600, y2: 450 },
    { x1: 450, y1: 450, x2: 600, y2: 600 },
    { x1: 600, y1: 150, x2: 750, y2: 300 },
    { x1: 600, y1: 300, x2: 750, y2: 450 },
    { x1: 600, y1: 450, x2: 750, y2: 600 },
    { x1: 750, y1: 150, x2: 900, y2: 300 },
    { x1: 750, y1: 300, x2: 900, y2: 450 },
    { x1: 750, y1: 450, x2: 900, y2: 600 },
    { x1: 900, y1: 150, x2: 1050, y2: 300 },
    { x1: 900, y1: 300, x2: 1050, y2: 450 },
    { x1: 900, y1: 450, x2: 1050, y2: 600 },
  ];
  const division = [
    [
      { x1: 150, y1: 300, x2: 300, y2: 450 },
      { x1: 300, y1: 300, x2: 450, y2: 450 },
      { x1: 450, y1: 300, x2: 600, y2: 450 },
      { x1: 600, y1: 300, x2: 750, y2: 450 },
      { x1: 750, y1: 300, x2: 900, y2: 450 },
      { x1: 900, y1: 300, x2: 1050, y2: 450 },
    ],
  ];
  const side1 = [
    [
      { x1: 150, y1: 150, x2: 300, y2: 300 },
      { x1: 300, y1: 150, x2: 450, y2: 300 },
      { x1: 450, y1: 150, x2: 600, y2: 300 },
      { x1: 600, y1: 150, x2: 750, y2: 300 },
      { x1: 750, y1: 150, x2: 900, y2: 300 },
      { x1: 900, y1: 150, x2: 1050, y2: 300 },
    ],
  ];
  const side2 = [
    [
      { x1: 150, y1: 450, x2: 300, y2: 600 },
      { x1: 300, y1: 450, x2: 450, y2: 600 },
      { x1: 450, y1: 450, x2: 600, y2: 600 },
      { x1: 600, y1: 450, x2: 750, y2: 600 },
      { x1: 750, y1: 450, x2: 900, y2: 600 },
      { x1: 900, y1: 450, x2: 1050, y2: 600 },
    ],
  ];
  const expectResult = { side1, side2, division };
  const values = splitSelection({ row: 2 }, selection);
  expect(values?.toString()).toEqual(expectResult.toString());
});

test("Will split a row", async () => {
  const selection = [
    { x1: 150, y1: 300, x2: 300, y2: 450 },
    { x1: 300, y1: 300, x2: 450, y2: 450 },
    { x1: 450, y1: 300, x2: 600, y2: 450 },
    { x1: 600, y1: 300, x2: 750, y2: 450 },
    { x1: 750, y1: 300, x2: 900, y2: 450 },
    { x1: 900, y1: 300, x2: 1050, y2: 450 },
  ];
  const division = [{ x1: 450, y1: 300, x2: 600, y2: 450 }];
  const side1 = [
    { x1: 150, y1: 300, x2: 300, y2: 450 },
    { x1: 300, y1: 300, x2: 450, y2: 450 },
  ];
  const side2 = [
    { x1: 600, y1: 300, x2: 750, y2: 450 },
    { x1: 750, y1: 300, x2: 900, y2: 450 },
    { x1: 900, y1: 300, x2: 1050, y2: 450 },
  ];
  const expectResult = { side1, side2, division };
  const values = splitSelection({ column: 3 }, selection);
  expect(values?.toString()).toEqual(expectResult.toString());
});

test("Will split a column", async () => {
  const selection = [
    { x1: 450, y1: 150, x2: 600, y2: 300 },
    { x1: 450, y1: 300, x2: 600, y2: 450 },
    { x1: 450, y1: 450, x2: 600, y2: 600 },
  ];
  const division = [{ x1: 450, y1: 300, x2: 600, y2: 450 }];
  const side1 = [{ x1: 450, y1: 150, x2: 600, y2: 300 }];
  const side2 = [{ x1: 450, y1: 450, x2: 600, y2: 600 }];
  const expectResult = { side1, side2, division };
  const values = splitSelection({ row: 2 }, selection);
  expect(values?.toString()).toEqual(expectResult.toString());
});
