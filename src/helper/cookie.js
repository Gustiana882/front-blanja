const Cookie = {}

Cookie.getCookie = () => {
    const res =  document.cookie || 'false, " ", " "';
    if(res.split(',')[0] === "false") {
        return false
    } else {
        return {
            isLogin: res.split(',')[0],
            token: res.split(',')[1],
            image: res.split(',')[2],
        }
    }
}

Cookie.setCookie = (isLogin, token, image) => {
    document.cookie = `${isLogin}, ${token}, ${image}`
}

export default Cookie;