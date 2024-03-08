import { USER_NAME_SUCCESS, PASSWORD_SUCCESS, CONFIRM_PASSWORD_SUCCESS, CREATE_USER_SUCCESS, LOGIN_USER_SUCCESS, ISLOADING_PRODUCT, PRODUCT_SUCCESS } from '../constant/constant'
import shopReducers from '../reducers/shopReducers'

export const fetchAPIProduct = (page, limit, filter) => {
    return async (dispatch) => {
        try {
            var reqProdcut = {
                method: 'GET',

            }

            await dispatch({
                type: ISLOADING_PRODUCT
            })

            const resProduct = await fetch('http://localhost:8080/product', reqProdcut)

            const data = await resProduct.json()

            const dataProduct = data.data


            const resPagination = await fetch(`http://localhost:8080/pagination?page=${page}&limit=${limit}`, reqProdcut)

            const dataPagination = await resPagination.json()

            return dispatch({
                type: PRODUCT_SUCCESS,
                data: dataProduct.length,
                totalProduct: dataPagination,

            })

        } catch (error) {
            return dispatch({
                type: "PRODUCT_ERORR",
                error: error
            })
        }
    }
}

/* ADMIN */

export const fecthAPIPostProductAdmin = (product) => {
    return async (dispatch) => {
        try {
            var reqPostProduct = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }

            const resPostProduct = await fetch("http://localhost:8080/product", reqPostProduct)

            const dataPostProduct = await resPostProduct.json()

            return dispatch({
                type: 'POST_PRODUCT',
                data: dataPostProduct
            })


        } catch (error) {
            return dispatch({
                type: 'POST_PRODUCT_ERROR',
                error: error
            })
        }
    }
}

export const fetchAPIUpdateProduct = (id, product) => {
    return async (dispatch) => {
        try {
            var reqUpdate = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }

            const resUpdate = await fetch(`http://localhost:8080/product/${id}`, reqUpdate)

            const dataUpdate = await resUpdate.json()

            return dispatch({
                type: 'PUT_PRODUCT',
                data: dataUpdate
            })
        } catch (error) {
            return dispatch({
                type: 'PUT_PRODUCT_ERROR',
                error: error
            })
        }
    }
}


export const fetchAPIDeleteProduct = (id) => {
    return async (dispatch) => {
        try {
            var reqDelete = {
                method: 'DELETE'
            }

            const resDelete = await fetch(`http://localhost:8080/product/${id}`, reqDelete)

            const dataDelete = await resDelete.json()

            return dispatch({
                type: 'DELETE_PRODUCT',
                data: dataDelete
            })
        } catch (error) {
            return dispatch({
                type: 'DELETE_PRODUCT_ERROR',
                error: error
            })
        }
    }
}


export const pageChangePagination = (page) => {
    return {
        type: 'PAGE_CHANGE_PAGINATION',
        payload: page
    }
}



/* Login And Signup */
export const fetchSignUp = (signup) => {
    return async (dispatch) => {
        try {
            var reqSign = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signup)
            }

            const resUser = await fetch('http://localhost:8080/auth/signup', reqSign)

            const data = await resUser.json()
            return dispatch({
                type: CREATE_USER_SUCCESS,
                data: data
            })
        } catch (error) {
            return dispatch({
                type: "SIGNUP_USER_ERORR",
                error: error
            })
        }
    }
}


export const fetchLogin = (login) => {
    return async (dispatch) => {
        try {
            var reqLogin = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            }

            const resUser = await fetch('http://localhost:8080/auth/login', reqLogin)

            const data = await resUser.json()
            sessionStorage.setItem('accessToken', data.accessToken)
            sessionStorage.setItem('refreshToken', data.refreshToken)
            sessionStorage.setItem('exp', data.expiredDate)
            dispatch(setAccessToken(data.accessToken));
            dispatch(setRefreshToken(data.refreshToken));
            return dispatch({
                type: LOGIN_USER_SUCCESS,
                data: data,

            })
        } catch (error) {
            return dispatch({
                type: "LOGIN_USER_ERORR",
                error: error
            })
        }
    }
}

export const addBreadCums = (breadcrumbs) => {
    return {
        type: 'ADD_BREADCUMS',
        payload: breadcrumbs
    }
}

export const removeBreadCums = () => {
    return {
        type: 'REMOVE_BREADCUMS'
    }
}

export const clearBreadCums = () => {
    return {
        type: 'CLEAR_BREADCUMS',

    }
}

export const setExpiredDate = (expiredDate) => {
    return {
        type: 'SET_EXPIREDDATE',
        payload: expiredDate
    }
}

export const setAccessToken = (accessToken) => {
    return {
        type: 'SET_ACCESS_TOKEN',
        payload: accessToken,
    }
}

export const setRefreshToken = (refreshToken) => {
    return {
        type: 'SET_REFRESH_TOKEN',
        payload: refreshToken,
    }
}


export const valueUserName = (value) => {
    return {
        type: USER_NAME_SUCCESS,
        payload: value
    }
}

export const valuePassword = (value) => {
    return {
        type: PASSWORD_SUCCESS,
        payload: value
    }
}

export const valueConfirmPassword = (value) => {
    return {
        type: CONFIRM_PASSWORD_SUCCESS,
        payload: value
    }
}

export const listPrice = (price) => {
    return {
        type: 'FILTER_PRICE',
        payload: price
    }
}


export const arrayProduct = (session) => {
    return {
        type: 'SESSION_PRODUCT',
        payload: session
    }
}

export const eventClickTotal = () => {
    return {
        type: 'CLICK_COUNT'
    }
}

export const addProductToSession = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_SESSION',
        payload: product
    }
}

export const showModalCreate = () => {
    return {
        type: 'SHOW_MODAL',

    }
}

export const hideModalCreate = () => {
    return {
        type: 'HIDE_MODAL'
    }
}


/* ADMIN */

export const valueName = (name) => {
    return {
        type: 'NAME_VALUE',
        payload: name
    }
}

export const valueDesp = (value) => {
    return {
        type: 'DES_VALUE',
        payload: value
    }
}


export const valueIMAGE = (value) => {
    return {
        type: 'IMAGE_VALUE',
        payload: value
    }
}


export const valueBuyPrice = (value) => {
    return {
        type: 'PRICE_VALUE',
        payload: value
    }
}

export const valuePromotion = (value) => {
    return {
        type: 'PROMOTION_VALUE',
        payload: value
    }
}

export const valueAmount = (value) => {
    return {
        type: 'AMOUNT_VALUE',
        payload: value
    }
}

export const valuePhone = (value) => {
    return {
        type: 'PHONE_VALUE',
        payload: value
    }
}

export const valueStatus = (value) => {
    return {
        type: 'STATUS_VALUE',
        payload: value
    }
}



/* Modal Update  Admin*/
export const showModalUpdate = () => {
    return {
        type: 'SHOW_MODAL_UPDATE'

    }
}

export const hideModalUpdate = () => {
    return {
        type: 'HIDE_MODAL_UPDATE'
    }
}

export const updateObj = (value) => {
    return {
        type: 'UPDATE_OBJ',
        payload: value
    }
}



/* Filter */

export const filterAdmin = (value) => {
    return {
        type: 'FILTER_ORDER',
        payload: value
    }
}
