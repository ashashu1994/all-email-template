import React from 'react';
import '../../../common-inline.css';
class JSONCode extends React.Component {
    render() {
        const { id } = this.props;
        const reactcode1 = `
        {
            "marginTop": "10px",
            "marginBottom": "10px",
            "bgColor": "#fff",
            "textColor": "#000",
            "section1": [
                "Lorem Ipsum is simply dummy text of 14px font size"
            ]
        }
        `;
        const reactcode2 = `
        {
            "marginTop": "10px",
            "marginBottom": "10px",
            "bgColor": "#fff",
            "textColor": "#000",
            "section2": [
                "Lorem Ipsum is simply dummy text of 20px font size"
            ]
        }
        `;
        return (
            <>
                {(id === 1) ? reactcode1 : (id === 2) ? reactcode2 :
                    "Nothing is selected"}
            </>
        )
    }
}

export default JSONCode;