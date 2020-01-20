import React from 'react';
import { NavLink } from 'react-router-dom';
class Home extends React.Component {
    render() {
        return (
            <div className="home-container-page">
                <div className="container">
                    <header>
                        <NavLink to="/"><img src="/images/website/logo.svg" width="150" alt="" /></NavLink>
                    </header>
                    <div className="banner" style={{ backgroundImage: "url(/images/website/image1.jpg)" }}>
                        <div className="abs">
                            <div className="d-table-mid">
                                <div className="mid-div">
                                    <h1>Lorem Ipsum</h1>
                                    <p>Lorem ipsum is simply dummy text used by designers in the website. Lorem Ipsum is simply
                                        dummy text is used
                                        by
                            designers. Lorem Ipsum is simply dummy text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section1">
                        <h2 className="special-text"><span>Brands</span></h2>
                        <p className="special-p">Lorem ipsum is simply dummy text used by designers. Lorem Ipsum <br />is simply dummy
                            text is used by
                designers. Lorem Ipsum is simply dummy text.</p>
                        <div className="content-div">
                            <NavLink to="/home/fasenra">
                                <div className="img-div" style={{ backgroundImage: "url(/images/website/fasenra.png)" }}>
                                    <div className="text-div">
                                        <h4>Fasenra</h4>
                                        <p>Lorem Ipsum is simply dummy text is used by designers. Lorem Ipsum is simply dummy
                                            text...
                            </p>
                                        <button className="">View More</button>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="content-div">
                            <NavLink to="/home/forxiga">
                                <div className="img-div" style={{ backgroundImage: "url(/images/website/farxiga.png)" }}>
                                    <div className="text-div">
                                        <h4>farxiga</h4>
                                        <p>Lorem Ipsum is simply dummy text is used by designers. Lorem Ipsum is simply dummy
                                            text...
                            </p>
                                        <button className="">View More</button>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="content-div">
                            <NavLink to="/home/lynparza">
                                <div className="img-div" style={{ backgroundImage: "url(/images/website/lynparza.jpg)" }}>
                                    <div className="text-div">
                                        <h4>Lynparza</h4>
                                        <p>Lorem Ipsum is simply dummy text is used by designers. Lorem Ipsum is simply dummy
                                            text...
                            </p>
                                        <button className="">View More</button>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="content-div">
                            <NavLink to="/home/symbicort">
                                <div className="img-div" style={{ backgroundImage: "url(/images/website/symbicort.png)" }}>
                                    <div className="text-div">
                                        <h4>symbicort</h4>
                                        <p>Lorem Ipsum is simply dummy text is used by designers. Lorem Ipsum is simply dummy
                                            text...
                            </p>
                                        <button className="">View More</button>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </section>
                    <footer>
                        <div className="footer-left">
                            <p>© 2020 Indegene. All rights reserved</p>
                        </div>
                        <div className="clearfix"></div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Home;