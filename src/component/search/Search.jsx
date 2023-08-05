const Search = ({ searchText, onChange }) => {
  console.log(searchText)
  return <input type="text" value={searchText} onChange={onChange} />
}

export default Search
