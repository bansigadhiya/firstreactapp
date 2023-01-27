import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Product() {

  const navigate = useNavigate();

  const product1 = () => {
    navigate("/productDetail" , {state : {img : "images/tshirt.jpg",name : "winter tshirt",detail : "Best Styles for winter T-shirts: ... Fresh, light, zingy and even pastel colours are suitable in the Summer.",price : "900/-"}});
  }

  const product2 = () => {
    navigate("/productDetail" , {state : {img : "images/woman-tshirt.jpeg",name : "Women tshirt",detail : "Girls Tshirts: Choose from a wide range of printed girls tshirts online. Buy tshirts for girls from Shoppers Stop Now!",price : "600/-"}});
  }

  const product3 = () => {
    navigate("/productDetail" , {state : {img : "images/jeans.jpeg",name : "Jeans Pent",detail : "Jeans are a type of pants or trousers made from denim or dungaree cloth.",price : "750/-"}});
  }

  const product4 = () => {
    navigate("/productDetail" , {state : {img : "images/dress.jpg",name : "Woman Dress",detail : "Buy Dresses for Women. Huge collection of women's dresses at low offer price & discounts at COD, Easy Returns & Exchanges.",price : "800/-"}});
  }


  return (
    <Container>
      <h1 className='text-center my-4'>Products</h1>
      <div className='row'>
        <div className='col-3'>
          <Card>
            <Card.Img variant="top" src="images/tshirt.jpg" />
            <Card.Body className='text-center'>
              <Button variant="primary" className='m-0 px-2 py-1' onClick={() => {product1()}}>View</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-3'>
          <Card>
            <Card.Img variant="top" src="images/woman-tshirt.jpeg" />
            <Card.Body className='text-center'>
              <Button variant="primary" className='m-0 px-2 py-1' onClick={() => {product2()}}>View</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-3'>
          <Card>
            <Card.Img variant="top" src="images/jeans.jpeg" />
            <Card.Body className='text-center'>
              <Button variant="primary" className='m-0 px-2 py-1' onClick={() => {product3()}}>View</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-3'>
          <Card>
            <Card.Img variant="top" src="images/dress.jpg" />
            <Card.Body className='text-center'>
              <Button variant="primary" className='m-0 px-2 py-1' onClick={() => {product4()}}>View</Button>
            </Card.Body>
          </Card>
        </div>

      </div>

    </Container>
  )
}

export default Product
