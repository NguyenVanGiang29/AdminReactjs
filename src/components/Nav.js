import React from 'react';
import {Link} from 'react-router-dom';

export const Nav = () => {
    return (    
                    <ul className="nav flex-column col-md-2 sidebar px-0" id="navbarNavDarkDropdown">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                <i className="fal fa-tachometer-alt-average"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item" >
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
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/manageprd">
                                <i className="fal fa-shopping-bag"></i>
                                Quản lý sản phẩm
                            </Link>
                        </li>
                    </ul>
        

    )
}
