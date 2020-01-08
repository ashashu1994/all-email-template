import React from 'react';
import CommonText from '../../_common/custom_text';
class Section8 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <tr>
                    <td height="30" style={{ background: "#3b353f", lineHeight: "30px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                </tr>
                {data.heading &&
                    <tr>
                        <td width="100%">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#3b353f" }}>
                                <tr>
                                    <td width="25" style={{ backgroundColor: "#3b353f" }}>&nbsp;</td>
                                    <td >
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#3b353f" }}>
                                            <tr>
                                                <td height="13" style={{ background: "#3b353f", lineHeight: "17px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "16px" }}>
                                                    {data.heading.map(function (commonTxt, commonTxtIndex) {
                                                        return (
                                                            <CommonText commonTxt={commonTxt} />
                                                        )
                                                    })}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="30" style={{ background: "#3b353f", lineHeight: "30px", verticalAlign: "top", fontSize: "1px", height: "8px" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="25" style={{ backgroundColor: "#3b353f" }}>&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                }
                {data.grid2 && <>
                    <tr>
                        <td width="100%">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                <tr>
                                    <td width="25" style={{ backgroundColor: "#3b353f" }}>&nbsp;</td>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#65606d" }}>
                                            <tr>
                                                <td height="1" style={{ background: "#e3b7b8", fontSize: "1px", lineHeight: "1px" }}>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td width="15" style={{ background: "#65606d", fontSize: "1px", lineHeight: "15px" }}>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td width="100%">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td width="100%" bgcolor="#65606d">
                                                                <table className="display-mob-none" width="20" border="0" cellspacing="0" cellpadding="0" bgcolor="#65606d" style={{ float: "left", textAlign: "left" }} align="left">
                                                                    <tr>
                                                                        <td width="10" style={{ background: "#65606d", fontSize: "1px", lineHeight: "28px" }}>&nbsp;</td>
                                                                    </tr>
                                                                </table>
                                                                {data.grid2.map(function (text, index) {
                                                                    return (
                                                                        <>
                                                                            <table className="width-mob-100 text-mob-center" width="40%" border="0" cellspacing="0" cellpadding="0" bgcolor="#65606d" style={{ float: "left", textAlign: "left" }} align="left">
                                                                                <tr>
                                                                                    <td className="width-mob-10" height="3" style={{ background: "#65606d", fontSize: "1px", lineHeight: "3px" }}>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="35%" height="20" style={{ color: "#fff", fontSize: "16px" }}>
                                                                                        {text.title.map(function (commonTxt, commonTxtIndex) {
                                                                                            return (
                                                                                                <CommonText commonTxt={commonTxt} />
                                                                                            )
                                                                                        })}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="5" style={{ background: "#65606d", fontSize: "1px", lineHeight: "5px" }}>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="40%" height="20" style={{ color: "#fff", fontSize: "12px", lineHeight: "14px" }}>
                                                                                        {text.description.map(function (commonTxt, commonTxtIndex) {
                                                                                            return (
                                                                                                <CommonText commonTxt={commonTxt} />
                                                                                            )
                                                                                        })}
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <table width="45" border="0" cellspacing="0" cellpadding="0" bgcolor="#65606d" style={{ float: "left", textAlign: "left" }} align="left">
                                                                                <tr>
                                                                                    <td width="20" style={{ background: "#65606d", fontSize: "1px", lineHeight: "28px" }}>&nbsp;</td>
                                                                                </tr>
                                                                            </table>
                                                                        </>
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="15" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="25" style={{ backgroundColor: "#3b353f" }}>&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="35" style={{ background: "#3b353f", lineHeight: "35px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                    </tr>
                </>
                }
            </>
        )
    }
}

export default Section8;