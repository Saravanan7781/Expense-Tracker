import { useState } from "react";
import './App.css';
import expenseSymbol from './expenseSymbol.png';
import ExpenseListFilter from "./ExpenseListFilter";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState({ startDate: "", endDate: "" });
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && date) {
      addExpense({ title, amount: parseFloat(amount), date: new Date(date) });
      setTitle("");
      setAmount("");
      setDate("");
    }
  };

  return (
    <div className="App">
      <div className="expenseForm">
        <div className="wholeContainer">
          <div className="expenseform">
            <h1>Form</h1>
            <div className="bodyformouter">
              <div className="bodyForm">
                <form onSubmit={handleSubmit} className="expense-form">
                  <div className="expense-form-real">
                    <div >
                      <img src={expenseSymbol} alt="" height="120px" />
                      <br />
                      <input
                        style={{ marginBottom: "10px" }}
                        type="text"
                        value={title}
                        placeholder="Title"
                        className="textExpense"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <input
                        style={{ marginBottom: "10px" }}
                        type="number"
                        value={amount}
                        placeholder="Amount"
                        className="numberExpense"
                        onChange={(e) => setAmount(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="dateExpense"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" style={{ padding: "7px", borderRadius: "5px", border: "1px solid" }}>Add Expense</button>
                </form>
              </div>
            </div>
          </div>
          <div className="summaryList">
            <h1>Summary</h1>
            <div className="expenseList">
              <ul className="expense-list">
                {expenses.map((expense, index) => (
                  <li className="point" key={index}>
                    {expense.title} - Rs.{expense.amount} on{" "}
                    {expense.date.toLocaleDateString()}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1>Filter your summary</h1>
            <ExpenseListFilter filter={filter} onFilterChange={setFilter} expenses={expenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
