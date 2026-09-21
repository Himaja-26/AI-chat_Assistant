function ToneToggle({ tone, setTone }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400">
        Tone:
      </span>

      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none"
      >
        <option value="professional">Professional</option>
        <option value="casual">Casual</option>
        <option value="concise">Concise</option>
      </select>
    </div>
  )
}

export default ToneToggle