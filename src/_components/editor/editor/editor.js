import React from 'react';
import '../../../common-inline.css';
class Editor extends React.Component {
    selectComponent(e) {
        var elements = document.getElementsByClassName("editor-component");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('selected');
        }
        e.target.classList.add('selected');
    }
    render() {
        return (
            <div className="editor-page-css">
                <div className="editor-left">
                    <div className="editor-padding">
                        <h3>Components</h3>
                        <div>
                            <div className="editor-component" style={{ backgroundImage: "url(/images/sections/section1.jpg)" }}
                                onClick={this.selectComponent}
                            >
                                <h5 className="editor-abs-text">Section 1</h5>
                            </div>
                            <div className="editor-component" style={{ backgroundImage: "url(/images/sections/section1.jpg)" }}
                                onClick={this.selectComponent}
                            >
                                <h5 className="editor-abs-text">Section 2</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="editor-right">
                    <div className="editor-right-top">

                    </div>
                    <div className="editor-right-middle">

                    </div>
                    <div className="editor-right-bottom">

                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}

export default Editor;