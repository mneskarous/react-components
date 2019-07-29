// TODO
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems = {['Spaghetti', 'Meatballs', 'Sauce']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
  {props.groceryItems.map(item => <li>{item}</li>) }
  </ul>
);

var GroceryListItem = (item) => (
  // <li>{item}</li>
);
 
ReactDOM.render(<App />, document.getElementById("app"));