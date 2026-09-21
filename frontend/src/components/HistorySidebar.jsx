function HistorySidebar() {
  return (
    <aside className="w-64 bg-gray-950 text-white border-r border-gray-800 flex flex-col">
      
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <button className="w-full rounded-lg bg-white text-black py-2 font-medium hover:bg-gray-200">
          + New Chat
        </button>
      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto p-3">
        <p className="text-xs text-gray-500 uppercase mb-3">
          Recent Chats
        </p>

        <div className="space-y-1">
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 text-sm">
            Binary Search
          </button>

          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 text-sm">
            React Hooks
          </button>

          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 text-sm">
            DBMS Interview
          </button>
        </div>
      </div>

    </aside>
  )
}

export default HistorySidebar