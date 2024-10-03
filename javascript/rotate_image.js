/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// o(n2) time complexity. 
var rotate = function (matrix) {
  matrix.reverse();

  for (let i = 0; i < matrix[0].length - 1; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
