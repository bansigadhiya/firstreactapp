import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { UniqData } from '../../components/Utils/Uniqlist';
import { product } from '../../Constant/Products';
import Card from 'react-bootstrap/Card';

function Product() {

    const [allproducts, setAllproducts] = useState(product);
    const [searchProduct, setSearchProduct] = useState({
        search: ''
    })

    const categories = UniqData(product, "category");

    const filterList = (category) => {

        const filterData = product.filter((data) => {

            return data.category == category;
        })
        setAllproducts(filterData)
    }

    const allData = () => {
        setAllproducts(product)
    }

    const handleSearch = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setSearchProduct({ [name]: value });

        const filterSearch = product.filter((data) => {

            return data.title.toLowerCase().search(value) != -1;
        })
        setAllproducts(filterSearch)
    }

    const handleSort = (key,type) => {
        let sortedData = [...allproducts];

        sortedData.sort((proA,proB) => {
            if(type == "low"){
                return proA[key] - proB[key];
            }
            else if(type == "high"){
                return proB[key] - proA[key];
            }
            else if(type == "asc"){
                return proA[key].localeCompare(proB[key])
            }
            else{
                return proB[key].localeCompare(proA[key]) 
            }
            
        })
        setAllproducts(sortedData)
    }
    return (
        <div>
            <Container className='text-center'>
                <Row className='align-items-center justify-content-between'>
                    <div className='col-8'>
                        <Button className='bg-dark border-0 rounded-0' onClick={() => { allData() }}>All</Button>
                        {
                            categories.map((category) => {

                                return (
                                    <>
                                        <Button className='mx-3 my-4 bg-dark border-0 rounded-0' onClick={() => { filterList(category) }}>
                                            {category}
                                        </Button>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='col-3'>
                        <Form>
                            <Form.Control placeholder="Search Product.." className='rounded-0' name='search' value={searchProduct.search} onChange={(e) => { handleSearch(e) }} />
                        </Form>
                    </div>
                </Row>
                <Row className='align-items-center'>
                    <Button className='mx-3 mb-4 bg-dark border-0 rounded-0' style={{ width: '100px' }} onClick={() => {handleSort("price","low")}}>
                        Low Price
                    </Button>
                    <Button className='mx-3 mb-4 bg-dark border-0 rounded-0' style={{ width: '100px' }} onClick={() => {handleSort("price","high")}}>
                        High Price
                    </Button>
                    <Button className='mx-3 mb-4 bg-dark border-0 rounded-0' style={{ width: '100px' }} onClick={() => {handleSort("title","asc")}}>
                        a-z
                    </Button>
                    <Button className='mx-3 mb-4 bg-dark border-0 rounded-0' style={{ width: '100px' }} onClick={() => {handleSort("title","dsc")}}>
                        z-a
                    </Button>
                </Row>
            </Container>
            <Container>
                <Row>
                    {
                        allproducts.map((product) => {

                            return (
                                <div className='col-3'>
                                    <Card className="mb-4 rounded-0 mx-2">
                                        <Card.Img variant="top" src={product.thumbnail} style={{ height: '250px', objectFit: 'cover', borderRadius: '0px' }} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text className='mb-2'>
                                                {
                                                    `${product.price} Rs.`
                                                }
                                            </Card.Text>
                                            <Card.Text>
                                                {product.description}
                                            </Card.Text>
                                            <Button variant="primary" className='bg-dark border-0 rounded-0'>Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Product
