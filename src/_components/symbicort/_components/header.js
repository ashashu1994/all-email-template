import React from 'react';
import CommonText from '../../_common/custom_text';
class Header extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <tr>
                <td>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#fff">
                        <tbody>
                            <tr>
                                <td width="10" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#fff">
                                        <tbody>
                                            <tr>
                                                <td height="10" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "10px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            {content.preheader_text && <>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "13px", color: "#000", verticalAlign: "top", height: "8px", textAlign: "left", fontSize: "11px" }}>
                                                        {content.preheader_text.map(function (preheader_text, preheader_textIndex) {
                                                            return (
                                                                <React.Fragment key={preheader_textIndex}>
                                                                    <CommonText commonTxt={preheader_text} />
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {content.title && <>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "20px", verticalAlign: "top", height: "8px", color: "#000", fontSize: "20px", textAlign: "left" }} className="font-size-heading">
                                                        {content.title.map(function (title, titleIndex) {
                                                            return (
                                                                <React.Fragment key={titleIndex}>
                                                                    <CommonText commonTxt={title} />
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {content.click_text && <>
                                                {content.click_text.map(function (click_text, click_textIndex) {
                                                    return (
                                                        <React.Fragment key={click_textIndex}>
                                                            <tr>
                                                                <td height="13" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "11px" }}>
                                                                    {click_text.multiline.map(function (multiline, multilineIndex) {
                                                                        return (
                                                                            <React.Fragment key={multilineIndex}>
                                                                                <CommonText commonTxt={multiline} />
                                                                            </React.Fragment>
                                                                        )
                                                                    })}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="1" style={{ background: "#fff", lineHeight: "1px", verticalAlign: "top", height: "1px", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </React.Fragment>
                                                    )
                                                })}
                                                <tr>
                                                    <td height="15" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>
                                            }
                                        </tbody>
                                    </table>
                                </td>
                                <td width="10" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr >
        )
    }
}

export default Header;