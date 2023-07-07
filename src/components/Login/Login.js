function Login({loginStyle}) {
    return (
        <>
            {/* <div className={loginStyle.signupForm}> */}
            <div className="signupForm">
                <form>
                    <input type="email" placeholder="Email Address*" required="" />
                    <span style={{ position: "relative" }}>
                        <span className="icon">
                            <i className="fa fa-eye" />
                        </span>
                        <input type="password" placeholder="Password*" required="" />
                    </span>
                    <button>Login</button>
                    <div className="row iconOptions">
                        <div
                            style={{ background: "#000000", marginRight: 6 }}
                            className="col"
                        >
                            <img src="./images/R (2).png" />
                        </div>
                        <div
                            style={{ background: "#5A70E3", margin: "0 6px 0 6px" }}
                            className="col"
                        >
                            <img src="./images/facebook-logo-png-white-i6.png" />
                        </div>
                        <div
                            style={{ background: "#F5F5F5", marginLeft: 6 }}
                            className="col"
                        >
                            <img src="./images/google.png" />
                        </div>
                    </div>
                    <span className="termsCondi">
                        <span>By Continuting, you agree to MindMatter's </span>
                        <span>Terms &amp; Conditions </span>
                        <span>and </span>
                        <span>Privacy and Policy</span>
                    </span>
                </form>
            </div>
        </>
    )
}
export default Login