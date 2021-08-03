const Cookie = {}

Cookie.getCookie = () => {
    const res =  document.cookie || 'false, " "';
    if(res.split(',')[0] == "false") {
        return false
    } else {
        return {
            isLogin: res.split(',')[0],
            token: res.split(',')[1],
        }
    }
}

Cookie.setCookie = (isLogin, token) => {
    document.cookie = `${isLogin}, ${token}`
}

export default Cookie;