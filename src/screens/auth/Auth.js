import { useState } from "react"
import Login from "../../components/Login/Login"
import Signup from "../../components/Signup/Signup" 
import styles from "../auth/LoginSignup.css"
import ChatBotHome from "../../components/ChatBot/ChatBotHome"
import ChatBot from "../../components/ChatBot/ChatBot"

export function Auth() {
    const [authPage, setAuthPage] = useState('signin')

    const changeForm = () => {
        if (authPage === 'signin') {
            setAuthPage('signup')
        } else {
            setAuthPage('signin')
        }
    }

    return (
        <>
            <div className="container-fluid">
                {/* <div className={`row ${ styles.mainContainer}`}> */}
                <div className="row mainContainer">
                    <div className="d-none d-md-block col-md-6 leftContent">
                        <img className="imgbackground" src="./images/img.jpg" />
                    </div>
                    <div className="col-12 col-md-6 rightContent">
                        <div className="container">
                            <span style={{ fontSize: 26, fontWeight: 500 }}>
                                {authPage === 'signin' ? ('Login') : ('Sign up')}
                            </span>
                            <div>
                                <span style={{ fontSize: "17r546g px" }}>
                                    {authPage === 'signin' ? ('Dont have an account? ') : ('Already have an account? ')}


                                </span>
                                <span
                                    className="AuthLink"
                                    onClick={changeForm}
                                >
                                    {authPage === 'signin' ? ('Sign up') : ('Log In')}
                                </span>
                            </div>
                            {authPage === 'signin' ? (
                                <Login loginStyle={styles} />
                            ) : (
                                <Signup signUpStyle={styles}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ChatBot/>
        </>
    )
}