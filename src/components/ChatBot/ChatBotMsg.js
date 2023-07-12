import { useState } from "react";
// import styles from "../ChatBot/ChatBot.css"
const ChatBotMsg = ({ botMsgStyle }) => {
    const [msgText, setMsgText] = useState('')
    // const handleInputChange = (event) => {
    //     setMsgText(event.target.value);
    // };
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
        ])

    // const sendMessage = () => {
    //     let msg = [{ response: msgText, from: "user" }]
    //     setMessages([...messges, ...msg])
    //     setMsgText('')
    // }


    return (
        <div className={botMsgStyle.chatbotWindowMessage}>
            <div className={`row ${botMsgStyle.chatWindow}`}>
                <div className="col-12">
                    <span>Your Buddy</span>
                    <hr />
                    <div className={`row ${botMsgStyle.tagContainer}`} >
                        {tags.map((tag,i) => {
                            return (
                                <div key={i} className="col-4" style={{ padding: '0px' }}>
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
                    {messges.map((message,i) => {
                        return (
                            <div key={i} className={`${botMsgStyle.chatMessage} ${message.from == 'user' ? botMsgStyle.user : botMsgStyle.bot}`}>{message.response}</div>
                        )
                    })}

                    {/* <div class="chat-message user">hi</div>
                    <div class="chat-message bot">Hi, Arpita !!</div> */}
                </div>
            </div>
            <div className={botMsgStyle.chatInputContainer}>
                <input type="text" id="chat-input" placeholder="Ask me anything..." />
                {/* <button onClick={sendMessage}> */}
                <button>
                    <img src="images/Send.png" className={botMsgStyle.buttonImage} />
                </button>
            </div>
        </div>
    );
};
export default ChatBotMsg;