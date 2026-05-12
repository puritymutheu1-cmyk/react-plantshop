function Search({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search plants..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 mb-6 border rounded-lg focus:ring-2 focus:ring-green-500"
    />
  );
}

export default Search;