import { useState } from "react";
import styles from "../ChatBot/ChatBot.css"
import ChatBotHome from "./ChatBotHome";
import ChatBotMsg from "./ChatBotMsg";
const ChatBot = () => {
    const [openChatbot, setOpenChatbot] = useState(false);
    const [openChatMsg, setOpenChatMsg] = useState(false);
    const toggleChatbot = () => {
        setOpenChatbot(!openChatbot);
        setOpenChatMsg(false)
    }
    return (
        <div>
            <div className="chatbot-container">
                <div className="chatbot-button" onClick={toggleChatbot}>
                    <img src="images/mundi.png" />
                </div>
                {openChatbot ?
                    (openChatMsg ?
                        <ChatBotMsg /> : <ChatBotHome openChatMsg={openChatMsg} setOpenChatMsg={setOpenChatMsg} />
                    ) : <></>
                }
            </div>
        </div>
    );
};
export default ChatBot;