const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  // идем по ячейкам матрицы
  for (let i = 0; i < rows; i++) {
    // создаем новую строчку в результат
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      //считаем мины в ячейке
      let count = 0;      
      // перебираем соседей вокруг ячейки
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          // пропускаем свою ячейку
          if (di === 0 && dj === 0) {
            continue;
          }

          // берём индекс соседа
          const newRow = i + di;
          const newCol = j + dj;
          // проверка ячейки на пределы матрицы
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            // есть мина = увеличиваем счетчик
            if (matrix[newRow][newCol]) {
              count++;
            }
          }
        }
      }
      // возврат значения в матрицу
      result[i][j] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
