import request from './request';

export function get(params) {

    let query = `{posts{id,title}}`;
    return request(query);
}


export function get_one(params) {

    let query = `{post(id: ${params.id}){id,title,comments{content}}}`;
    return request(query);
}