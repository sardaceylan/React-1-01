import React, { Component } from "react";
import { Col, Row } from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi'
import { Container } from 'reactstrap'
import ProductList from './ProductList';

export default class App extends Component {
  state = { currentCategory: "", products: [] }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }


  getProducts = categoryId => {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }
  componentDidMount() {
    this.getProducts()
  }

  render() {
    let productInfo = { title: "Product List" }
    let categoryInfo = { title: "Category List" }
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}>
              </ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}