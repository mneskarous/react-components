// TODO
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['Spaghetti', 'Meatballs', 'Sauce']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item => 
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemMouseOver() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)} >{this.props.item}</li>
    );
  }

}

 
ReactDOM.render(<App />, document.getElementById("app"));