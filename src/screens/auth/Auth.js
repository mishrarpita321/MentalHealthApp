import { useState } from "react"
import Login from "../../components/Login/Login"
import Signup from "../../components/Signup/Signup"
import styles from "../auth/LoginSignup.module.css"
import ChatBotHome from "../../components/ChatBot/ChatBotHome"
import ChatBot from "../../components/ChatBot/ChatBot"
import Header from "../../components/Header/Header"

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
                <div className={`row ${styles.mainContainer}`}>
                    <div className={`d-none d-md-block col-md-6 ${styles.leftContent}`}>
                        <img src="./images/img.jpg" />
                    </div>
                    <div className={`col-12 col-md-6 ${styles.rightContent}`}>
                        <div className={styles.container}>
                            <span className={styles.heading}>
                                {authPage === 'signin' ? ('Login') : ('Sign up')}
                            </span>
                            <div>
                                <span style={{ fontSize: "17px" }}>
                                    {authPage === 'signin' ? ('Dont have an account? ') : ('Already have an account? ')}

                                </span>
                                <span
                                    className={styles.AuthLink}
                                    onClick={changeForm}
                                >
                                    {authPage === 'signin' ? ('Sign up') : ('Log In')}
                                </span>
                            </div>
                            {authPage === 'signin' ? (
                                <Login loginStyle={styles} />
                            ) : (
                                <Signup signUpStyle={styles} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}