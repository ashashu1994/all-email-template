import React from 'react';
import CommonText from '../../_common/custom_text';
class Section10 extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                <tr style={{ lineHeight: "0px" }}>
                    <td width="100%" bgcolor="#3f3f3f">
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#3f3f3f" style={{ borderTop: "2px solid #FF0000", borderBottom: "2px solid #FF0000" }}>
                            <tbody>
                                <tr style={{ lineHeight: "0px" }}>
                                    <td width="10" bgcolor="#3f3f3f">&nbsp;</td>
                                    <td>
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#3f3f3f">
                                            <tbody>
                                                <tr style={{ lineHeight: "0px" }}>
                                                    <td>
                                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#3f3f3f">
                                                            <tbody>
                                                                <tr style={{ lineHeight: "0px" }}>
                                                                    <td>
                                                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#3f3f3f">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td height="8" style={{ background: "#3f3f3f", lineHeight: "8px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                                </tr>
                                                                                {content.section10.title && <>
                                                                                    <tr>
                                                                                        <td style={{ background: "#3f3f3f", color: "#ffffff", fontSize: "14px", lineHeight: "12px", textAlign: "left" }}>
                                                                                            {content.section10.title}
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height="8" style={{ background: "#3f3f3f", lineHeight: "8px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                                    </tr>
                                                                                </>}
                                                                                {content.section10.paragraph && content.section10.paragraph.map(function (paragraph, paragraphIndex) {
                                                                                    return (
                                                                                        <React.Fragment key={paragraphIndex}>
                                                                                            <tr>
                                                                                                <td style={{ background: "#3f3f3f", color: "#ffffff", fontSize: "11px", lineHeight: "12px", textAlign: "left" }}>
                                                                                                    {paragraph.multiline.map(function (multiline, multilineIndex) {
                                                                                                        return (
                                                                                                            <React.Fragment key={multilineIndex}>
                                                                                                                <CommonText commonTxt={multiline} />
                                                                                                            </React.Fragment>
                                                                                                        )
                                                                                                    })}
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td height="8" style={{ background: "#3f3f3f", lineHeight: "8px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                                            </tr>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })}
                                                                                {content.section10.bullet_list && content.section10.bullet_list.map(function (bullet_list, bullet_listIndex) {
                                                                                    return (
                                                                                        <React.Fragment key={bullet_listIndex}>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ lineHeight: "14px" }}>
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td width="11" height="10" align="top" valign="top" style={{ background: "#3f3f3f", color: "#FF0f00", textAlign: "left", fontSize: "13px" }}>•</td>
                                                                                                                <td height="13" style={{ background: "#3f3f3f", color: "#fff", textAlign: "left", fontSize: "12px", lineHeight: "15px" }}>
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
                                                                                                                <td height="8" style={{ background: "#3f3f3f", fontSize: "1px", lineHeight: "8px" }}></td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })}
                                                                                <tr>
                                                                                    <td height="7" style={{ background: "#3f3f3f", fontSize: "1px", lineHeight: "7px" }}></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td width="10" style={{ background: "#3f3f3f", fontSize: "1px" }}>&nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width="10" bgcolor="#3f3f3f">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="15" style={{ background: "#fff", fontSize: "1px", lineHeight: "15px" }}></td>
                </tr>
            </>
        )
    }
}

export default Section10;