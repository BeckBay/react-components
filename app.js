var { useState } = React;

var Milk = () => <div>Milk</div>;
var Cookies = () => <div>Cookies</div>;

var Fruit = (props) => {
  var [isDone, setIsDone] = useState(false);
  var style = {
    fontWeight: isDone ? 'bold' : 'normal'
  };

  var onListItemClick = () => {
    console.log('I got clicked');
    setIsDone(!isDone);
  };

  return (
    <li style={style} onClick={onListItemClick}>
      {props.todo}
    </li>
  );
};

var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      <li><Milk /></li>
      <li><Cookies /></li>
      {props.sub.map((sub, index) => (
        <Fruit key={index} todo={sub} />
      ))}
    </ul>
  </div>
);

ReactDOM.render(
  <GroceryList sub={['banana', 'apple', 'orange']} />,
  document.getElementById('app')
);



