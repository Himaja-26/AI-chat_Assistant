import { useState } from "react";
import HistorySidebar from "./components/HistorySidebar";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import ToneToggle from "./components/ToneToggle";

function App() {
  const [input, setInput] = useState("");

  const [tone, setTone] = useState("professional");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI Chat Assistant. How can I help you today?",
    },
  ]);

  

  const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = {
    role: "user",
    content: input,
  };

  setMessages((prev) => [...prev, userMessage]);

  const currentMessage = input;

  setInput("");

  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: currentMessage,
        tone: tone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    const aiMessage = {
      role: "assistant",
      content: data.response,
    };

    setMessages((prev) => [...prev, aiMessage]);
  } catch (error) {
    console.error("Chat error:", error);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Sorry, I couldn't process your request. Please try again.",
      },
    ]);
  }
};

  return (
    <div className="h-screen bg-gray-900 text-white flex">

      {/* History Sidebar */}
      <HistorySidebar />

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">

        {/* Header */}
        <header className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">
            AI Chat Assistant
          </h1>

          <ToneToggle
            tone={tone}
            setTone={setTone}
          />
        </header>

        

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">

            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message}
              />
            ))}

          </div>
        </div>

        {/* Input */}
        <ChatInput
          input={input}
          setInput={setInput}
          onSend={handleSend}
        />

      </main>
    </div>
  );
}

export default App;