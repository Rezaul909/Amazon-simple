import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const {handleAddToCart, product} = props;
  const { img, name, price, seller, ratings } = product;
  return (
    <div >
      <div>
        <CardGroup className="product">
          <Card>
            <Card.Img variant="top" src={img} />
            <div className="product-info">
              <Card.Body className="pt-1">
                <Card.Title>{name} </Card.Title>
                <h6>Price : ${price} </h6>
                <Card.Text className="pt-4">
                  Manufacturer : {seller} <br />
                  Ratings : {ratings}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="p-0 border-0">
                <button onClick={()=> handleAddToCart(product)} className="text-center w-100 border-0 p-3 ">
                  Add to Cart
                </button>
              </Card.Footer>
            </div>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Product;
