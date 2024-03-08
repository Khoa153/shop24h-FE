import { Box, Button, Modal, TextField, Typography, Stack } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import {
    hideModalUpdate, fetchAPIUpdateProduct,
    valueName, valueDesp, valueIMAGE, valueBuyPrice, valueAmount, valuePhone, valueStatus, valuePromotion, funcNameUpdate
} from '../../action/action'

const UpdateModal = () => {
    const dispatch = useDispatch()

    const { product, name, description, imageUrl, buyPrice, promotionPrice, amount, phone, status, updateModal, objUpdate } = useSelector((reduxData) => reduxData.shopReducers)

    const hideModal = () => {
        dispatch(hideModalUpdate())
    }

    var id = objUpdate._id


    const update = {
        name, description, imageUrl, buyPrice, promotionPrice, amount, phone, status
    }
    const reqUpdateProduct = (update) => {

        console.log(update)
        dispatch(fetchAPIUpdateProduct(id, update))

    }




    const inputName = (event) => {
        const value = event.target.value
        dispatch(valueName(value))
    }

    const inputDes = (event) => {
        const value = event.target.value
        dispatch(valueDesp(value))
    }

    const inputImg = (event) => {
        const value = event.target.value
        dispatch(valueIMAGE(value))
    }

    const inputPrice = (event) => {
        const value = event.target.value
        dispatch(valueBuyPrice(value))
    }

    const inputPromotion = (event) => {
        const value = event.target.value
        dispatch(valuePromotion(value))
    }

    const inputAmount = (event) => {
        const value = event.target.value
        dispatch(valueAmount(value))

    }

    const inputPhone = (event) => {
        const value = event.target.value
        dispatch(valuePhone(value))
    }

    const inputStatus = (event) => {
        const value = event.target.value
        dispatch(valueStatus(value))
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
                    <TextField required id="outlined-basic" label="Name" variant="outlined" defaultValue={objUpdate.name} onChange={inputName} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Description
                    </Typography>
                    <TextField id="outlined-basic" label="Description" variant="outlined" defaultValue={objUpdate.description} onChange={inputDes} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Image
                    </Typography>
                    <TextField id="outlined-basic" label="Image" variant="outlined" defaultValue={objUpdate.imageUrl} onChange={inputImg} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        BuyPrice
                    </Typography>
                    <TextField id="outlined-basic" label="BuyPrice" variant="outlined" defaultValue={objUpdate.buyPrice} onChange={inputPrice} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Promotion Price
                    </Typography>
                    <TextField id="outlined-basic" label="BuyPrice" variant="outlined" defaultValue={objUpdate.promotionPrice} onChange={inputPromotion} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Amount
                    </Typography>
                    <TextField id="outlined-basic" label="Amount" variant="outlined" defaultValue={objUpdate.amount} onChange={inputAmount} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Phone
                    </Typography>
                    <TextField id="outlined-basic" label="Phone" variant="outlined" defaultValue={objUpdate.phone} onChange={inputPhone} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Trạng Thái
                    </Typography>
                    <TextField id="outlined-basic" label="Trạng Thái" variant="outlined" defaultValue={objUpdate.status} onChange={inputStatus} />

                    <Stack direction={"row"} spacing={2} marginTop={3} marginLeft={34}>
                        <Button className="button-confirm" variant="contained" onClick={() => reqUpdateProduct(update)}>CONFIRM</Button>
                        <Button className="button-cancel" variant="contained" onClick={hideModal}>CANCEL</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default UpdateModal