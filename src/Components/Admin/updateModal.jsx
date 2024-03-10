import { Box, Button, Modal, TextField, Typography, Stack } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import {
    hideModalUpdate, fetchAPIUpdateProduct,
    valueName, valueDesp, valueIMAGE, valueBuyPrice, valueAmount, valuePhone, valueStatus, valuePromotion,
} from '../../action/action'


const UpdateModal = ({ order }) => {
    const dispatch = useDispatch()


    const { product, updateModal, objUpdate } = useSelector((reduxData) => reduxData.shopReducers)
    const [updatedData, setUpdatedData] = useState({})

    useEffect(() => {
        const state = { ...objUpdate }
        setUpdatedData(state)

    }, [objUpdate])



    const [name, setName] = useState(updatedData.name)
    const [description, setDescription] = useState(updatedData.description)
    const [imageUrl, setImageUrl] = useState(updatedData.imageUrl)
    const [buyPrice, setBuyPrice] = useState(updatedData.buyPrice)
    const [amount, setAmount] = useState(updatedData.amount)
    const [phone, setPhone] = useState(updatedData.phone)
    const [promotionPrice, setPromotionPrice] = useState(updatedData.promotionPrice)
    const [status, setStatus] = useState(updatedData.status)
    console.log(updatedData.name)
    // const changeData = () => {

    //     setName(name)
    //     setDescription(updatedData.description)
    //     setImageUrl(updatedData.imageUrl)
    //     setBuyPrice(updatedData.buyPrice)
    //     setAmount(updatedData.amount)
    //     setPhone(updatedData.phone)
    //     setPromotionPrice(updatedData.promotionPrice)
    //     setStatus(updatedData.status)


    //     console.log(name)
    //     console.log(description)
    //     console.log(imageUrl)
    // }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData({ ...updatedData, [name]: value })
    };


    var id = objUpdate._id
    const reqUpdateProduct = () => {
        // changeData()
        var update = { name, description, imageUrl, buyPrice, amount, phone, promotionPrice, status }
        // dispatch(fetchAPIUpdateProduct(id, update))

        console.log(update)

    }


    const hideModal = () => {
        dispatch(hideModalUpdate())
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        height: 800
    }
    return (
        <div>
            <Modal
                open={updateModal}
                onClose={hideModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Name
                    </Typography>
                    <TextField name='Name' id="outlined-basic" label="Name" variant="outlined" defaultValue={objUpdate.name} onChange={handleInputChange} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Description
                    </Typography>
                    <TextField name='Description' id="outlined-basic" label="Description" variant="outlined" defaultValue={objUpdate.description} onChange={(e) => setDescription(e.target.value)} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Image
                    </Typography>
                    <TextField name='Image' id="outlined-basic" label="Image" variant="outlined" defaultValue={objUpdate.imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        BuyPrice
                    </Typography>
                    <TextField name='BuyPrice' id="outlined-basic" label="BuyPrice" variant="outlined" defaultValue={objUpdate.buyPrice} onChange={(e) => setBuyPrice(e.target.value)} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Promotion Price
                    </Typography>
                    <TextField name='Promotion Price' id="outlined-basic" label="BuyPrice" variant="outlined" defaultValue={objUpdate.promotionPrice} onChange={(e) => setPromotionPrice(e.target.value)} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Amount
                    </Typography>
                    <TextField name='Amount' id="outlined-basic" label="Amount" variant="outlined" defaultValue={objUpdate.amount} onChange={(e) => setAmount(e.target.value)} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Phone
                    </Typography>
                    <TextField name='Phone' id="outlined-basic" label="Phone" variant="outlined" defaultValue={objUpdate.phone} onChange={(e) => setPhone(e.target.value)} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Trạng Thái
                    </Typography>
                    <TextField name='Status' id="outlined-basic" label="Trạng Thái" variant="outlined" defaultValue={objUpdate.status} onChange={(e) => setStatus(e.target.value)} />

                    <Stack direction={"row"} spacing={2} marginTop={3} marginLeft={34}>
                        <Button className="button-confirm" variant="contained" onClick={reqUpdateProduct}>CONFIRM</Button>
                        <Button className="button-cancel" variant="contained" onClick={hideModal}>CANCEL</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default UpdateModal