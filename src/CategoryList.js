import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'
export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" }
    ],
  };

  componentDidMount() {
    this.getCategories()
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }))
  }


  // constructor(props){
  //   super(props)
  //   state:{}
  // }
  render() {
    return <div>
      <h3>{this.props.info.title}</h3>
      <h3>{this.state.counter}</h3>
      <ListGroup>
        {
          this.state.categories.map(category => (
            <ListGroupItem onClick={() => this.props.changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem>
          ))
        }
      </ListGroup>
    </div>
  }
}