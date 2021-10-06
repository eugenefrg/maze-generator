import { CellCoordinates } from "./getCellWithCoordinate";
const getInternalCells = (
  bounds: CellCoordinates[], // can just be first and last cells of both upper left and lower right corners.
  gridCells: CellCoordinates[]
): CellCoordinates[] | null => {
  const first = bounds[0];
  const last = bounds[bounds.length - 1];
  const returnCells = [];
  for (const cell of gridCells) {
    if (
      cell.x1 >= first.x2 &&
      cell.y1 >= first.y2 &&
      cell.x2 <= last.x1 &&
      cell.y2 <= last.y1
    ) {
      returnCells.push(cell);
    }
  }
  return returnCells;
};

export default getInternalCells;
