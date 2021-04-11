import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {URL} from '../../contants';


export const Editproduct = (props) => {

    const id_prd = props?.id
    const id_cate = props?.id_cate
    
    const [cates, setCates] = useState([]);

    const [form, setForm] = useState({
        id: null,
        name_prd: '',
        price: 0,
        cate_id: 1,
        image: '',
        is_sale: false,
        is_hot: false,
        desc: '',
    });
    
    useEffect(() => {
        axios({
            method: "GET",
            url: `${URL}/products/${id_prd}`,
            data: null,
        }).then(res => {
            console.log(res.data);
            setForm(res.data);
        })
    }, []);

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://localhost/MyLaravel/public/api/category',
            data: null,
        }).then(res => {
            console.log(res.data);
            setCates([...res.data]);         
        })
    },[])

    const handleEditproduct = e => {
       
    }

    const handleEditimage = e => {
        
    }
    
    const handleEdit = (e) => {
        e.preventDefault();
        if (form.id) {
            props.handleEdit(form);
        }
    }
    
    const onHandleReset = () => {
        setForm({
            name_prd: '',
            price: 0,
            cate_id: 1,
            image: '',
            is_sale: false,
            is_hot: false,
            desc: '',
        })
    }
    
    const onHandleClose = () => {
        onHandleReset();
        props.onHandleSetModal(false)
    }


    return (
        <div className="modal fade show" tabIndex="-1" style={{display: 'block'}} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                <button 
                    type="button" 
                    className="btn-close" 
                    aria-label="Close"
                    onClick={()=>{onHandleClose()}}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleEdit}>
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="form-group">
                                <label>Tên sản phẩm</label>
                                <input onChange={(e) => setForm({ ...form, name_prd: e.target.value })}
                                    name="name"
                                    className="form-control"
                                    placeholder=""
                                    value={form.name_prd}
                                />
                            </div>
                            <div className="form-group">
                                <label>Ảnh sản phẩm</label>&nbsp;&nbsp;
                                <input required name='image' id="product-image-input" type="file" 
                                    onChange={(e)=>{
                                        setForm({...form, image: e.target.files[0].name.slice(0,3)});
                                    }}
                                />&nbsp;
                                {form.image && <div className="image-box">
                                    <img 
                                        id="product-image" 
                                        src={form.image? require(`./Image/${form.image}.jpg`).default:''} 
                                        className="w-75" 
                                        width={80} height={100}
                                    />
                                </div>}
                            </div>
                            <div className="form-group mt-2">
                                <label>Giá sản phẩm</label>
                                <input onChange={(e) => setForm({ ...form, price: e.target.value })}
                                    name="price"
                                    type="number"
                                    className="form-control"
                                    value={form['price']}
                                />
                            </div>
                            <div className="form-group mt-2">
                                <label>Danh mục</label>
                                <select
                                    onChange={(e) => setForm({ ...form, cate_id: e.target.value })}
                                    name="category_id"
                                    className="form-control"
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
                                    </label> &nbsp;
                                    <input 
                                        name="is_sale" type="checkbox" 
                                        onChange={(e) => e.target.checked ? setForm({...form, is_sale: true}) : setForm({...form, is_sale: false})} 
                                        value = {form['is_sale']}
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label>Sản phẩm nổi bật</label>
                                <div className="checkbox">
                                    <label>
                                        Nổi bật
                                    </label>&nbsp;
                                    <input 
                                        name="is_top" type="checkbox" 
                                        onChange = {(e) => e.target.checked ? setForm({...form, is_hot: true}) : setForm({...form, is_hot: false})}
                                        value = {form['is_hot']}
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label>Mô tả sản phẩm</label>
                                <textarea 
                                    name="discription" 
                                    className="form-control desc" rows="3" col="10"
                                    onChange = { (e) => setForm({...form, desc:e.target.value})}
                                    value = {form['desc']}   
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 mt-4 text-right">
                            <button name="sbm" type="submit" className="btn btn-success" onClick={handleEdit}>Lưu lại</button>{'  '}
                            <button type="reset" className="btn btn-warning" onClick={onHandleReset}>Làm mới</button>
                        </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}
