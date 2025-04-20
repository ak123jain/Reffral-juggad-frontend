 

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Messege = () => {
//   const { id } = useParams();
//   console.log("Chat ID:", id);

//   const [messages, setMessages] = useState(""); // Store AI response
//   const [newMessage, setNewMessage] = useState(""); // Store user input

//   const sendmessege = async () => {
//     if (!newMessage.trim()) return;

//     const token = localStorage.getItem("accessToken");
//     console.log("Token:", token);

//     try {
//       const response = await axios.post(
//         `http://localhost:8000/messege/${id}/sendmessege`,
//         { content: newMessage }, // Request body
//         { headers: { Authorization: `Bearer ${token}` } } // Headers
//       );

//       console.log("Response:", response.data.data);

//       // Extract AI response message
//       const aiResponse = response.data.data.aimessege.content;

//       // Update chat display
//       setMessages((prev) => `${prev}\n\nYou: ${newMessage}\nAI: ${aiResponse}`);

//       // Clear input field
//       setNewMessage("");
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
//       <div className="w-full max-w-2xl p-4 bg-gray-800 rounded-lg shadow-lg">
//         <h2 className="text-xl font-semibold mb-4">Chat with Mentor</h2>

//         {/* Message Display */}
//         <div className="h-80 overflow-y-auto bg-gray-700 p-3 rounded-lg whitespace-pre-wrap">
//           {messages || <p className="text-gray-400">No messages yet</p>}
//         </div>

//         {/* Input Box */}
//         <div className="mt-4 flex">
//           <input
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-grow p-2 rounded-l-lg bg-gray-600 text-white border-none outline-none"
//           />
//           <button
//             onClick={sendmessege}
//             className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messege;


import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Message = () => {
  const { id } = useParams();
  const [messageList, setMessageList] = useState([]); // Store messages as objects
  const [newMessage, setNewMessage] = useState(""); // Store user input
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when messages update
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    const token = localStorage.getItem("accessToken");
    
    // Add user message to the list immediately for better UX
    setMessageList(prev => [...prev, { sender: "user", content: newMessage }]);
    
    // Clear input field
    const messageToSend = newMessage;
    setNewMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/messege/${id}/sendmessege`,
        { content: messageToSend },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Response:", response.data.data);

      // Extract AI response message
      const aiResponse = response.data.data.aimessege.content;

      // Add AI message to the list
      setMessageList(prev => [...prev, { sender: "ai", content: aiResponse }]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Show error in message list
      setMessageList(prev => [...prev, { 
        sender: "system", 
        content: "Failed to send message. Please try again." 
      }]);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-3xl p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col h-screen max-h-screen">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Chat with AI Mentor
        </h2>

        {/* Message Display */}
        <div className="flex-grow overflow-y-auto bg-gray-700 p-4 rounded-lg mb-4 scrollbar-thin scrollbar-thumb-gray-500">
          {messageList.length > 0 ? (
            <div className="space-y-4">
              {messageList.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : msg.sender === 'ai' 
                          ? 'bg-gray-600 text-white rounded-bl-none' 
                          : 'bg-red-500 text-white'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400">Send a message to start the conversation</p>
            </div>
          )}
        </div>

        {/* Input Box */}
        <div className="flex items-center">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-grow p-3 rounded-l-lg bg-gray-600 text-white border-none outline-none resize-none h-12 max-h-32 overflow-y-auto"
            rows="1"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 rounded-r-lg h-12 transition duration-200 flex items-center justify-center"
            disabled={!newMessage.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;