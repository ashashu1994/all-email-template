import React from 'react';
import CommonText from '../../_common/custom_text';
class SectionCTA extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <tr style={{ backgroundColor: "#544e5c" }}>
                    <td width="100%" style={{ backgroundColor: "#544e5c" }}>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                            {data.grid_cta.map(function (text, index) {
                                return (
                                    <tr style={{ backgroundColor: "#544e5c" }}>
                                        <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                        <td style={{ backgroundColor: "#544e5c" }}>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                                <tr style={{ backgroundColor: "#544e5c" }}>
                                                    <td width="15" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "15px" }}>&nbsp;</td>
                                                </tr>
                                                <tr style={{ backgroundColor: "#544e5c" }}>
                                                    <td width="100%" style={{ backgroundColor: "#544e5c" }}>
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                                            <tr>
                                                                <td width="100%" bgcolor="#544e5c" style={{ backgroundColor: "#544e5c" }}>
                                                                    <table className="mob_table" width="41%" border="0" cellspacing="0" cellpadding="0" bgcolor="#544e5c" style={{ float: "left", textAlign: "left", backgroundColor: "#544e5c" }} align="left">
                                                                        <tr style={{ backgroundColor: "#544e5c" }}>
                                                                            <td className="mob_space" height="3" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "3px" }}>&nbsp;</td>
                                                                        </tr>
                                                                        <tr style={{ backgroundColor: "#544e5c" }}>
                                                                            <td height="13" style={{ backgroundColor: "#544e5c", lineHeight: "16px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "14px", fontWeight: "bold" }}>
                                                                                {text.text1.map(function (commonTxt, commonTxtIndex) {
                                                                                    return (
                                                                                        <CommonText commonTxt={commonTxt} />
                                                                                    )
                                                                                })}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="10" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "10px" }}>&nbsp;</td>
                                                                        </tr>
                                                                        <tr style={{ backgroundColor: "#544e5c" }} className="mob_txt">
                                                                            <td height="13" style={{ backgroundColor: "#544e5c", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "left", fontSize: "14px", textDecoration: "none", padding: "0px", margin: "0px" }}>
                                                                                {text.text2.map(function (commonTxt, commonTxtIndex) {
                                                                                    return (
                                                                                        <CommonText commonTxt={commonTxt} />
                                                                                    )
                                                                                })}
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table className="mob_space" width="15%" border="0" cellspacing="0" cellpadding="0" bgcolor="#544e5c" style={{ float: "left", textAlign: "left", backgroundColor: "#544e5c", textDecoration: "none", padding: "0px", margin: "0px" }} align="left">
                                                                        <tr>
                                                                            <td width="20" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "28px", padding: "0px", margin: "0px" }}>&nbsp;</td>
                                                                        </tr>
                                                                    </table>
                                                                    <table className="mob_leftTable" width="10%" border="0" cellspacing="0" cellpadding="0" bgcolor="#544e5c" style={{ float: "left", textAlign: "left", backgroundColor: "#544e5c" }} align="left">
                                                                        <tr>
                                                                            <td className="mob_space" height="5" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "5px" }}>&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="10" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "10px" }}>&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" width="10%" height="5" style={{ color: "#fff", fontSize: "12px", lineHeight: "14px", backgroundColor: "#544e5c" }}><a target="_blank" href={data.cta_btn_1_link}><img src={`forxiga_images/${text.cta_btn_1}`} alt="" height="49px" width="215px" style={{ cursor: "pointer" }} /></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </td>
                </tr>

                <tr style={{ backgroundColor: "#544e5c" }}>
                    <td style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default SectionCTA;