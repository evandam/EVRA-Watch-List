function handleError(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw response;
    }
}

function doGet(url) {
    return fetch(url)
    .then(handleError);
}

function doPost(url, data) {
    return fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    })
    .then(handleError);
}

function doDelete(url, id) {
    return fetch(url + '/' + id, {
        method: 'DELETE'
    })
    .then(handleError);
}

export {
    doGet,
    doPost,
    doDelete
};