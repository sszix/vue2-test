import {v4 as uuidv4} from 'uuid';

let uuid_token
export const getUUID = () => {
    // 先从本地存储获取uuid
    uuid_token = localStorage.getItem('USERTEMPID');
    // 如果没有生成id
    if (!uuid_token) {
        uuid_token = uuidv4()
        localStorage.setItem('UUIDTOKEN', uuid_token)
    }
    return uuid_token
}
