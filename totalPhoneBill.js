export function totalPhoneBill(bill) {
    const calls = bill.match(/call/g) || [];
    const sms = bill.match(/sms/g) || [];
    return (calls.length * 2.75) + (sms.length * 0.65);
  }
  