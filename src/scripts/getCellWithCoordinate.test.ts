import "@testing-library/jest-dom";
import getCellWithCoordinate from "./getCellWithCoordinate";

const smallSourceGrid = [
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

test("coordinate on upper left cell", async () => {
  const values = getCellWithCoordinate({ x: 119, y: 88 }, smallSourceGrid);
  expect(values).toStrictEqual({ x1: 0, y1: 0, x2: 250, y2: 250 });
});

test("coordinate on lower right cell", async () => {
  const values = getCellWithCoordinate({ x: 1134, y: 621 }, smallSourceGrid);
  expect(values).toStrictEqual({ x1: 1000, y1: 500, x2: 1250, y2: 750 });
});

test("coordinate on center cell", async () => {
  const values = getCellWithCoordinate({ x: 756, y: 410 }, smallSourceGrid);
  expect(values).toStrictEqual({ x1: 750, y1: 250, x2: 1000, y2: 500 });
});
