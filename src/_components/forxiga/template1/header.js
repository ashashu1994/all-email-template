import React from 'react';
import CommonText from '../../_common/custom_text';
class ForxigaTemplate1Header extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#544e5c" }}>
                        <tbody>
                            <tr>
                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td height="15" style={{ background: "#544e5c", lineHeight: "15px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td height="13" style={{ background: "#544e5c", lineHeight: "14px", color: "#fff", verticalAlign: "top", height: "8px", textAlign: "left", fontSize: "12px", fontWeight: "bold" }}>
                                                    {data.preheader_text.map(function (commonTxt, commonTxtIndex) {
                                                        return (
                                                            <React.Fragment key={commonTxtIndex}>
                                                                <CommonText commonTxt={commonTxt} />
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="15" style={{ background: "#544e5c", lineHeight: "15px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default ForxigaTemplate1Header;