export function mostProfitableDepartment(salesData) {
    const sales = salesData.reduce((acc, sale) => {
      acc[sale.department] = (acc[sale.department] || 0) + sale.sales;
      return acc;
    }, {});
    return Object.keys(sales).reduce((a, b) => sales[a] > sales[b] ? a : b);
  }
  