import React from 'react';
import data from "../../data";
import './fasenra.css';
import FasenraHeader from './fasenra-header';
import FasenraBanner from './fasenra-banner';
import FasenraTemplate1 from './fasenra-template1';
import FasenraTemplate3 from './fasenra-template3';
import FasenraTemplate4 from './fasenra-template4';
import FasenraSafetyReference from './fasenra-safety-reference';
import FasenraBlueLinks from './fasenra-blue-links';
import FasenraFooter from './fasenra-footer';
import FasenraTemplate2 from './fasenra-template2';
class Fasenra extends React.Component {
    render() {
        return (
            <div clasName="" style={{ "width": "100%", "border": "0px", "padding": "0px", "margin": "0px" }}>
                <table id="main_table" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ "border": "1px solid #343434", "backgroundColor": "#fff", "color": "#000", "textAlign": "left", "verticalAlign": "top", "margin": "0 auto" }} align="center">
                    <tbody>
                        <tr>
                            <td>
                                <table id="main_table1" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ "backgroundColor": "#fff", "color": "#000", "textAlign": "left", "verticalAlign": "top", "margin": "0 auto" }} align="center">
                                    <tbody>
                                        {data.content.map(function (content, contentIndex) {
                                            return (
                                                <>
                                                    {content.preheader_text && content.title && content.click_text &&
                                                        <FasenraHeader
                                                            data={content}
                                                        />
                                                    }
                                                    {content.hero_img &&
                                                        <FasenraBanner
                                                            data={content}
                                                        />
                                                    }
                                                    {content.template_type === "template1" &&
                                                        <FasenraTemplate1
                                                            data={content}
                                                        />
                                                    }
                                                    {(content.template_type === "template2" || content.template_type === "template5") &&
                                                        <FasenraTemplate2
                                                            data={content}
                                                        />
                                                    }
                                                    {content.template_type === "template3" &&
                                                        <FasenraTemplate3 data={content} />
                                                    }
                                                    {content.template_type === "template4" &&
                                                        <FasenraTemplate4 data={content} />
                                                    }
                                                    <FasenraSafetyReference data={content} />
                                                    <FasenraBlueLinks data={content} />
                                                    <FasenraFooter data={content} />
                                                </>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Fasenra;