import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';


export const Editproduct = (props) => {

    const id_prd = props.match.params?.id
    const id_cate = props.match.params?.id_cate

    const [cates, setCates] = useState([]);
    const [cate, setCate] = useState([]);
    const [price, setPrice] = useState(0);
    const [name, setName] = useState("");
    const [ishot, setIshot] = useState(0);
    const [issale, setIssale] = useState(0);
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");

    // const [form, setForm] = userState({
    //     name:'',
    //     price:0,
    //     cate_id:-1,
    //     description:'',
    // })
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost/MyLaravel/public/api/product/${id_prd}`,
            data: null,
        }).then(res => {
            setPrice(res.data.price);
            setName(res.data.name_prd);
            setIshot(res.data.is_hot);
            setIssale(res.data.is_sale);
            setDesc(res.data.description);
            setImg(res.data.image);
            setCate(res.data.cate_id || -1);
        })
    }, [])

    const image = img && require(`./Image/${img}.jpg`).default;
    // console.log(image);




    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost/MyLaravel/public/api/category`,
            data: null,
        }).then(res => {
            setCates([...res.data]);
        }).catch(e => {
            console.log('category err', e)
        })
    }, [])



    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: 'http://localhost/MyLaravel/public/api/category',
    //         data: null,
    //     }).then(res => {
    //         console.log(res.data);
    //         setCate([...res.data]);         
    //     })
    // },[])

    const handleEditproduct = e => {
        // e.preventDefault();
        console.log(name, price, cate, desc, issale, ishot, img);
        axios.post('http://localhost/MyLaravel/public/api/editproduct', { id_prd, name, price, cate, desc, ishot, issale }).then(res => {
            console.log(res.data);
        })


    }

    const handleEditimage = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }


    return (
        <div className="col-md-10 px-0 content-box">
            <nav aria-label="breadcrumb" className="">
                <div className="container-fluid breadcrumb-box">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <a href="#">
                                <i className="fal fa-home-alt home-icon"></i>
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Quản lý sản phẩm</li>
                    </ol>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="page-title">Quản lý sản phẩm</h1>
                </div>
                <div className="row">
                    <div className="col-lg-12 bg-white add-product">
                        <div className="panel panel-default m-md-5 m-2">
                            <div className="panel-body">
                                <form role="form" >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Tên sản phẩm</label>
                                                <input name="name" className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>Giá sản phẩm</label>
                                                <input name="price" type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>Danh mục</label>
                                                <select
                                                    name="category_id"
                                                    className="form-control"
                                                    onChange={(e) => setCate(e.target.value)}
                                                    value={cate}
                                                >
                                                    <option value={-1}>----SELECT CATEGORY----</option>
                                                    {cates?.length > 0 ? cates.map(cate => {
                                                        return (
                                                            <option value={cate?.id} key={cate?.id}>{cate?.name_cate}</option>
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
                                                            <input name="is_sale" type="checkbox"
                                                                value={issale} checked={issale == 1 ? 'checked' : ''}
                                                                onChange={(e) => e.target.checked ? setIssale(1) : setIssale(0)}
                                                        />

                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>Sản phẩm nổi bật</label>
                                                <div className="checkbox">
                                                    <label>
                                                        Nổi bật
                                                            <input name="is_top" type="checkbox" value={ishot} checked={ishot == 1 ? 'checked' : ''} onChange={(e) => e.target.checked ? setIshot(1) : setIshot(0)} />

                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>Mô tả sản phẩm</label>
                                                <textarea required name="discription" className="form-control" rows="3" type="text" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Ảnh sản phẩm</label>
                                                <label>
                                                    <input required name='image' id="product-image-input" type="file" onChange={(e) => handleEditimage(e)} />
                                                    <div className="image-box">
                                                        <img
                                                            id="product-image"
                                                            src={image} className="w-75"
                                                        />
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-4 text-right">
                                            <button
                                                name="sbm" type=""
                                                className="btn btn-success"
                                                onClick={() => handleEditproduct()}
                                            >
                                                Sửa mới
                                                </button>
                                            <button type="reset" className="btn btn-warning">Làm mới</button>
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
