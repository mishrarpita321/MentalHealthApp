import styles from "../ChatBot/ChatBot.css"
const ChatBotHome = () => {
    return (
        <div>
            <div className="chatbot-container">
                <div className="chatbot-button" onclick="toggleChatbot()">
                    <img src="images/mundi.png" />
                </div>
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
                            <button className="startChat">Start Chart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ChatBotHome;