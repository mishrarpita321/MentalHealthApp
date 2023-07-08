import { useState } from "react";
// import styles from "../ChatBot/ChatBot.css"
const ChatBotMsg = () => {
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
        console.log('kljghhj')
        let msg = { response: msgText, from: "user" }
        // let messageToAdd = [...msgText, msg];
        setMessages([...msgText, msg]);
        // setMessages([...,msgText])
    }


    return (
        <div id="chatbot-window-message" className="chatbot-window-message">
            <div className="row chatWindow">
                <div className="col-12">
                    <span>Your Buddy</span>
                    <hr />
                    <div className="row" id="tag-container" >
                        {tags.map((tag) => {
                            return (
                                <div className="col-4" style={{ padding: '0px' }}>
                                    <div className="tag">
                                        <img className="tag-icon" src={tag.icon} />
                                        <span className="tag-text">{tag.text}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="chat-container">
                <div className="chat-messages" id="chat-messages">
                    {messges.map((message) => {
                        return (
                            <div class={`chat-message ${message.from == 'user' ? 'user' : 'bot'}`}>{message.response}</div>
                        )
                    })}

                    {/* <div class="chat-message user">hi</div>
                    <div class="chat-message bot">Hi, Arpita !!</div> */}
                </div>
            </div>
            <div className="chat-input-container">
                <input onChange={handleInputChange} value={msgText} type="text" id="chat-input" placeholder="Ask me anything..." />
                <button onClick={sendMessage}>
                    <img src="images/Send.png" className="button-image" />
                </button>
            </div>
        </div>
    );
};
export default ChatBotMsg;