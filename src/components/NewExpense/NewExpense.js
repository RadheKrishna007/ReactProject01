import ExpenseForm from './ExpenseForm';
import React from 'react';
import './NewExpense.css';

function NewExpense(props){

    const SaveExpenseHandler = (expenseDataArg) => {
        const ExpenseData = {
            ...expenseDataArg,
            id: Math.random.toString
        };
      //  console.log(expenseDataArg);
        props.onAddExpense(expenseDataArg);
    };
return(
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={SaveExpenseHandler}></ExpenseForm>
    </div>
);
}
export default NewExpense;