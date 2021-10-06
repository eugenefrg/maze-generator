import "@testing-library/jest-dom";
import getInternalCells from "./getInternalCells";

test("Will return internal cells", async () => {
  const internalCells = [
    { x1: 250, y1: 250, x2: 500, y2: 500 },
    { x1: 500, y1: 250, x2: 750, y2: 500 },
    { x1: 750, y1: 250, x2: 1000, y2: 500 },
  ];
  const bounds = [
    { x1: 0, y1: 0, x2: 250, y2: 250 },
    { x1: 0, y1: 250, x2: 250, y2: 500 },
    { x1: 0, y1: 500, x2: 250, y2: 750 },
    { x1: 250, y1: 0, x2: 500, y2: 250 },
    { x1: 250, y1: 500, x2: 500, y2: 750 },
    { x1: 500, y1: 0, x2: 750, y2: 250 },
    { x1: 500, y1: 500, x2: 750, y2: 750 },
    { x1: 750, y1: 0, x2: 1000, y2: 250 },
    { x1: 750, y1: 500, x2: 1000, y2: 750 },
    { x1: 1000, y1: 0, x2: 1250, y2: 250 },
    { x1: 1000, y1: 250, x2: 1250, y2: 500 },
    { x1: 1000, y1: 500, x2: 1250, y2: 750 },
  ];
  const gridCells = [
    { x1: 0, y1: 0, x2: 250, y2: 250 },
    { x1: 0, y1: 250, x2: 250, y2: 500 },
    { x1: 0, y1: 500, x2: 250, y2: 750 },
    { x1: 250, y1: 0, x2: 500, y2: 250 },
    { x1: 250, y1: 250, x2: 500, y2: 500 },
    { x1: 250, y1: 500, x2: 500, y2: 750 },
    { x1: 500, y1: 0, x2: 750, y2: 250 },
    { x1: 500, y1: 250, x2: 750, y2: 500 },
    { x1: 500, y1: 500, x2: 750, y2: 750 },
    { x1: 750, y1: 0, x2: 1000, y2: 250 },
    { x1: 750, y1: 250, x2: 1000, y2: 500 },
    { x1: 750, y1: 500, x2: 1000, y2: 750 },
    { x1: 1000, y1: 0, x2: 1250, y2: 250 },
    { x1: 1000, y1: 250, x2: 1250, y2: 500 },
    { x1: 1000, y1: 500, x2: 1250, y2: 750 },
  ];

  const values = getInternalCells(bounds, gridCells);
  expect(values?.toString()).toEqual(internalCells.toString());
});
