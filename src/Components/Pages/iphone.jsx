import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import {
    TextField, Button, Grid, Paper,
    Typography, Container, FormGroup,
    FormControlLabel, Checkbox, Card, CardContent,
    CardActions, CardMedia, Row, Col, Switch, Pagination
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchAPIProduct, addProductToSession, filterItemPrice, pageChangePagination } from '../../action/action'
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


const PageIphone = () => {

    const dispatch = useDispatch()



    const { product, sessionProduct, page, limit, currentPage } = useSelector((reduxData) => reduxData.shopReducers)


    useEffect(() => {
        dispatch(fetchAPIProduct(currentPage, limit))


    }, [currentPage])

    const onChangePagination = (event, value) => {
        dispatch(pageChangePagination(value))
    }

    const handleProduct = (value) => {
        
        const itemData = sessionStorage.setItem('Products', JSON.stringify(value))
        dispatch(addProductToSession(itemData))
        console.log(itemData)
    }
    return (
        <div>


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
                                <Typography gutterBottom variant="h5" component="div">
                                    {element.name}
                                </Typography>
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

export default PageIphone