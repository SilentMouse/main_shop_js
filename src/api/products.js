import request from './request';

export function get(params) {

    let query = `{products(limit: 30){id,title,price,description,media{picture},properties,composition}}`;
    if (params["category"] && params["category"] != 999){
        query = `{products(limit: 30,category: ${params["category"]}){id,title,price,description,media{picture},properties,composition}}`;
    }
    return request(query);
}


export function get_one(params) {

    let query = `{product(id: ${params.id}){id,title,price,description,media{picture},properties,composition}}`;
    return request(query);
}