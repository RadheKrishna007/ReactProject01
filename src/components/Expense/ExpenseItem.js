import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react';

function ExpenseItem(props) {


    const [title,setTile] = useState(props.name);

    const ClickHandler = () => {
      setTile('Updated!!!');
      console.log(title);
    };
    return (
      <Card className="expense-item">
        <ExpenseDate dateNew = {props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        <button onClick={ClickHandler}>Click me!</button>
      </Card>
    );
}

export default ExpenseItem;