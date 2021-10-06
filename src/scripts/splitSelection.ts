import { CellCoordinates } from "./getCellWithCoordinate";

const splitSelection = (
  splitAt: { column?: number; row?: number },
  selection: CellCoordinates[]
) => {
  const item = selection[0];
  const cellSize = { x: item.x1 - item.x2, y: item.y1 - item.y2 };
  const side1 = [];
  const side2 = [];
  const division = [];
  if (splitAt.column) {
    const dividerXCoords = {
      x1: item.x1 + cellSize.x * splitAt.column,
      x2: item.x2 + cellSize.x * splitAt.column,
    };
    for (const cell of selection) {
      if (cell.x1 < dividerXCoords.x1) {
        side1.push(cell);
      } else if (cell.x2 > dividerXCoords.x2) {
        side2.push(cell);
      } else {
        division.push(cell);
      }
    }
  }
  return { side1, side2, division };
};

export default splitSelection;
