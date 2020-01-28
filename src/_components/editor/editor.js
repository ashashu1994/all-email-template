import React, { useState } from 'react';
import '../../common-inline.css';
function Editor() {
    return (
        <div className="editor-page-css">
            <div className="editor-left">
                <div className="editor-padding">
                    <h3>Components</h3>
                    <div>
                        <div className="editor-component">
                            a
                        </div>
                        <div className="editor-component">
                            a
                        </div>
                        <div className="editor-component">
                            a
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

export default Editor;