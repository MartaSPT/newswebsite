function SearchBar ({searchTerm, setSearchTerm, setQuery}){
    const handleChange = event => {
        setSearchTerm(event.target.value);
        setQuery(`?search=${searchTerm}`)
      };
    return(
        <input type="text" placeholder="Search..." value={searchTerm}
          onChange={handleChange} />
    )
}
//TODO:
/*error page!! */

export default SearchBar;