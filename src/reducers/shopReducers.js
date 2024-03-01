import { act } from 'react-dom/test-utils'
import { USER_NAME_SUCCESS, PASSWORD_SUCCESS, CONFIRM_PASSWORD_SUCCESS, CREATE_USER_SUCCESS, LOGIN_USER_SUCCESS, PRODUCT_SUCCESS, ISLOADING_PRODUCT } from '../constant/constant'
const initialState = {
    isLoading: false,
    product: [],
    username: '',
    password: '',
    confirmpassword: '',
    accessToken: '',
    refreshToken: '',
    expiredDate: 0,
    checkedBox: '',
    iphone: '',
    macbook: '',
    itemPrice: [],
    limit: 9,
    page: 0,
    currentPage: 1,
    breadcrumbs: [],
    sessionProduct: [],
    isClick: false,
    filter: '',
    createModal: false,

    name: '',
    description: '',
    imageUrl: '',
    buyPrice: '',
    promotionPrice: '',
    amount: '',
    phone: '',
    status: '',

}

const shopReducers = (state = initialState, action) => {
    switch (action.type) {
        case ISLOADING_PRODUCT:
            state.isLoading = true
            break
        case PRODUCT_SUCCESS:
            state.isLoading = false
            state.page = Math.ceil(action.data / state.limit)
            state.product = action.totalProduct
            state.filter = action.payload
            break
        case 'POST_PRODUCT':
            state.isLoading = false
            break
        case CREATE_USER_SUCCESS:
            state.isLoading = false
            break
        case LOGIN_USER_SUCCESS:
            state.isLoading = false
            break
        case USER_NAME_SUCCESS:
            state.username = action.payload
            break;
        case PASSWORD_SUCCESS:
            state.password = action.payload
            break
        case CONFIRM_PASSWORD_SUCCESS:
            state.confirmpassword = action.payload
            break
        case 'SET_ACCESS_TOKEN':
            state.accessToken = action.payload
            break
        case 'SET_REFRESH_TOKEN':
            state.refreshToken = action.payload
            break
        case 'SET_CHECKBOX':
            state.iphone = action.payload
            state.macbook = action.payload
            break
        case 'ITEM_PRICE':
            state.itemPrice = action.payload
            break
        case 'PAGE_CHANGE_PAGINATION':
            state.currentPage = action.payload
            break
        case 'ADD_PRODUCT_TO_SESSION':
            state.sessionProduct = []
            break
        case 'CLICK_COUNT':
            state.isClick = true
            break
        /* Modal Admin */
        case 'SHOW_MODAL':
            state.createModal = true
            break
        case 'HIDE_MODAL':
            state.createModal = false
            break


        case 'NAME_VALUE':
            state.name = action.payload
            break
        case 'DES_VALUE':
            state.description = action.payload
            break
        case 'IMAGE_VALUE':
            state.imageUrl = action.payload
            break
        case 'PRICE_VALUE':
            state.buyPrice = action.payload
            break
        case 'PROMOTION_VALUE':
            state.promotionPrice = action.payload
            break
        case 'AMOUNT_VALUE':
            state.amount = action.payload
            break
        case 'PHONE_VALUE':
            state.phone = action.payload
            break
        case 'STATUS_VALUE':
            state.status = action.payload
            break
        default:
            break;
    }

    return { ...state }
}

export default shopReducers