import React from 'react';
import { NavLink } from 'react-router-dom';
class CreateTemp extends React.Component {
    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('jsonText').value], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "data.json";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    render() {
        return (
            <div className="editor-page-css">
                <div className="editor-left w-100">
                    <div className="editor-padding">
                        <textarea id="jsonText" defaultValue='{
                                        "brand": "brandName",
                                        "borderColor": "#343434",
                                        "content": [
                                            
                                        ]                                        
                                        }'>
                        </textarea>
                        <div>
                            <button class="btn-class" onClick={this.downloadTxtFile}>Download JSON</button>
                            <NavLink class="btn-class" target="_blank" to="/template">Show Template</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateTemp;