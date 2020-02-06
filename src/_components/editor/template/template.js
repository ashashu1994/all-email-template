import React from 'react';
import data from "../../../data";
import Section1 from '../_all_components/section1';
import Section2 from '../_all_components/section2';
import Section3 from '../_all_components/section3';
import Section4 from '../_all_components/section4';
import Section5 from '../_all_components/section5';
import Section10 from '../_all_components/section10';
import Section15 from '../_all_components/section15';
class Template extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", border: "0px", padding: "0px", margin: "0px" }}>
                <table id="main_table" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ border: `1px solid ${data.borderColor ? data.borderColor : "#343434"}`, backgroundColor: "#fff", color: "#000", textAlign: "left", verticalAlign: "top", margin: "0 auto" }} align="center">
                    <tbody>
                        <tr>
                            <td>
                                <table id="main_table1" width="598" border="0" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#fff", color: "#000", textAlign: "left", verticalAlign: "top", margin: "0 auto" }} align="center">
                                    <tbody>
                                        {data.content && data.content.map(function (content, contentIndex) {
                                            return (
                                                <React.Fragment key={contentIndex}>
                                                    {content.section1 &&
                                                        <Section1 data={content.section1} />
                                                    }
                                                    {content.section2 &&
                                                        <Section2 data={content.section2} />
                                                    }
                                                    {content.section3 &&
                                                        <Section3 data={content.section3} />
                                                    }
                                                    {content.section4 &&
                                                        <Section4 data={content.section4} />
                                                    }
                                                    {content.section5 &&
                                                        <Section5 data={content.section5} />
                                                    }
                                                    {content.section10 &&
                                                        <Section10 data={content.section10} />
                                                    }
                                                    {content.section15 &&
                                                        <Section15 data={content.section15}
                                                        
                                                        />
                                                    }
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

export default Template;