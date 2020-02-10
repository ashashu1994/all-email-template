import React from 'react';
import data from "../../../data";
import Section1 from '../_all_components/section1';
import Section2 from '../_all_components/section2';
import Section3 from '../_all_components/section3';
import Section4 from '../_all_components/section4';
import Section5 from '../_all_components/section5';
import Section10 from '../_all_components/section10';
import Section15 from '../_all_components/section15';
import Section20 from '../_all_components/section20';
import Section6 from '../_all_components/section6';
import Section25 from '../_all_components/section25';
import Section26 from '../_all_components/section26';
import Section30 from '../_all_components/section30';
import Section35 from '../_all_components/section35';
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
                                                        <Section1
                                                            data={content.section1}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section2 &&
                                                        <Section2
                                                            data={content.section2}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }

                                                    {content.section3 &&
                                                        <Section3 data={content.section3}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section4 &&
                                                        <Section4 data={content.section4}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section5 &&
                                                        <Section5 data={content.section5}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section6 &&
                                                        <Section6 data={content.section6}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section10 &&
                                                        <Section10 data={content.section10}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section15 &&
                                                        <Section15
                                                            data={content.section15}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section20 &&
                                                        <Section20
                                                            data={content.section20}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section25 &&
                                                        <Section25
                                                            data={content.section25}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section26 &&
                                                        <Section26
                                                            data={content.section26}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section30 &&
                                                        <Section30
                                                            data={content.section30}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
                                                        />
                                                    }
                                                    {content.section35 &&
                                                        <Section35
                                                            data={content.section35}
                                                            marginTop={content.marginTop}
                                                            marginBottom={content.marginBottom}
                                                            bgColor={content.bgColor}
                                                            textColor={content.textColor}
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