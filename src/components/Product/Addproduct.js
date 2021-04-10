import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';



export const Addproduct = (props) => {
    const [cates, setCates] = useState([]);

    const [form, setForm] = useState({
        name: '',
        price: 0,
        cate_id: 0,
        is_sale: 0,
        is_hot: 0,
        desc: '',
    })

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://localhost/MyLaravel/public/api/category',
            data: null,
        }).then(res => {
            console.log(res.data);
            setCates([...res.data]);
            console.log(cates);
        })
    }, [])

    

    const handleAdd = (e) => {
        console.log(form['cate_id']);
        console.log(form);
        axios.post('http://localhost/MyLaravel/public/api/product', form).then(res => {
            props.history.push('/manageprd');
        }).catch(e => {
            console.log('err', e)
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
                <div class="row">
                    <div class="col-lg-12 bg-white add-product">
                        <div class="panel panel-default m-md-5 m-2">
                            <div class="panel-body">
                                <form role="form" method="post">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Tên sản phẩm</label>
                                                <input onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                    name="name"
                                                    class="form-control"
                                                    placeholder=""
                                                    value={form['name']}
                                                />
                                            </div>
                                            <div class="form-group mt-2">
                                                <label>Giá sản phẩm</label>
                                                <input onChange={(e) => setForm({ ...form, price: e.target.value })}
                                                    name="price"
                                                    type="number"
                                                    class="form-control"
                                                    value={form['price']}
                                                />
                                            </div>
                                            <div class="form-group mt-2">
                                                <label>Danh mục</label>
                                                <select
                                                    onChange={(e) => setForm({ ...form, cate_id: e.target.value })}
                                                    name="category_id"
                                                    class="form-control"
                                                    value={form['cate_id']}
                                                >
                                                    <option value={0}>-- CHỌN DANH MỤC --</option>
                                                    {cates?.length > 0 ? cates.map(cate => {
                                                        return (
                                                            <option value={cate?.id} >{cate?.name_cate}</option>
                                                        )
                                                    })
                                                        :
                                                        <h1>no data</h1>
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>Trạng thái</label>
                                                <div className="checkbox">
                                                    <label>
                                                        Giảm giá
                                                            <input 
                                                                name="is_sale" type="checkbox" 
                                                                onChange={(e) => e.target.checked ? setForm({...form, is_sale: 1}) : setForm({...form, is_sale: 0})} 
                                                                value = {form['is_sale']}
                                                            />

                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>Sản phẩm nổi bật</label>
                                                <div className="checkbox">
                                                    <label>
                                                        Nổi bật
                                                            <input 
                                                                name="is_top" type="checkbox" 
                                                                onChange = {(e) => e.target.checked ? setForm({...form, is_hot: 1}) : setForm({...form, is_hot: 0})}
                                                                value = {form['is_hot']}
                                                            />

                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group mt-2">
                                                <label>Mô tả sản phẩm</label>
                                                <textarea 
                                                    name="discription" 
                                                    class="form-control" rows="3"
                                                    onChange = { (e) => setForm({...form, desc:e.target.value})}
                                                    value = {form['desc']}   
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Ảnh sản phẩm</label>
                                                <label>
                                                    <input required name='image' id="product-image-input" type="file" onchange="" />
                                                    <div class="image-box">
                                                        <img id="product-image" src="" class="w-75" />
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-4 text-right">
                                            <button name="sbm" type="submit" class="btn btn-success" onClick={(e) => handleAdd()}>Thêm mới</button>
                                            <button type="reset" class="btn btn-warning">Làm mới</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
