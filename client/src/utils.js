function post(url, data) {
    return fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });
}

export {
    post,
}