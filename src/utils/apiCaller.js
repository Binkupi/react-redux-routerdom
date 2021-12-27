import axios from 'axios'
import * as Config from './../constants/Config'


//1 file config api cơ bản, nên lên trang axios để tìm hiểu các cách config
export default function callApi(endpoint,method='GET',body){
    return axios({
        method:method,
        url:`${Config.API_URL}/${endpoint}`,
        data:body,      
    })
    .catch((err)=>{
        console.log(err);
    })
}