import React from 'react';
import CommonText from '../_common/custom_text';
import ForxigaTemplate1Header from './template1/header';
import ForxigaTemplate1Banner from './template1/banner';
import SectionCTA from './template1/sectionCTA';
import Section4 from './template1/section4';
import Section567 from './template1/section567';
class ForxigaTemplate1 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div style={{ "width": "100%", "border": "0px", "padding": "0px", "margin": "0px" }}>
                <table id="main_table" width="598" border="0" cellpadding="0" cellspacing="0" style={{ "border": "1px solid #343434", "color": "#000", "textAlign": "left", "verticalAlign": "top", "margin": "0 auto" }} align="center">
                    <tr>
                        <td>
                            <table id="main_table1" width="598" border="0" cellpadding="0" cellspacing="0" style={{ color: "#000", textAlign: "left", verticalAlign: "top", margin: "0 auto" }} align="center">
                                {data.preheader_text &&
                                    <ForxigaTemplate1Header data={data} />
                                }
                                {data.hero_img &&
                                    <ForxigaTemplate1Banner data={data} />
                                }
                                {data.grid_cta &&
                                    <SectionCTA data={data} />
                                }
                                {data.section4 &&
                                    <Section4 data={data} />
                                }
                                {data.section567 && data.section567.map(function (section567, section567Index) {
                                    return (
                                        <Section567 data={section567} />
                                    )
                                })}
                                <tr>
                                    <td width="100%">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#3b353f" }}>
                                            <tr>
                                                <td width="25" style={{ backgroundColor: "#3b353f" }}>&nbsp;</td>
                                                <td >
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#3b353f" }}>
                                                        <tr>
                                                            <td height="30" style={{ background: "#3b353f", lineHeight: "30px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#3b353f", lineHeight: "17px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "16px" }}>
                                                                {data.text11.map(function (commonTxt, commonTxtIndex) {
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
                                                                            <table className="no_mob" width="20" border="0" cellspacing="0" cellpadding="0" bgcolor="#65606d" style={{ float: "left", textAlign: "left" }} align="left">
                                                                                <tr>
                                                                                    <td width="10" style={{ background: "#65606d", fontSize: "1px", lineHeight: "28px" }}>&nbsp;</td>
                                                                                </tr>
                                                                            </table>
                                                                            {data.grid2.map(function (text, index) {
                                                                                return (
                                                                                    <>
                                                                                        <table className="mob_table1" width="40%" border="0" cellspacing="0" cellpadding="0" bgcolor="#65606d" style={{ float: "left", textAlign: "left" }} align="left">
                                                                                            <tr>
                                                                                                <td className="mob_space" height="3" style={{ background: "#65606d", fontSize: "1px", lineHeight: "3px" }}>&nbsp;</td>
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
                                <tr style={{ backgroundColor: "#2f2f36" }}>
                                    <td style={{ backgroundColor: "#2f2f36" }} align="center"><img src={`forxiga_images/${data.image4}`} alt="main_icon_5" className="main_icon_4" style={{ backgroundColor: "#544e5c" }} /></td>
                                </tr>
                                <tr style={{ backgroundColor: "#2f2f36" }}>
                                    <td height="15" style={{ background: "#2f2f36", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                </tr>
                                <tr style={{ backgroundColor: "#2f2f36" }}>
                                    <td width="100%" style={{ backgroundColor: "#2f2f36" }}>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#2f2f36" }}>
                                            <tr>
                                                <td width="1%" style={{ backgroundColor: "#2f2f36" }}>&nbsp;</td>
                                                <td width="100%">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#2f2f36" }}>
                                                        <tr>
                                                            <td height="13" style={{ background: "#2f2f36", lineHeight: "18px", verticalAlign: "top", height: "8px", textAlign: "center" }}><a target="_blank" href={data.cta_btn_2_link}><img src={`forxiga_images/${data.cta_btn_2}`} alt="" style={{ cursor: "pointer" }} /></a></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="1%" style={{ backgroundColor: "#2f2f36" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: "#2f2f36" }}>
                                    <td height="25" style={{ background: "#2f2f36", fontSize: "1px", lineHeight: "25px" }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td height="30" style={{ background: "#fff", lineHeight: "30px", fontSize: "1px" }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td width="100%" style={{ backgroundColor: "#fff" }}>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="25" style={{ background: "#fff" }}>&nbsp;</td>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td height="13" style={{ background: "#fff", color: "#4d4d59", textAlign: "left", fontSize: "16px", lineHeight: "12px", fontWeight: "bold" }}>{data.reference_heading}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="8" style={{ background: "#fff", lineHeight: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#fff", color: "#4d4d59", textAlign: "left", fontSize: "10px", lineHeight: "12px" }}>
                                                                {data.reference_text.map(function (commonTxt, commonTxtIndex) {
                                                                    return (
                                                                        <CommonText commonTxt={commonTxt} />
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="30" style={{ background: "#fff", lineHeight: "30px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="25" style={{ background: "#fff" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: "#3b353f" }}>
                                    <td width="100%">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="100%">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td width="25">&nbsp;</td>
                                                            <td>
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <td height="25" style={{ background: "#3b353f", lineHeight: "25px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                    {data.footer_text.map(function (text, textIndex) {
                                                                        return (
                                                                            <>
                                                                                <tr>
                                                                                    <td height="13" style={{ background: "#3b353f", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "center", fontSize: "10px" }}>
                                                                                        {text.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                            return (
                                                                                                <CommonText commonTxt={commonTxt} />
                                                                                            )
                                                                                        })}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td height="5" style={{ background: "#3b353f", lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                                </tr>
                                                                            </>
                                                                        )
                                                                    })}
                                                                    <tr>
                                                                        <td height="5" style={{ background: "#3b353f", lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#3b353f", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "center", fontSize: "10px" }}><img src={`forxiga_images/${data.footer_logo}`} alt="logo" /></td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td width="25" className="mob_space">&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="25" style={{ background: "#3b353f", lineHeight: "25px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div >
        )
    }
}

export default ForxigaTemplate1;