export default function Searchbar({ value, onChange, className = "" }) {
  return (
    <nav className="w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Buscar personaje"
        value={value}
        onChange={onChange}
        className={`purple-glow-input w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 ${className}`}
      />
    </nav>
  );
}
