function ChatInput({ input, setInput, onSend }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    onSend();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-t border-gray-800"
    >
      <div className="flex gap-3 max-w-4xl mx-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message AI Chat Assistant..."
          className="flex-1 bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-blue-500"
        />

        <button
          type="submit"
          className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ChatInput;