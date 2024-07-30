export function transportFee(time) {
    if (time === '08:00' || time === '09:00') {
      return 'R20';
    } else if (time === '12:00') {
      return 'R15';
    } else {
      return 'R10';
    }
  }
  