import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

const withAuth = (WrappedComponent) => {
    return (props) => {
        const Router = useHistory()
        const Url = Router.location.pathname
        const urlAuth = ['/login', '/sign-up']

        const { token: accessToken } = useSelector((state) => state.user)

        if (accessToken && (Url === '/login' || Url === '/sign-up')) {
            Router.push("/")
            // console.log('home')
            return null
        }

        if (!accessToken && !urlAuth.find((val, i)=> Url === val)) {
            Router.push("/login")
            // console.log('login')
            return null
        }

        return <WrappedComponent {...props} />
    }
}


export default withAuth