import React from 'react';
import CommonText from '../../_common/custom_text';
class Section15 extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                <tr>
                    <td width="100%" bgcolor="#FF0000">
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#FF0000">
                            <tbody>
                                <tr>
                                    <td width="10" bgcolor="#FF0000">&nbsp;</td>
                                    <td>
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ border: "1px solid #FF0000" }} bgcolor="#FF0000">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#FF0000">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#FF0000">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td height="8" style={{ background: "#FF0000", lineHeight: "8px", verticalAlign: "top", height: "5px", fontSize: "1px" }}>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style={{ background: "#FF0000", color: "#ffffff", fontSize: "16px", lineHeight: "18px", fontWeight: "bold", textAlign: "left" }}>
                                                                                        {content.section15.map(function (multiline, multilineIndex) {
                                                                                            return (
                                                                                                <React.Fragment key={multilineIndex}>
                                                                                                    <CommonText commonTxt={multiline} />
                                                                                                </React.Fragment>
                                                                                            )
                                                                                        })}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td height="8" style={{ background: "#FF0000", lineHeight: "8px", verticalAlign: "top", height: "5px", fontSize: "1px" }}>&nbsp;</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td width="10" style={{ background: "#FF0000", fontSize: "1px" }}>&nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width="10" bgcolor="#FF0000">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="10" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "5px", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default Section15;