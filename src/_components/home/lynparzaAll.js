import React from 'react';
import { NavLink } from 'react-router-dom';
class LynparzaAll extends React.Component {
    render() {
        return (
            <div className="home-container-page">
                <div className="container">
                    <header>
                        <NavLink to="/"><img src="/images/website/logo.svg" width="150" alt="" /></NavLink>
                        <div className="home-btn"><NavLink to="/"><img src="/images/website/home.svg" alt="Home" /> Home</NavLink></div>
                    </header>
                    <div className="banner" style={{ backgroundImage: "url(/images/website/image1.jpg)" }}>
                        <div className="abs">
                            <div className="d-table-mid">
                                <div className="mid-div">
                                    <h1>Lynparza</h1>
                                    <p>Lorem ipsum is simply dummy text used by designers in the website. Lorem Ipsum is simply
                                        dummy text is used
                                        by
                            designers. Lorem Ipsum is simply dummy text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section1">
                        <h2 className="special-text"><span>Choose your template</span></h2>
                        <p className="special-p">Lorem ipsum is simply dummy text used by designers. Lorem Ipsum <br />is simply dummy
                            text is used by
                designers. Lorem Ipsum is simply dummy text.</p>
                        <div className="content-div2">
                            <div className="content-left">
                                <div className="content2-content">
                                    <div className="template-img" style={{ backgroundImage: "url(/images/templates/lynparza-template1.jpg)" }}></div>
                                    <h3>Template 1</h3>
                                    <p>Lorem ipsum is simply dummy text used by designers. Lorem Ipsum <br />is simply dummy
                                        text is used by
                            designers. Lorem Ipsum is simply dummy text.</p>
                                    <p>Lorem ipsum is simply dummy text used by designers. Lorem Ipsum <br />is simply dummy
                                        text is used by
                            designers. Lorem Ipsum is simply dummy text.</p>
                                    <NavLink to="/template/lynparza/template1" target="_blank">
                                        <button className="">Edit Template</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="content-left">
                                <div className="content2-content">
                                    <div className="template-img" style={{ backgroundImage: "url(/images/templates/lynparza-template1.jpg)" }}></div>
                                    <h3>Template 2</h3>
                                    <p>Lorem ipsum is simply dummy text used by designers. Lorem Ipsum <br />is simply dummy
                                        text is used by
                            designers. Lorem Ipsum is simply dummy text.</p>
                                    <p>Lorem ipsum is simply dummy text used by designers. Lorem Ipsum <br />is simply dummy
                                        text is used by
                            designers. Lorem Ipsum is simply dummy text.</p>
                                    <NavLink to="/template/lynparza/template2" target="_blank">
                                        <button className="">Edit Template</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="content-div2">
                            <div className="content-left">
                                <div className="content2-content">
                                    <div className="template-img" style={{ backgroundImage: "url(/images/templates/lynparza-template1.jpg)" }}></div>
                                    <h3>Template 3</h3>
                                    <p>Lorem ipsum is simply dummy text used by designers. Lorem Ipsum <br />is simply dummy
                                        text is used by
                            designers. Lorem Ipsum is simply dummy text.</p>
                                    <p>Lorem ipsum is simply dummy text used by designers. Lorem Ipsum <br />is simply dummy
                                        text is used by
                            designers. Lorem Ipsum is simply dummy text.</p>
                                    <NavLink to="/template/lynparza/template3" target="_blank">
                                        <button className="">Edit Template</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </section>
                    <footer>
                        <div className="footer-left">
                            <p>© 2020 Indegene. All rights reserved</p>
                        </div>
                        <div className="clearfix"></div>
                    </footer>
                </div>
            </div >
        )
    }
}

export default LynparzaAll;