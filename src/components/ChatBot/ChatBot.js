import { useState } from "react";
import styles from "../ChatBot/ChatBot.module.css"
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
            <div className={styles.chatbotContainer}>
                <div className={styles.chatbotButton} onClick={toggleChatbot}>
                    <img src="images/mundi.png" />
                </div>
                {openChatbot ?
                    (openChatMsg ?
                        <ChatBotMsg botMsgStyle = {styles} /> 
                        : 
                        <ChatBotHome openChatMsg={openChatMsg} setOpenChatMsg={setOpenChatMsg} botHomeStyle = {styles}/>
                    ) : <></>
                }
            </div>
        </div>
    );
};
export default ChatBot;