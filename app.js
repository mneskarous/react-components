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
      hovering: false
    };
  }

  onListItemMouseEnter() {
    this.setState({
      hovering: true
    });
  }

  onListItemMouseLeave() {
    this.setState({
      hovering: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };
    return (
      <li style={style} 
      onMouseEnter={this.onListItemMouseEnter.bind(this)} 
      onMouseLeave={this.onListItemMouseLeave.bind(this)}>{this.props.item}</li>
    );
  }

}

 
ReactDOM.render(<App />, document.getElementById("app"));