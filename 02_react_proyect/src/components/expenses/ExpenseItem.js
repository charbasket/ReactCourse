import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

const ExpenseItem = (props) => {
  // It´s always better to have the logic outside the return.
  // It´s better to make another component

  // If a function is trigger by a event, we use Handler at the end of the funcion name
  // We don´t use  () when calling a Handler function on an event
  const clickHandler = () => {
    console.log('Clicked!!');
  };

  // Here we use props.title and props.amount but we have to pass forward props.date to ExpenseDate

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
