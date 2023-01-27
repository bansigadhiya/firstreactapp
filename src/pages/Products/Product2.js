import React, { useState } from 'react'
import { product } from '../../Constant/Products';
// import { uniqData } from '../../components/Utils/Uniqlist';
import { UniqData } from '../../components/Utils/Uniqlist';
import { Button, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Product2() {

    const [allProduct, setAllProduct] = useState(product);
    console.log(allProduct, "allProduct");

    const categories = UniqData(product, "category");
    console.log(categories, "categoris");

    const filterList = (category) => {
        // console.log(category,"category");
        const filterData = product.filter((data) => {
            
            return data.category == category;
        })
        setAllProduct(filterData)
    }
    const all = () => {
        setAllProduct(product);
    }

    return (
        <div>
            <Container className='text-center'>
                <Button className='mx-4 my-4' onClick={() => {all()}}>All</Button>
                {
                    categories.map((category) => {

                        return (
                            <Button className='mx-4 my-4' onClick={() => {filterList(category)}}>{category}</Button>
                        )
                    })
                }
            </Container>
            <Container>
                <Row>
                    {
                        allProduct.map((product) => {
                            return (

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product.thumbnail} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Product2
