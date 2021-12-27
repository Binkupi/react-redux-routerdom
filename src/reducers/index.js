import {combineReducers} from 'redux'
import products from './products'
import itemEditting from './itemEditting'


//Kết hợp các reducers cần tạo thành 1 store lưu trữ duy nhất
const appReducer=combineReducers({

    products,
    itemEditting,
});
export default appReducer;