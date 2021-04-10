import React from 'react'

export const Header = () => {
    return (
             <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top" role="navigation">
                        <div className="container-fluid">
                            <a className="navbar-brand" href=""><span> SeaMaf</span>Shop</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">

                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="far fa-user-circle"></i> 
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Hồ sơ</a></li>
                                        <li><a className="dropdown-item" href="">Đăng xuất</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
    )
}
