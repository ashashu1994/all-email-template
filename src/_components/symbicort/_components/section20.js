import React from 'react';
import CommonText from '../../_common/custom_text';
class Section20 extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                <tr>
                    <td width="100%">
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                            <tbody>
                                <tr>
                                    <td className="display-mob-none" width="50" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                                    <td className="display-none display-mob-block" width="10" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                                    <td>
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td height="8" style={{ background: "#eeeeee", lineHeight: "8px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style={{ background: "#eeeeee", color: "#000", fontSize: " 13px", lineHeight: "16px", fontWeight: "bold", textAlign: "center" }}>
                                                                                        {content.section20.map(function (multiline, multilineIndex) {
                                                                                            return (
                                                                                                <React.Fragment key={multilineIndex}>
                                                                                                    <CommonText commonTxt={multiline} />
                                                                                                </React.Fragment>
                                                                                            )
                                                                                        })}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td height="8" style={{ background: "#eeeeee", lineHeight: "8px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td className="display-mob-none" width="50" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                                    <td className="display-none display-mob-block" width="10" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="13" style={{ background: "#fff", lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default Section20;