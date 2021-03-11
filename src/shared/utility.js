const isValid = (row, col) => {
  if (row < 1 || col < 1 || row > 8 || col > 8) {
    return false;
  }
  return true;
};

export const getHorseMoves = (row, col) => {
  return [
    [row - 1, col - 2],
    [row - 1, col + 2],
    [row - 2, col - 1],
    [row - 2, col + 1],
    [row + 1, col - 2],
    [row + 1, col + 2],
    [row + 2, col - 1],
    [row + 2, col + 1]
  ];
};
