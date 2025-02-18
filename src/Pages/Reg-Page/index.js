import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../Reg-Page/src/scss/main.scss'
import '../Reg-Page/src/scss/meda.scss'
import {NavLink} from "react-router-dom";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {setUser} from "../../Redux/Slices/userSlices";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const RegPage = () => {
    const dispatch = useDispatch()
    const push = useNavigate();
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const handleRegister = () => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth,email,pass)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.id,
                    token: user.accessToken,
                }))
                push('/login')
            })
            .catch(console.error)
    }
    return (
        <>
            <section className={'reg_section'}>
                <div className="reg_container">
                    <div className="reg_block">
                        <div className="reg_box">
                            <div className="reg-in_box">
                                <h3>Hello there!</h3>
                                <span>Enter your info to Sign Up!</span>
                                <span>Already have an account ? <NavLink className={'login_link'} to={'/login'}>Sign in</NavLink></span>
                            </div>
                            <div className="enter-info_box">
                                <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Почта" variant="outlined" />
                                <TextField value={pass} onChange={(e) => setPass(e.target.value)}  id="outlined-basic" label="Пароль" variant="outlined" />
                                <Button onClick={() => handleRegister()} sx={{
                                    padding: '10px'
                                }} variant="contained">Зарегистрироваться</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegPage