import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ProductDetail() {

  const navigate = useNavigate();
  const data = useLocation();

  useEffect(() => {
    console.log(data,"location");
  })

  const back = () => {
    navigate(-1);
  }


  return (
    <>
      <div className='bg-light py-5'>
        <h1 className='text-center'>Product Details</h1>
      </div>
      <Container>
        <div className='row'>
          <div className='col-4 mx-auto mt-5'>
            <Card>
              <Card.Img variant="top" src={data.state.img}>

              </Card.Img>
              <Card.Body>
                <Card.Title>{data.state.name}</Card.Title>
                <Card.Text>
                    {data.state.detail}
                </Card.Text>
                <Card.Text>
                    {data.state.price}
                </Card.Text>
                <Button variant="primary" className='m-0 px-2 py-1' onClick={() => {back()}}>Back</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

      </Container>
    </>

  )
}

export default ProductDetail;