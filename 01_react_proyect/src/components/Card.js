import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className; // We need to pass the classes from the wrapped items and add card
  return <div className={classes}>{props.children}</div>; //props.children to show the content wrapped with card
}

export default Card;
