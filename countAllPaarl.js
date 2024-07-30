export function countAllPaarl(regNumbers) {
    return regNumbers.split(',').filter(reg => reg.startsWith('CJ')).length;
  }
  