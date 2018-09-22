import request from './request';

export function get(params) {

    var limit = 9

    if (params["limit"]){
        limit = params["limit"]
    }

    let query = `{products(limit: 9){title price}}`;
    return request(query);
}