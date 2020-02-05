import React from 'react';
import '../../../common-inline.css';
class JSONCode extends React.Component {
    render() {
        const { id } = this.props;
        const reactcode1 = `
        {"section1": {
            "marginTop": "10px",
            "marginBottom": "10px",
            "text": [
                "Lorem Ipsum is simply dummy text of 14px font size",
                "<sup>20"
            ]
        }}
        `;
        return (
            <>
                {id === 1 ? reactcode1 : "Nothing is selected"}
            </>
        )
    }
}

export default JSONCode;