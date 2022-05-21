const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((responce) => {
            return responce.json()
        })


}

export default getData