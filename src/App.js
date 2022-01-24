import { Col, Row } from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi'
import {Container} from 'reactstrap'
import ProductList from './ProductList';
function App() {
  let productInfo = {title: "Product List"}
  let categoryInfo = {title: "Category List"}
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList info={productInfo}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
