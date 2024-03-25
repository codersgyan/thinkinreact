const SearchBar = ({ searchText, inStockOnly, onInStockChange, onSearchTextChange }) => {
    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => onSearchTextChange(e.target.value)}
            />
            <div>
                <input
                    id="checkbox"
                    type="checkbox"
                    value={inStockOnly}
                    onChange={(e) => onInStockChange(e.target.checked)}
                />
                <label htmlFor="checkbox">Show only inStock</label>
            </div>
        </form>
    );
};

export default SearchBar;
