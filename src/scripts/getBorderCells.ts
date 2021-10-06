import _ from "lodash";
import { CellCoordinates } from "./getCellWithCoordinate";
const getBorderCells = (
  gridCells: CellCoordinates[]
): CellCoordinates[] | null => {
  const first = gridCells[0];
  const last = gridCells[gridCells.length - 1];
  const returnCells = [];
  for (const cell of gridCells) {
    //topside
    if (cell.y1 === first.y1 && cell.y2 === first.y2) {
      returnCells.push(cell);
    }
    //bottomSide
    if (cell.y1 === last.y1 && cell.y2 === last.y2) {
      returnCells.push(cell);
    }
    //leftSide
    if (cell.x1 === first.x1 && cell.x2 === first.x2) {
      returnCells.push(cell);
    }
    //rightSide
    if (cell.x1 === last.x1 && cell.x2 === last.x2) {
      returnCells.push(cell);
    }
  }
  return _.uniq(returnCells);
};

export default getBorderCells;
