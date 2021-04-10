import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Manageprd = (props) => {

    const [prds, setPrds] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://localhost/MyLaravel/public/api/adminprd',
            data: null,
        }).then(res => {
            console.log(res.data);
            setPrds([...res.data]);
        })
    })

    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: `http://localhost/MyLaravel/public/api/deleteprd/${id_prd}`,
    //         data: null,
    //     }).then(res => {
    //         console.log(res.data);
    //         props.history.push('/manageprd');
    //     })
    // })

    const handleDeleteproduct =  (id_prd) => { 
        console.log(id_prd);
        axios.get(`http://localhost/MyLaravel/public/api/deleteprd/${id_prd}`).then(res => {
            console.log(res.data);
        })
    }
    


    return (
        <div class="col-md-10 px-0 content-box">
            <nav aria-label="breadcrumb" class="">
                    <div class="container-fluid breadcrumb-box">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item">
                                <a href="#">
                                    <i class="fal fa-home-alt home-icon"></i>
                                </a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Quản lý sản phẩm</li>
                        </ol>
                    </div>
            </nav>
            
            <div class="container-fluid">
                <div class="row">
                    <h1 class="page-title">Quản lý sản phẩm</h1>
                </div>
                <br></br>
                <div class="row product-manage container">
                    <div class="px-0 mb-3">
                                <Link to="/addprd">
                                    <button type="button" class="btn btn-success">
                                        <i class="fas fa-plus"></i> Thêm mới sản phẩm
                                    </button>
                                </Link>
                            </div>             
                    </div>
                    <br></br>
                    <table class="table table-striped table-hover">
                        <tr>
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Ảnh sản phẩm</th>
                            <th>Trạng thái</th>
                            <th>Danh mục</th>
                            <th>Hành động</th>
                        </tr>
                        {prds?.length > 0 ? prds.map((prd, index) => {
                            const id_prd = prd?.id;
                            var img = require(`./Image/${prd?.image}.jpg`).default
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{prd?.name_prd}</td>
                                    <td>$ {prd?.price}</td>
                                    <td>
                                        <div class="image" >
                                            <img src={img}  width="100px" heighst="100px" />
                                        </div>
                                    </td>
                                    <td>                             
                                            <span class="badge bg-danger">hot</span>                                                             
                                            <span class="badge bg-success">sale</span>                                  
                                    </td>
                                    <td></td>
                                    <td>
                                            <Link to={`/editprd/${prd?.id}/${prd?.cate_id}`}>
                                                <button type="button" class="btn btn-primary">
                                                    <i class="far fa-edit"></i>
                                                </button>
                                            </Link>
                                            <Link >
                                                
                                                <button type="button" class="btn btn-danger" onClick = {() => handleDeleteproduct(id_prd)}>
                                                    <i class="far fa-trash-alt"></i>
                                                </button>
                                            </Link>
                                    </td>
                                </tr>
                            )
                        })

                    :
                        <h1>no data</h1>
                    }
                                               
                    </table>
            </div>
        </div>
    )
}
