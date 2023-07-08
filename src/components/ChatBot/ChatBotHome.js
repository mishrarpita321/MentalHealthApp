import { useState } from "react";
import styles from "../ChatBot/ChatBot.css"
const ChatBotHome = ({ openChatMsg, setOpenChatMsg }) => {
    // const [openChatbot, setOpenChatbot] = useState(false);
    const toggleChatMsg = () => {
        setOpenChatMsg(!openChatMsg);
    }
    return (
        <div id="chatbot-window" className="chatbot-window">
            <div className="row">
                <div className="col-12">
                    <span className="yourBuddy">Your Buddy</span>
                    <hr />
                    <div className="logo">
                        <img src="images/chatbot.png" style={{ height: 75, width: 75 }} />
                    </div>
                    <div className="welcome">
                        <div>
                            <div style={{ marginBottom: "-13px" }}>
                                <span>Welcome</span>
                            </div>
                            <div>
                                <span>Buddy</span>
                            </div>
                        </div>
                    </div>
                    <div className="help">
                        <span>How can I help you with?</span>
                    </div>
                    <button onClick={toggleChatMsg} className="startChat">Start Chart</button>
                </div>
            </div>
        </div>
    );
};
export default ChatBotHome;