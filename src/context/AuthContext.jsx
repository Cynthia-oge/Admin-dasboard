import { createContext, useState } from "react"
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedin] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getData = async (username, password)=>{
        try {
            const res = await fetch('https://dummyjson.com/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username: username,
                            password: password,
                            expiresInMins: 30, // optional, defaults to 60
                        }),
                        // credentials: 'include' // Include cookies (e.g., accessToken) in the request
                        })
        
                const data = await res.json()

                console.log(data)
                if(res.ok){
                    setIsLoggedin(true)
                    return {success: true, message: 'Login success'}
                } else{
                    return{
                        success: false,
                        message: 'Invalid username or password'
                    }
                }
            
        } catch (error) {
            console.error(error)
        }
        finally{
            setIsLoading(false)
        }


    }

    const value = {
        isLoggedIn,
        setIsLoggedin,
        getData,
        user, isLoading
    }

  return (
    <AuthContext.Provider value={value}>
        {props.children}
        </AuthContext.Provider>
  )
}

export default AuthContextProvider