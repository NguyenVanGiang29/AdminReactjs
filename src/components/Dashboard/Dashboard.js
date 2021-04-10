import React from 'react'

export const Dashboard = () => {
    return (
        <div className="col-md-10 px-0 content-box">
            <div className="col-md-10 px-0 content-box">
                <nav aria-label="breadcrumb" className="">
                    <div className="container-fluid breadcrumb-box">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="#">
                                    <i className="fal fa-home-alt home-icon"></i>
                                </a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </div>
                </nav>
                
                <div className="container-fluid">
                    <div className="row">
                        <h1 className="page-title">Dashboard</h1>
                    </div>
                    <div className="row dashboard">
                        <div className="col-md-3">
                            <div className="dashboard-info product">
                                <div className="row h-100">
                                    <div className="col-md-5 icon">
                                        <i className="fal fa-shopping-bag dashboard-icon"></i>
                                    </div>
                                    <div className="col-md-7 info">
                                        <div className="quantity"></div>
                                        <div className="discription"> Sản phẩm</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dashboard-info comment">
                                <div className="row h-100">
                                    <div className="col-md-5 icon">
                                        <i className="fal fa-clipboard-list dashboard-icon"></i>
                                    </div>
                                    <div className="col-md-7 info">
                                        <div className="quantity"></div>
                                        <div className="discription"> Loại sản phẩm</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dashboard-info user">
                                <div className="row h-100">
                                    <div className="col-md-5 icon">
                                        <i className="fal fa-user-chart dashboard-icon"></i>
                                    </div>
                                    <div className="col-md-7 info">
                                        <div className="quantity"></div>
                                        <div className="discription"> Người dùng</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dashboard-info advertisement">
                                <div className="row h-100">
                                    <div className="col-md-5 icon">
                                        <i className="fal fa-ad dashboard-icon"></i>
                                    </div>
                                    <div className="col-md-7 info">
                                        <div className="quantity">23,4k</div>
                                        <div className="discription"> Quảng cáo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
