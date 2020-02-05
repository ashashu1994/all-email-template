import React from 'react';
import data from "./component.json";
import '../../../common-inline.css';
import JSONCode from './json-code.js';
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDiv: -1
        }
    }
    selectComponent(event, key) {
        event.preventDefault();
        var elements = document.getElementsByClassName("editor-component");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
        this.setState({ activeDiv: (key) });
    }
    render() {
        return (
            <div className="editor-page-css">
                <div className={"editor-left " + (this.state.activeDiv === -1 ? "w-100" : "")}>
                    <div className="editor-padding">
                        <h3>Components</h3>
                        <div>
                            {data.content.map((content, key) => (
                                <div key={key} className="editor-component" style={{ backgroundImage: `url(/images/sections/section${key + 1}.jpg)` }}
                                    onClick={(e) => this.selectComponent(e, key)}
                                >
                                    <h5 className="editor-abs-text">Section {key + 1}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={"editor-right " + (this.state.activeDiv === -1 ? "d-none" : "")}>
                    <div className="editor-right-top">
                        <h3 className="text-white">Section {this.state.activeDiv + 1}</h3>
                        <div className="editor-component w-100" style={{ backgroundImage: `url(/images/sections/section${this.state.activeDiv + 1}.jpg)` }}>
                        </div>
                    </div>
                    <div className="editor-right-middle">
                        <div className="">
                            <h3 className="text-white mb-3">JSON Code</h3>
                            <p className="text-white mb-3">
                                <JSONCode id={this.state.activeDiv + 1} />
                            </p>
                        </div>
                    </div>
                    <div className="editor-right-bottom">
                        <h3 className="text-white mb-3">Description</h3>
                        <p className="text-white">
                            Lorem Ipsum is simply dummy text used by designers.
                        </p>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}

export default Component;