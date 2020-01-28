import React from 'react';
import CommonText from '../../_common/custom_text';
class Section25 extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>

                <tr>
                    <td height="15" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "15px" }}>&nbsp;</td>
                </tr>
                <tr>
                    <td width="100%">
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                            <tbody>
                                <tr>
                                    <td width="10">&nbsp;</td>
                                    <td style={{ background: "#fff", color: "#000", textAlign: "left", fontSize: "12px", lineHeight: "15px" }}>
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                            <tbody>
                                                <tr>
                                                    <td style={{ background: "#ffffff", lineHeight: "10px", verticalAlign: "top", color: "#000", fontSize: "12px", width: "70%" }} className="width-mob-100 display-mob-block">
                                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ lineHeight: "14px" }}>
                                                            <tbody>
                                                                {content.section25.bullet_list && content.section25.bullet_list.map(function (bullet_list, bullet_listIndex) {
                                                                    return (
                                                                        <React.Fragment key={bullet_listIndex}>
                                                                            <tr>
                                                                                <td width="11" height="10" align="top" valign="top" style={{ background: "#fff", color: "#FF0f00", textAlign: "left", fontSize: "13px" }}>•</td>
                                                                                <td height="13" style={{ background: "#fff", color: "#000", textAlign: "left", fontSize: "12px", lineHeight: "15px" }}>
                                                                                    {bullet_list.multiline.map(function (multiline, multilineIndex) {
                                                                                        return (
                                                                                            <React.Fragment key={multilineIndex}>
                                                                                                <CommonText commonTxt={multiline} />
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })}
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td height="5" style={{ background: "#fff", lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                            </tr>
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    {content.section25.image &&
                                                        <td align="right" className="width-mob-100 display-mob-block" style={{ background: "#ffffff", lineHeight: "10px", verticalAlign: "top", color: "#000", width: "30%" }}>
                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#ffffff">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="100%" style={{ background: "#ffffff", lineHeight: "10px", verticalAlign: "top", color: "#000", fontSize: "12px", textAlign: "center" }}><img src={`symbicort_images/${content.section25.image}`} alt="main" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    }
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width="10">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="15" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "15px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default Section25;