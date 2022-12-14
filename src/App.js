import ExpenseSheet from './components/Expense/ExpenseSheet';
import './components/Expense/ExpenseSheet.css'
import NewExpense from './components/NewExpense/NewExpense';

function Trap() {
  const expenses = [
    {
      id: "e1",
      title: "Sand Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  function addExpenseHandler(expense){
      console.log("That's it");
      console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
     <ExpenseSheet expenses={expenses}></ExpenseSheet>
    </div>
  );
}

export default Trap;
