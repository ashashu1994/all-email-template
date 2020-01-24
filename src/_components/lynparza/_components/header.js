import React from 'react';
import CommonText from '../../_common/custom_text';
class Header extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <tr>
                <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td width="10">&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td height="10" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            {content.preheader_text && <>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "14px", color: "#000", verticalAlign: "top", height: "8px", textAlign: "left", fontSize: "11px" }}>
                                                        {content.preheader_text.map(function (commonTxt, commonTxtIndex) {
                                                            return (
                                                                <React.Fragment key={commonTxtIndex}>
                                                                    <CommonText commonTxt={commonTxt} />
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>
                                            }
                                            {content.title && <>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "18px", verticalAlign: "top", height: "8px", color: "#004d74", fontSize: "20px" }}><b style={{ color: "#004d74" }}>
                                                        {content.title.map(function (commonTxt, commonTxtIndex) {
                                                            return (
                                                                <React.Fragment key={commonTxtIndex}>
                                                                    <CommonText commonTxt={commonTxt} />
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </b> </td>
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {content.click_text && <>
                                                {content.click_text.map(function (click_text, click_textIndex) {
                                                    return (
                                                        <React.Fragment key={click_textIndex}>
                                                            <tr>
                                                                <td height="13" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "11px" }}>
                                                                    {click_text.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                        return (
                                                                            <React.Fragment key={commonTxtIndex}>
                                                                                <CommonText commonTxt={commonTxt} />
                                                                            </React.Fragment>
                                                                        )
                                                                    })}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="2" style={{ background: "#fff", lineHeight: "3px", verticalAlign: "top", height: "3px", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </React.Fragment>
                                                    )
                                                })}
                                                <tr>
                                                    <td height="10" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                        </tbody>
                                    </table>
                                </td>
                                <td width="10">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default Header;