import request from './request';

export function get(params) {

    // var limit = 9
    //
    // if (params["limit"]){
    //     limit = params["limit"]
    // }

    let query = `{products{id,title,price,description,media{picture}}}`;
    return request(query);
}


export function get_one(params) {

    // var limit = 9
    //
    // if (params["limit"]){
    //     limit = params["limit"]
    // }

    let query = `{product(id: ${params.id}){id,title,price,description,media{picture}}}`;
    return request(query);
}