import axios from 'axios';

const request = {}

request.get = async () => {
    axios({
        method: 'get',
        url: 'http://localhost:9000/product',
    })
        .then((response) => {
            // console.log(response)
            this.setState({
                product: response.data.data
            })
        })
        .catch((error) => alert('Maaf API Offline'))
}