function ExpenseListFilter({ onFilterChange, filter, expenses }) {
    const filteredExpenses = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      const startDate = filter.startDate ? new Date(filter.startDate) : null;
      const endDate = filter.endDate ? new Date(filter.endDate) : null;
      
      return (
        (!startDate || expenseDate >= startDate) &&
        (!endDate || expenseDate <= endDate)
      );
    });
  
    return (
      <div className="expense-filter">  
        <input
          type="date"
          value={filter.startDate}
          onChange={(e) =>
            onFilterChange({ ...filter, startDate: e.target.value })
          }
        />
        <label>To:</label>
        <input
          type="date"
          value={filter.endDate}
          onChange={(e) =>
            onFilterChange({ ...filter, endDate: e.target.value })
          }
        />
  
       
        <ul>
          {filteredExpenses.map((expense, index) => (
            <li key={index} style={{listStyleType:"none", marginTop:"10px"}}>
              {expense.title} - Rs.{expense.amount} on{" "}
              {expense.date.toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ExpenseListFilter;
  