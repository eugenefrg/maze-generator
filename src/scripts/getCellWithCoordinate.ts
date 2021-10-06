export interface CellCoordinates {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const getCellWithCoordinate = (
  check: { x: number; y: number },
  gridCells: CellCoordinates[]
): CellCoordinates | null => {
  for (const cell of gridCells) {
    const { x1, y1, x2, y2 } = cell;
    if (x1 <= check.x && x2 >= check.x) {
      if (y1 <= check.y && y2 >= check.y) {
        return cell;
      }
    }
  }
  return null;
};

export default getCellWithCoordinate;
