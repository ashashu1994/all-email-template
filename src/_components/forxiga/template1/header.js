import React from 'react';
import CommonText from '../../_common/custom_text';
class ForxigaTemplate1Header extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                        <tr>
                            <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                            <td>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td height="15" style={{ background: "#544e5c", lineHeight: "15px", fontSize: "1px" }}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td height="13" style={{ background: "#544e5c", lineHeight: "12px", color: "#fff", verticalAlign: "top", height: "8px", textAlign: "left", fontSize: "12px", fontWeight: "bold" }}>
                                            {data.preheader_text.map(function (commonTxt, commonTxtIndex) {
                                                return (
                                                    <CommonText commonTxt={commonTxt} />
                                                )
                                            })}
                                        </td>
                                    </tr>
                                    {data.hero_img &&
                                        <tr>
                                            <td height="15" style={{ background: "#544e5c", lineHeight: "15px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                        </tr>
                                    }
                                </table>
                            </td>
                            <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
}

export default ForxigaTemplate1Header;