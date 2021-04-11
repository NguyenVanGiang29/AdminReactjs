import React from 'react';
import {Link} from 'react-router-dom';

export const Nav = (props) => {
    
    const onHandleSetRoute = (route) => {
        props.onHandleSetRoute(route);
    }
    
    return (    
            <ul className="nav flex-column col-md-2 sidebar px-0" id="navbarNavDarkDropdown">
                <li className="nav-item mb-1" >
                    <button className="btn btn-primary" type="button" onClick={()=>{onHandleSetRoute(0);}}>
                        <i className="fal fa-tachometer-alt-average"></i>
                        Dashboard
                    </button>
                </li>
                {/*<li className="nav-item" >
                    <Link className="nav-link" to="/">
                        <i className="fal fa-user"></i>
                        Quản lý thành viên
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link className="nav-link" to="/managecate">
                        <i className="fal fa-folder"></i>
                        Quản lý danh mục
                    </Link>
                </li>*/}
                <li className="nav-item" >
                    <button className="btn btn-primary" type="button" onClick={()=>{onHandleSetRoute(1);}}>
                         <i className="fal fa-shopping-bag"></i>
                        Quản lý sản phẩm
                    </button>
                       
                </li>
            </ul>
    )
}
