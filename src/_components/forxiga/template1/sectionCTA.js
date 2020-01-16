import React from 'react';
import CommonText from '../../_common/custom_text';
class SectionCTA extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <tr style={{ backgroundColor: "#544e5c" }}>
                    <td width="100%" style={{ backgroundColor: "#544e5c" }}>
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#544e5c" }}>
                            <tbody>
                                {data.grid_cta.map(function (text, index) {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr style={{ backgroundColor: "#544e5c" }}>
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                                <td style={{ backgroundColor: "#544e5c" }}>
                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#544e5c" }}>
                                                        <tbody>
                                                            <tr style={{ backgroundColor: "#544e5c" }}>
                                                                <td width="15" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "15px" }}>&nbsp;</td>
                                                            </tr>
                                                            <tr style={{ backgroundColor: "#544e5c" }}>
                                                                <td width="100%" style={{ backgroundColor: "#544e5c" }}>
                                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#544e5c" }}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="100%" bgcolor="#544e5c" style={{ backgroundColor: "#544e5c" }}>
                                                                                    <table className="width-mob-100" width="41%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#544e5c" style={{ float: "left", textAlign: "left", backgroundColor: "#544e5c" }} align="left">
                                                                                        <tbody>
                                                                                            <tr style={{ backgroundColor: "#544e5c" }}>
                                                                                                <td className="width-mob-10" height="3" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "3px" }}>&nbsp;</td>
                                                                                            </tr>
                                                                                            <tr style={{ backgroundColor: "#544e5c" }}>
                                                                                                <td height="13" style={{ backgroundColor: "#544e5c", lineHeight: "16px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "14px", fontWeight: "bold" }}>
                                                                                                    {text.text1.map(function (commonTxt, commonTxtIndex) {
                                                                                                        return (
                                                                                                            <React.Fragment key={commonTxtIndex}>
                                                                                                                <CommonText commonTxt={commonTxt} />
                                                                                                            </React.Fragment>
                                                                                                        )
                                                                                                    })}
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td width="10" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "10px" }}>&nbsp;</td>
                                                                                            </tr>
                                                                                            <tr style={{ backgroundColor: "#544e5c" }} className="display-mob-block">
                                                                                                <td height="13" style={{ backgroundColor: "#544e5c", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "left", fontSize: "14px", textDecoration: "none", padding: "0px", margin: "0px" }}>
                                                                                                    {text.text2.map(function (commonTxt, commonTxtIndex) {
                                                                                                        return (
                                                                                                            <React.Fragment key={commonTxtIndex}>
                                                                                                                <CommonText commonTxt={commonTxt} />
                                                                                                            </React.Fragment>
                                                                                                        )
                                                                                                    })}
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <table className="width-mob-10" width="15%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#544e5c" style={{ float: "left", textAlign: "left", backgroundColor: "#544e5c", textDecoration: "none", padding: "0px", margin: "0px" }} align="left">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td width="20" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "28px", padding: "0px", margin: "0px" }}>&nbsp;</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <table width="10%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#544e5c" style={{ float: "left", textAlign: "left", backgroundColor: "#544e5c" }} align="left">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td className="width-mob-10" height="5" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "5px" }}>&nbsp;</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td width="10" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "10px" }}>&nbsp;</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center" width="10%" height="5" style={{ color: "#fff", fontSize: "12px", lineHeight: "14px", backgroundColor: "#544e5c" }}><a target="_blank" href={data.cta_btn_1_link} rel="noopener noreferrer"><img src={`forxiga_images/${text.cta_btn_1}`} alt="" height="49px" width="215px" style={{ cursor: "pointer" }} /></a>
                                                                                                </td>
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
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })}
                            </tbody>
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