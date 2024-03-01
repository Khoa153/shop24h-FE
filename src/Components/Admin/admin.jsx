import { useDispatch, useSelector } from "react-redux"
import {
    Select, MenuItem, Button, CircularProgress, Container, Grid,
    Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Modal
} from "@mui/material";
import { useEffect } from "react";
import { fetchAPIProduct, showModalCreate, pageChangePagination } from '../../action/action'
import '../../App.css';

import CreateModdal from "./createModal";
const Admin = () => {
    const dispatch = useDispatch()
    const { product, page, limit, currentPage, isLoading } = useSelector((reduxData) => reduxData.shopReducers)

    useEffect(() => {
        dispatch(fetchAPIProduct(currentPage, limit))
    }, [currentPage])

    const handleShow = (value) => {
        console.log(value)
    }

    const deleteOrder = (value) => {
        console.log(value)
    } 

    const onChangePagination = (event, value) => {
        dispatch(pageChangePagination(value))
    }

    const onShowModalCreate = () => {
        dispatch(showModalCreate())
    }
    return (

        <Container>
            <Grid container mt={5}>
                <div className="header-admin">
                    <h1 className="h1-order">Danh sách đơn hàng </h1>
                    <button className="button-create" type="button" onClick={onShowModalCreate}>Tạo đơn hàng</button>
                </div>
                {
                    isLoading ?
                        <Grid item lg={12} md={12} sm={12} xs={12} textAlign="center">
                            <CircularProgress />
                        </Grid>
                        :
                        <Grid >

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 750 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Name</TableCell>
                                            <TableCell align="left">Description</TableCell>
                                            <TableCell align="left">Image</TableCell>

                                            <TableCell align="left">BuyPrice</TableCell>

                                            <TableCell align="center">Amount</TableCell>

                                            <TableCell align="center">Phone</TableCell>
                                            <TableCell align="center">Trạng Thái</TableCell>

                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {product.map((element, index) => (
                                            <TableRow
                                                key={index}

                                            >

                                                <TableCell align="left">{element.name}</TableCell>
                                                <TableCell align="left">{element.description}</TableCell>
                                                <TableCell align="left">{element.imageUrl}</TableCell>
                                                <TableCell align="left">{element.buyPrice}</TableCell>
                                                <TableCell align="left">{element.amount}</TableCell>

                                                <TableCell align="left">{element.phone}</TableCell>
                                                <TableCell align="left">{element.status}</TableCell>
                                                <TableCell align="center"><Button onClick={() => handleShow(element)}>Chi tiết</Button></TableCell>
                                                <TableCell align="center"><Button onClick={() => deleteOrder(element.id)}>Delete</Button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                }

                <Grid item lg={12} md={12} sm={12} xs={12} mt={4} style={{ display: "flex", justifyContent: "center" }} >
                    <Pagination count={page} page={currentPage} onChange={onChangePagination} variant="outlined" shape="rounded" />
                </Grid>


                <CreateModdal
                onShowModalCreate={onShowModalCreate} />

            </Grid>
        </Container>

    )
}

export default Admin