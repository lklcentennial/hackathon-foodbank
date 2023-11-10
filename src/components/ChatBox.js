"use client";
import React, { useState } from "react";

const initialMessages = [
  {
    sender: "Johnny",
    text: "Hello! Today, we have some left over at North York Centre. If someone requires it, you may pick it up at 6 p.m.  ",
  },
  {
    sender: "Manager",
    text: "We might need it, so I'll send a volunteer to pick it up at that time.",
  },
  {
    sender: "Kate",
    text: "We could need some as well, so please let me know if you still have any leftover food.",
  },
  {
    sender: "Johnny",
    text: "Hello! Today, we have some left over at North York Centre. If someone requires it, you may pick it up at 6 p.m.  ",
  },
  {
    sender: "Manager",
    text: "We might need it, so I'll send a volunteer to pick it up at that time.",
  },
];

const ChatBox = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") {
      return;
    }
    const updatedMessages = [
      ...messages,
      { sender: "Manager", text: newMessage },
    ];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <div className="p-4 bg-white shadow-lg w-full h-full md:rounded-lg">
      <form className="m-4 flex" onSubmit={handleSubmit}>
        <input
          className="flex-1 text-2xl p-2 rounded-l border-b border-gray-400"
          type="text"
          placeholder="Make yours!"
          value={newMessage}
          onChange={handleMessageChange}
        />
        <button
          className="bg-orange-500 text-white m-2 p-2 text-xl rounded hover:bg-orange-700"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="">
        {messages.map((message, index) => (
          <>
            <span className="font-bold m-2 pr-2 text-xl">{message.sender}:</span>
            <div
              key={index}
              className={`p-2 m-2 rounded text-lg ${
                message.sender === "Manager"
                  ? "bg-orange-500 text-white "
                  : "bg-gray-300 self-end"
              }`}
            >
              {message.text}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
