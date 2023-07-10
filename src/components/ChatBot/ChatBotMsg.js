import { useState } from "react";
// import styles from "../ChatBot/ChatBot.css"
const ChatBotMsg = ({ botMsgStyle }) => {
    const [msgText, setMsgText] = useState('')
    const handleInputChange = (event) => {
        setMsgText(event.target.value);
    };
    const [tags] = useState(
        [
            { icon: "images/sleep.png", text: "Improve Sleep" },
            { icon: "images/Anxiety2.png", text: "Stress" },
            { icon: "images/Goal2.png", text: "Improve Focus" },
            { icon: "images/Peace Pigeon2.png", text: "Peace" },
            { icon: "images/Sun2.png", text: "Other" }
            // Add more tag objects as needed
        ])

    const [messges, setMessages] = useState(
        [
            { response: "Hi", from: "user" },
            { response: "hello, how are you doing today?", from: "bot" },
            // { response: "i am good, so sweet of you", from: "user" },
            // Add more tag objects as needed
        ])

    const sendMessage = () => {
        let msg = { response: msgText, from: "user" }
        // let messageToAdd = [...msgText, msg];
        setMessages([...msgText, msg]);
        // setMessages([...,msgText])
    }


    return (
        <div className={botMsgStyle.chatbotWindowMessage}>
            <div className={`row ${botMsgStyle.chatWindow}`}>
                <div className="col-12">
                    <span>Your Buddy</span>
                    <hr />
                    <div className={`row ${botMsgStyle.tagContainer}`} >
                        {tags.map((tag) => {
                            return (
                                <div className="col-4" style={{ padding: '0px' }}>
                                    <div className={botMsgStyle.tag}>
                                        <img className={botMsgStyle.tagIcon} src={tag.icon} />
                                        <span className={botMsgStyle.tagText}>{tag.text}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={botMsgStyle.chatContainer}>
                <div>
                    {messges.map((message) => {
                        return (
                            <div class={`${botMsgStyle.chatMessage} ${message.from == 'user' ? botMsgStyle.user : botMsgStyle.bot}`}>{message.response}</div>
                        )
                    })}

                    {/* <div class="chat-message user">hi</div>
                    <div class="chat-message bot">Hi, Arpita !!</div> */}
                </div>
            </div>
            <div className={botMsgStyle.chatInputContainer}>
                <input onChange={handleInputChange} value={msgText} type="text" id="chat-input" placeholder="Ask me anything..." />
                <button onClick={sendMessage}>
                    <img src="images/Send.png" className={botMsgStyle.buttonImage} />
                </button>
            </div>
        </div>
    );
};
export default ChatBotMsg;