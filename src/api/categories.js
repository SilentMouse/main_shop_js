import request from './request';

export function get(params) {
    let query = `{categories{name,id}}`;
    return request(query);
}


export function get_one(params) {

    let query = `{category(id: ${params.id}){id,name}}`;
    return request(query);
}