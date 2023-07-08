import { useState } from "react";
const ChatBotHome = ({ openChatMsg, setOpenChatMsg, botHomeStyle }) => {
    // const [openChatbot, setOpenChatbot] = useState(false);
    const toggleChatMsg = () => {
        setOpenChatMsg(!openChatMsg);
    }
    return (
        <div className= {botHomeStyle.chatbotWindow} >
            <div className="row">
                <div className="col-12">
                    <span className={botHomeStyle.yourBuddy}>Your Buddy</span>
                    <hr />
                    <div className={botHomeStyle.logo}>
                        <img src="images/chatbot.png" className={botHomeStyle.botImg} />
                    </div>
                    <div className={botHomeStyle.welcome}>
                        <div>
                            <div className={botHomeStyle.welcomeTxt}>
                                <span>Welcome</span>
                            </div>
                            <div>
                                <span>Buddy</span>
                            </div>
                        </div>
                    </div>
                    <div className={botHomeStyle.help}>
                        <span>How can I help you with?</span>
                    </div>
                    <button onClick={toggleChatMsg} className={botHomeStyle.startChat}>Start Chart</button>
                </div>
            </div>
        </div>
    );
};
export default ChatBotHome;