import request from './request';

export function get(params) {

    let query = `{products{id,title,price,description,media{picture},properties}}`;
    return request(query);
}


export function get_one(params) {

    let query = `{product(id: ${params.id}){id,title,price,description,media{picture},properties}}`;
    return request(query);
}