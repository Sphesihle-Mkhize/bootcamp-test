export function countAllFromTown(regNumbers, town) {
    return regNumbers.split(',').filter(reg => reg.startsWith(town)).length;
  }
  