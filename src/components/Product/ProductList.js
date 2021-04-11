import React from 'react';

import ProductItem from './ProductItem';

const ProductList = (props) => {
    
    const {items, handleDelete, handleGetItem} = props;
    
    
    let renderListProduct = items?.length > 0 ? items.map((prd, index) => {
        return(
            <ProductItem 
                product={prd}
                key={index}
                handleDelete={handleDelete}
                handleGetItem={handleGetItem}
            />
        )
    }) : (<h1>No data</h1>);
    
    return (
      <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Ảnh sản phẩm</th>
                <th>Trạng thái</th>
                <th>Danh mục</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
        {   
            renderListProduct

        }
        </tbody>
    </table>  
    );
}

export default ProductList;
