import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  // It´s always better to have the logic outside the return.
  // It´s better to make another component

  // Here we use props.title and props.amount but we have to pass forward props.date to ExpenseDate
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
