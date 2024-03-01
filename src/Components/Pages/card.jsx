import {
    TextField, Button, Grid, Paper,
    Typography, Container, FormGroup,
    FormControlLabel, Checkbox, Card, CardContent,
    CardActions, CardMedia, Row, Col, Switch, Pagination, Breadcrumbs
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchAPIProduct, addProductToSession, filterItemPrice, pageChangePagination } from '../../action/action'
const CardProduct = () => {
    const [cart, setCart] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        sessionStorage.setItem('Products', JSON.stringify(cart))
        dispatch(addProductToSession(cart))
    }, [cart])


    const { product, page, limit, currentPage, filter } = useSelector((reduxData) => reduxData.shopReducers)


    useEffect(() => {
        dispatch(fetchAPIProduct(currentPage, limit))


    }, [currentPage])

  

    const onChangePagination = (event, value) => {
        dispatch(pageChangePagination(value))
    }




    const handleProduct = (value) => {
        const newCart = [...cart, value]
        console.log(newCart)
        setCart(newCart)
        sessionStorage.setItem('Products', JSON.stringify(newCart))


    }

    const handleDetail = (value) => {
        sessionStorage.setItem('Detail', JSON.stringify(value))

        console.log(value)
    }

    const handleFilter = (event) => {
        const newFilter = event.target.value


    }


    return (
        <div>
            <div className="form-seach">
                <input className='input-seach' type='text' placeholder=' ' value={filter} onChange={handleFilter} />
                <label className='form-label'>Seach</label>
            </div>


            <Grid container spacing={2}>
                {product.map((element, index) => (
                    <Grid key={index} item xs={4}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={element.imageUrl}
                                title="green iguana"
                            />
                            <CardContent>
                                <a className='a-router-card' href='/Detail' onClick={() => handleDetail(element)}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {element.name}
                                    </Typography>
                                </a>
                                <Typography variant="body2" color="text.secondary">
                                    {element.buyPrice}$
                                    <b style={{ color: 'red' }}>     {element.promotionPrice}$</b>
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', mt: 3 }} color="text.secondary">
                                    {element.description}

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleProduct(element)}>Add to Cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}


            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12} mt={4} style={{ display: "flex", justifyContent: "center" }} >
                <Pagination count={page} page={currentPage} onChange={onChangePagination} variant="outlined" shape="rounded" />
            </Grid>
        </div>
    )
}

export default CardProduct