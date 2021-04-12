import React from 'react';

const ProductItem = (props) => {
    
    const {id, name_prd, price, is_hot, is_sale, image} = props.product;
    
    var img = require(`./Image/${image}.jpg`).default;
    
    const handleDeleteproduct =  (id_prd) => { 
        let check = window.confirm("Bạn có chắc chắn muốn xoá?");
        
        if (check) {
            props.handleDelete(id_prd);
        }
    }
    
    const handleGetItem = (id) => {
        props.handleGetItem(id);
    }
    
    return (
        <tr>
            <td>{id}</td>
            <td>{name_prd}</td>
            <td>${price}</td>
            <td>
                <div className="image" >
                    <img src={img} alt="Image Product"  width="100px" heighst="100px" />
                </div>
            </td>
            <td>                             
                {is_hot&&<span className="badge bg-danger">hot</span>}                                                             
                {is_sale&&<span className="badge bg-success">sale</span>}                                  
            </td>
            <td></td>
            <td>
                <button type="button" className="btn btn-primary" onClick={() => handleGetItem(id)}>
                    <i className="far fa-edit"></i>
                </button>{' '}
                <button type="button" className="btn btn-danger" onClick = {() => handleDeleteproduct(id)}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    )
}

export default ProductItem;
