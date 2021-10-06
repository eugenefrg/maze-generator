import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.scss";
import createGridCells from "./scripts/createGridCells";
import getBorderCells from "./scripts/getBorderCells";
import getCellWithCoordinate, {
  CellCoordinates,
} from "./scripts/getCellWithCoordinate";
import getInternalCells from "./scripts/getInternalCells";

const App: React.FC = () => {
  const cellSize = { x: 150, y: 150 };
  const [canvasCtx, setCanvasCtx] = useState<CanvasRenderingContext2D>();
  const [containerSize, setContainerSize] = useState({ width: 10, height: 10 });
  const containerRef = useCallback((node) => {
    if (node !== null) {
      const { height, width } = node.getBoundingClientRect();
      setContainerSize({ width, height });
    }
  }, []);
  const gridDimensions = useMemo(() => {
    return {
      x: (Math.floor(containerSize.width) / cellSize.x) * cellSize.x,
      y: (Math.floor(containerSize.height) / cellSize.y) * cellSize.y,
    };
  }, [containerSize.width, containerSize.height, cellSize.x, cellSize.y]);

  const gridCells = useMemo(() => {
    return createGridCells(gridDimensions, cellSize);
  }, [gridDimensions]);
  const [gridCellModifiers, setGridCellModifiers] = useState<any[]>([]);

  const handleResize = () => {
    const containerElement = document.querySelector(".container");
    if (containerElement) {
      const computedStyle = window.getComputedStyle(containerElement);
      setContainerSize({
        width: Number(
          computedStyle.getPropertyValue("width").replace("px", "")
        ),
        height: Number(
          computedStyle.getPropertyValue("height").replace("px", "")
        ),
      });
      drawGrid();
    }
  };

  const drawGrid = () => {
    if (canvasCtx) {
      const width = Math.floor(containerSize?.width / cellSize.x) * cellSize.x;
      canvasCtx?.clearRect(0, 0, width, containerSize?.height);
      for (const cell of gridCells) {
        canvasCtx.beginPath();
        canvasCtx.rect(cell.x1, cell.y1, cellSize.x, cellSize.y);
        canvasCtx.strokeStyle = "#737373";
        canvasCtx.stroke();
        const cellModifier = gridCellModifiers.find(
          (m) =>
            m.x1 === cell.x1 &&
            m.y1 === cell?.y1 &&
            m.x2 === cell.x2 &&
            m.y2 === cell.y2
        );
        if (cellModifier?.isActive === true) {
          canvasCtx.fillStyle = "black";
          canvasCtx.fill();
        } else {
          canvasCtx.fillStyle = "white";
          canvasCtx.fill();
        }
      }
    }
  };

  const handleClickedCell = (check: { x: number; y: number }) => {
    const cell = getCellWithCoordinate(check, gridCells);
    if (!cell) return null;
    const modifiers = gridCellModifiers || [];
    const currentCellModifier = modifiers.find(
      (m) =>
        m.x1 === cell?.x1 &&
        m.y1 === cell?.y1 &&
        m.x2 === cell?.x2 &&
        m.y2 === cell?.y2
    );
    if (currentCellModifier) {
      const modifierIndex = modifiers.findIndex((m) => {
        return (
          m.x1 === cell?.x1 &&
          m.y1 === cell?.y1 &&
          m.x2 === cell?.x2 &&
          m.y2 === cell?.y2
        );
      });
      if (modifierIndex >= 0) {
        const currentModifier = modifiers[modifierIndex];
        modifiers[modifierIndex] = {
          ...currentModifier,
          isActive: !currentModifier.isActive,
        };
        setGridCellModifiers([...modifiers]);
      }
    } else {
      modifiers.push({ ...cell, isActive: true });
      setGridCellModifiers([...modifiers]);
    }
  };

  const canvasRef = useCallback(
    (node) => {
      if (node !== null) {
        node.onclick = (e: PointerEvent) => {
          handleClickedCell({ x: e.clientX, y: e.clientY });
        };
        setCanvasCtx(node.getContext("2d"));
      }
    },
    [gridCells]
  );

  useEffect(() => {
    const onResize = () => {
      handleResize();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  useEffect(() => {
    if (containerSize) {
      const borderCells = getBorderCells(gridCells) as CellCoordinates[];
      const internalCells = getInternalCells(
        borderCells,
        gridCells
      ) as CellCoordinates[];
      // setGridCellModifiers([
      // ...borderCells.map((i) => ({ ...i, isActive: true })),
      // ...internalCells.map((i) => ({ ...i, isActive: true })),
      // ]);
      drawGrid();
    }
  }, [containerSize, canvasCtx]);
  useEffect(drawGrid, [gridCellModifiers]);
  return (
    <div ref={containerRef} className="container">
      <canvas
        ref={canvasRef}
        width={containerSize.width}
        height={containerSize.height}
      ></canvas>
    </div>
  );
};

export default App;
