import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import React from 'react';

const FilterableProductTable = ({ products }) => {
    const [searchText, setSearchText] = React.useState('');
    const [inStockOnly, setInStockOnly] = React.useState(false);

    return (
        <>
            <SearchBar
                searchText={searchText}
                inStockOnly={inStockOnly}
                onSearchTextChange={setSearchText}
                onInStockChange={setInStockOnly}
            />
            <ProductTable searchText={searchText} inStockOnly={inStockOnly} products={products} />
        </>
    );
};

export default FilterableProductTable;
