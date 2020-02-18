import React from 'react';
import data from "./component.json";
import '../../../common-inline.css';
import { NavLink } from 'react-router-dom';
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDiv: 0,
            desc: "",
            json: ""
        }
    }
    selectComponent(event, key, desc, json) {
        event.preventDefault();
        var elements = document.getElementsByClassName("editor-component");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
        this.setState({ activeDiv: (key) });
        this.setState({ desc: (desc) });
        this.setState({ json: (json) });
    }
    CopyToClipboard(containerid) {
        if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select().createTextRange();
            document.execCommand("copy");
            var copyID = document.getElementById("copied");
            copyID.classList.add("show");
            setTimeout(function () {
                copyID.classList.remove("show");
            }, 800)

        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(document.getElementById(containerid));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            var copyID = document.getElementById("copied");
            copyID.classList.add("show");
            setTimeout(function () {
                copyID.classList.remove("show");
            }, 800)
        }
    }
    render() {
        return (
            <div className="editor-page-css">
                <div className={"editor-left " + (this.state.activeDiv === 0 ? "w-100" : "")}>
                    <div className="start-bulding">
                        <NavLink class="btn-class" to="/createTemp" target="_blank">Click here</NavLink> to start building your template now.
                    </div>
                    <div className="editor-padding">
                        <h3>Components</h3>
                        <div>
                            {data.content.map((content, key) => (
                                <div key={key} className="editor-component" style={{ backgroundImage: `url(/images/sections/section${content.id}.jpg)` }}
                                    onClick={(e) => this.selectComponent(e, content.id, content.desc, content.json_val)}
                                >
                                    <h5 className="editor-abs-text">Section {content.id}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={"editor-right " + (this.state.activeDiv === 0 ? "d-none" : "")}>
                    <div className="editor-right-top">
                        <h3 className="text-white">Section {this.state.activeDiv}</h3>
                        <div className="editor-component w-100" style={{ backgroundImage: `url(/images/sections/section${this.state.activeDiv}.jpg)` }}>
                        </div>
                    </div>
                    <div className="editor-right-middle">
                        <div className="copy-json">
                            <h3 className="text-white mb-3">JSON Code</h3>
                            <p className="text-white mb-3 pre-wrap bg-black" id="copyDiv" onClick={(e) => this.CopyToClipboard('copyDiv')}>
                                {this.state.json}
                            </p>
                            <div id="copied">Copied to clipboard</div>
                        </div>
                    </div>
                    <div className="editor-right-bottom">
                        <h3 className="text-white mb-3">Description</h3>
                        <p className="text-white">
                            {this.state.desc}
                        </p>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}

export default Component;