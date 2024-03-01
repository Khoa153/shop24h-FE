
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchAPIProduct, setCheckbox, listPrice, fetchAPIGetPrice, filterItemPrice, pageChangePagination } from '../../action/action'
import { red } from '@mui/material/colors';
import '../../App.css';
import HeaderLogo from './headersLogo'

const Total = () => {

    const [clear, setClear] = useState([])

    useEffect(() => {

    }, [])

    const data = JSON.parse(sessionStorage.getItem('Products'))

    const onCLickClearSession = () => {
        sessionStorage.removeItem('Products')

    }


    return (

        <div className='container'>
            <div className='flex-headers'>
                <div className='products'><p >Products</p></div>

                <div className='total'>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
            </div>

            <div className='hr'></div>

            {/* Load Session for Card */}
            {data && data.length > 0 ? (data.map((element, index) => (

                <div className='detail-product' key={index} >

                    <div className='set-1' >
                        <div ><img className='image' src={element.imageUrl} alt='logo'></img></div>

                        <div className='nameProducts'>
                            {element.name}
                        </div>
                    </div>


                    <div className='set-2'>

                        <p>{element.promotionPrice}$</p>
                        <div className='quantity-count'>
                            <button type='button' className='button-count'>-</button>
                            <input type='text' className='input-count'></input>
                            <button type='button' className='button-count'>+</button>
                        </div>

                        <p>{ }$</p>
                    </div>

                </div>

            ))
            )
                : <div className=''>
                    <p className='p-product-session'>Giỏ hàng của bạn đang trống</p>

                    <a href='/' className='button-back-store'><p className='p-back-home'>Quay lại mua sắm</p></a>
                </div>

            }


            <div className='hr'></div>

            {/*Payment */}
            <div className='flex-total'>
                <div className='clear-card'>
                    <button className='button-remove' onClick={onCLickClearSession}>Clear Card</button>
                </div>

                <div className='sub-price'>
                    <div className='flex-sub'>
                        <div className='p-total'>Subtotal</div>
                        <div className='p-price'>$1000{ }</div>
                    </div>
                    <p className='p-calculate'>Shipping and calculate at checkout</p>
                    <button className='button-total'>Confirm</button>
                </div>
            </div>
        </div>

    )
}

export default Total