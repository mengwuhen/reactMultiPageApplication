

import cookie from 'react-cookie'

if (process.env.NODE_ENV === 'development') {
    require('../../../mock/todoList')
}

let token = cookie.load('token');
let postApi = (path, mock) => {
    return path + (mock ? '' : '.mock') + '?token=' + token;
};
export default {
    "newsList": postApi("/api/order/news"),
    "newsList2": postApi("/api/newsList2"),
    "todoList": postApi("/todoList", 0)
}