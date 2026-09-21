function ChatMessage({ message }) {
  const isUser = message.role === "user"

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl ${
          isUser
            ? "bg-blue-600 text-white rounded-br-sm"
            : "bg-gray-800 text-gray-100 rounded-bl-sm"
        }`}
      >
        <p className="text-sm leading-relaxed">
          {message.content}
        </p>
      </div>
    </div>
  )
}

export default ChatMessage