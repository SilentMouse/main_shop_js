import request from './request';

export function get(params) {

    let query = `{posts{id,title,annotation,media{picture},author,createdAt, commentsCount}}`;
    return request(query);
}


export function get_one(params) {

    let query = `{post(id: ${params.id}){id,title,annotation,content,media{picture},author,commentsCount,createdAt,comments{content}}}`;
    return request(query);
}