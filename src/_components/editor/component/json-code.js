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
                "Lorem Ipsum is simply dummy text of 14px font size",
                "<sup>20"
            ]
        }
        `;
        const reactcode2 = `
        {
            "marginTop": "10px",
            "marginBottom": "10px",
            "bgColor": "#000",
            "textColor": "#fff",
            "section2": [
                "Lorem Ipsum is simply dummy text of 20px font size",
                "<sup>20"
            ]
        }
        `;
        const reactcode3 = `
        {
            "marginTop": "10px",
            "marginBottom": "10px",
            "bgColor": "#fff",
            "textColor": "#000",
            "section3": [
                "Lorem Ipsum is simply dummy text of 11px font size",
                "<sup>20"
            ]
        }
        `;
        const reactcode4 = `
        {
            "marginTop": "10px",
            "marginBottom": "10px",
            "bgColor": "#000",
            "textColor": "#fff",
            "section4": [
                "Lorem Ipsum is simply dummy text of 10px font size",
                "<sup>20"
            ]
        }
        `;
        const reactcode5 = `
        {
            "marginTop": "10px",
            "marginBottom": "10px",
            "bgColor": "#fff",
            "textColor": "#000",
            "section5": [
                "Lorem Ipsum is simply dummy text of 15px font size",
                "<sup>20 ",
            ]
        }
        `;
        const reactcode6 = `
        {
            "marginTop": "10px",
            "marginBottom": "10px",
            "bgColor": "#fff",
            "textColor": "#000",
            "section6": [
                "Lorem Ipsum is simply dummy text of 12px font size"
            ]
        }
        `;
        const reactcode10 = `
        {
            "marginTop": "10px",
            "marginBottom": "10px",
            "bgColor": "#000",
            "textColor": "#fff",
            "section10": {
                "preheader_text": [
                    "Preheader Summary text"
                ],
                "title": [
                    "FASENRA (benralizumab)"
                ],
                "click_text": [
                    {
                        "multiline": [
                            "Click for full ",
                            "<a>#</a>Prescribing Information",
                            " and scroll down or click for ",
                            "<a>#</a>Important Safety Information",
                            "."
                        ]
                    },
                    {
                        "multiline": [
                            "Adverse events should be reported. Reporting forms and information can be found at ",
                            "<a>#</a>https://aereporting.astrazeneca.com",
                            "."
                        ]
                    }
                ]
            }
        }
        `;
        return (
            <>
                {(id === 1) ? reactcode1 :
                    (id === 2) ? reactcode2 :
                        (id === 3) ? reactcode3 :
                            (id === 4) ? reactcode4 :
                                (id === 5) ? reactcode5 :
                                    (id === 6) ? reactcode6 :
                                        (id === 10) ? reactcode10 :
                                            "Code not available"}
            </>
        )
    }
}

export default JSONCode;