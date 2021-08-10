class User {
    AuthSet = (token) => {
        return {
            type: "SET_AUTH",
            payload: token,
        }
    }

    AuthClear = () => {
        return {
            type: "UNSET_AUTH",
        }
    }

    UserSet = (data) => {
        return {
            type: "SET_USER",
            payload: data,
        }
    }
}

export default new User()