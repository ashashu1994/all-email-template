import React from 'react';
import CommonText from '../../_common/custom_text';
class Section30 extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                <tr>
                    <td width="100%" bgcolor="#ffffff">
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#ffffff">
                            <tbody>
                                <tr>
                                    <td width="10" bgcolor="#ffffff">&nbsp;</td>
                                    <td>
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ border: "1px solid #ffffff" }} bgcolor="#fff">
                                            <tbody>
                                                <tr>
                                                    {content.section30.half[0] &&
                                                        <td class="width-mob-100 display-mob-block" style={{ width: "47%" }} valign="top">
                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ border: "1px solid #ffffff" }} bgcolor="#fff">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ textAlign: "center" }} align="center">
                                                                            <img src={`symbicort_images/${content.section30.half[0].image}`} alt="" style={{ maxWidth: "100%" }} />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="10" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "10px" }}></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ background: "#ffffff", color: "#3f3f3f", fontSize: "12px", lineHeight: "14px", textAlign: "center" }}>
                                                                            {content.section30.half[0].text.map(function (text, textIndex) {
                                                                                return (
                                                                                    <React.Fragment key={textIndex}>
                                                                                        <CommonText commonTxt={text} />
                                                                                    </React.Fragment>
                                                                                )
                                                                            })}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="15" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "15px" }}></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    }
                                                    <td class="display-mob-none" style={{ width: "6%" }} valign="top"></td>
                                                    {content.section30.half[1] &&
                                                        <td class="width-mob-100 display-mob-block" style={{ width: "47%" }} valign="top">
                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ border: "1px solid #ffffff" }} bgcolor="#fff">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ textAlign: "center" }} align="center">
                                                                            <img src={`symbicort_images/${content.section30.half[1].image}`} alt="" style={{ maxWidth: "100%" }} />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="10" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "10px" }}></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ background: "#ffffff", color: "#3f3f3f", fontSize: "12px", lineHeight: "14px", textAlign: "center" }}>
                                                                            {content.section30.half[1].text.map(function (text, textIndex) {
                                                                                return (
                                                                                    <React.Fragment key={textIndex}>
                                                                                        <CommonText commonTxt={text} />
                                                                                    </React.Fragment>
                                                                                )
                                                                            })}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="15" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "15px" }}></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    }
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width="10" bgcolor="#ffffff">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </>
        )
    }
}

export default Section30;