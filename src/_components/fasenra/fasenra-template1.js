import React from 'react';
import data from "../data/fasenra-template1";
import FasenraHeader from './_common/fasenra-header';
import FasenraBanner from './_common/fasenra-banner';
import FasenraTemplate1 from './_common/fasenra-template1';
import FasenraSafetyReference from './_common/fasenra-safety-reference';
import FasenraBlueLinks from './_common/fasenra-blue-links';
import FasenraFooter from './_common/fasenra-footer';
class FasenraTemp1 extends React.Component {
    render() {
        return (
            <div style={{ "width": "100%", "border": "0px", "padding": "0px", "margin": "0px" }}>
                <table id="main_table" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ "border": "1px solid #343434", "backgroundColor": "#fff", "color": "#000", "textAlign": "left", "verticalAlign": "top", "margin": "0 auto" }} align="center">
                    <tbody>
                        <tr>
                            <td>
                                <table id="main_table1" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ "backgroundColor": "#fff", "color": "#000", "textAlign": "left", "verticalAlign": "top", "margin": "0 auto" }} align="center">
                                    <tbody>
                                        {data.content && data.content.map(function (content, contentIndex) {
                                            return (
                                                <React.Fragment key={contentIndex}>
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
                                                    <FasenraTemplate1
                                                        data={content}
                                                    />
                                                    <FasenraSafetyReference data={content} />
                                                    <FasenraBlueLinks data={content} />
                                                    <FasenraFooter data={content} />
                                                </React.Fragment>
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

export default FasenraTemp1;