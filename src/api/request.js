import {GraphQLClient} from 'graphql-request';
const client = new GraphQLClient('http://local.for-now.ru/graphql');

function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

let token = getCookie('token');

if (token) {
    client.setHeaders({'X-Token': token});
}

const request = (query) => {
    console.log('request ', query);
    return client
        .request(query)
        .then(data => {
            console.log("DATA", data)
            return data
        });
};

export default request;