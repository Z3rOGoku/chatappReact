import React from "react";

function RightChatBubble({ message, name, image }) {
  return (
    <>
      <div className="message-bubble mbr">
        <img src={"https://th.bing.com/th/id/OIP.LSWWp1HgPhGVlWbfYKVtmQHaHa?rs=1&pid=ImgDetMain"} style={styles.avatar} alt="sender-pic" />{" "}
        <div className="right-bubble ">
          <div className="text-message">
            <p className="name">{"Krishna Meena"}</p>
            <p className="message">{message.text}</p>
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
          <div className="bubble-arrow bubble-arrow-alt"></div>
        </div>
      </div>
    </>
  );
}
const styles = {
  avatar: {
    width: "49px",
    height: "49px",
    borderRadius: "50%",
    margin: "0 10px",
  },
};
export default RightChatBubble;