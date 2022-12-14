import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseSheet.css';

function ExpenseSheet(props){
    return(<Card className="expenses">
         <ExpenseItem name={props.expenses[0].title}
        price={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem name={props.expenses[1].title}
        price={props.expenses[1].amount}
        date={props.expenses[1].date}></ExpenseItem>
      <ExpenseItem name={props.expenses[2].title}
        price={props.expenses[2].amount}
        date={props.expenses[2].date}></ExpenseItem>
      <ExpenseItem name={props.expenses[3].title}
        price={props.expenses[3].amount}
        date={props.expenses[3].date}></ExpenseItem>
    </Card>);
}

export default ExpenseSheet;