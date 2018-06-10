function handleError(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw response;
    }
}

export function doGet(url) {
    return fetch(url)
    .then(handleError);
}

export function doPost(url, data) {
    return fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    })
    .then(handleError);
}

export function doDelete(url) {
    return fetch(url, {
        method: 'DELETE'
    })
    .then(handleError);
}
