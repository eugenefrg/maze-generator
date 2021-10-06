const createGridCells = (gridSize:{x:number,y:number},cellSize: {x:number,y:number}) => {
    const cells = [];
    for(let x1 = 0; x1 < gridSize.x-cellSize.x; x1+=cellSize.x) {
        for(let y1 = 0; y1 < gridSize.y-cellSize.x; y1+=cellSize.y) {
            cells.push({x1,y1,x2:x1+cellSize.x,y2:y1+cellSize.y})
        }
    }   
    return cells; 
}

export default createGridCells;
