import React, {useState} from 'react'
import '../Login-Page/src/scss/main.scss'
import '../Login-Page/src/scss/media.scss'
import {NavLink, useNavigate} from "react-router-dom";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {setUser} from "../../Redux/Slices/userSlices";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()
    const push = useNavigate()
    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,pass)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.id,
                    token: user.accessToken,
                }))
                push('/')
            })
            .catch(() => alert('Invalid user!'))
    }
    return (
        <>
        <section className={'login_section'}>
            <div className="login_container">
               <div className="login_block">
                   <div className="login_box">
                       <div className="sign-in_box">
                           <h3>Hello there!</h3>
                           <span>Enter your info to Sign In!</span>
                           <span>Haven't had an account yet? <NavLink className={'register_link'} to={'/register'}>Sign Up</NavLink></span>
                       </div>
                       <div className="enter-info_box">
                           <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Почта" variant="outlined" />
                           <TextField value={pass} onChange={(e) => setPass(e.target.value)}  id="outlined-basic" label="Пароль" variant="outlined" />
                           <Button onClick={() => handleLogin()} sx={{
                               padding: '10px'
                           }} variant="contained">Войти</Button>
                       </div>
                   </div>
               </div>
            </div>
        </section>
        </>
    )
}

export default LoginPage