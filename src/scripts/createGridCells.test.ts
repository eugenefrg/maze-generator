import '@testing-library/jest-dom'
import createGridCells from './createGridCells'

test('case 1', async () => {
  const values = createGridCells({x:5,y:5},{x:3,y:3})  
  const expectResult = [
    { x1: 0, y1: 0, x2: 3, y2: 3 },
]
  expect(JSON.stringify(values)).toStrictEqual(JSON.stringify(expectResult))
})