import React from 'react';
class ForxigaTemplate1 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div style={{ "width": "100%", "border": "0px", "padding": "0px", "margin": "0px" }}>
                <table id="main_table" width="598" border="0" cellpadding="0" cellspacing="0" style={{ "border": "1px solid #343434", "color": "#000", "textAlign": "left", "verticalAlign": "top", "margin": "0 auto" }} align="center">
                    <tr>
                        <td>
                            <table id="main_table1" width="598" border="0" cellpadding="0" cellspacing="0" style={{ color: "#000", textAlign: "left", verticalAlign: "top", margin: "0 auto" }} align="center">
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
                                                                {data.preheader_text.map(function (text, index) {
                                                                    return (
                                                                        <>
                                                                            {(text.includes("<sup>")) ? <sup style={{ fontSize: "8px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sup>', '')}</sup> :
                                                                                (text.includes("<sub>")) ?
                                                                                    <sub style={{ fontSize: "8px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sub>', '')}</sub> :
                                                                                    (text.includes("<a>")) ?
                                                                                        <a href={text.substring(
                                                                                            text.indexOf("<a>") + 3,
                                                                                            text.indexOf("</a>")
                                                                                        )} style={{ color: "#fff" }}>{text.replace(text.substring(
                                                                                            text.indexOf("<a>"),
                                                                                            text.indexOf("</a>") + 4), '')}</a> : text
                                                                            }
                                                                        </>
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style={{ background: "#544e5c", lineHeight: "15px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>

                                                    </table>
                                                </td>
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr style={{ lineHeight: "0px" }}>
                                    <td><img src={`forxiga_images/${data.hero_img}`} alt="main" className="full-img" /></td>
                                </tr>
                                <tr style={{ backgroundColor: "#544e5c" }}>
                                    <td width="100%" style={{ backgroundColor: "#544e5c" }}>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
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
                                                                                        {data.text1.map(function (text, index) {
                                                                                            return (
                                                                                                <>
                                                                                                    {(text.includes("<sup>")) ? <sup style={{ fontSize: "8px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sup>', '')}</sup> :
                                                                                                        (text.includes("<sub>")) ?
                                                                                                            <sub style={{ fontSize: "8px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sub>', '')}</sub> :
                                                                                                            (text.includes("<a>")) ?
                                                                                                                <a href={text.substring(
                                                                                                                    text.indexOf("<a>") + 3,
                                                                                                                    text.indexOf("</a>")
                                                                                                                )} style={{ color: "#fff" }}>{text.replace(text.substring(
                                                                                                                    text.indexOf("<a>"),
                                                                                                                    text.indexOf("</a>") + 4), '')}</a> : text
                                                                                                    }
                                                                                                </>
                                                                                            )
                                                                                        })}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="10" style={{ backgroundColor: "#544e5c", fontSize: "1px", lineHeight: "10px" }}>&nbsp;</td>
                                                                                </tr>
                                                                                <tr style={{ backgroundColor: "#544e5c" }} className="mob_txt">
                                                                                    <td height="13" style={{ backgroundColor: "#544e5c", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "left", fontSize: "14px", textDecoration: "none", padding: "0px", margin: "0px" }}>
                                                                                        {data.text2.map(function (text, index) {
                                                                                            return (
                                                                                                <>
                                                                                                    {(text.includes("<sup>")) ? <sup style={{ fontSize: "7px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sup>', '')}</sup> :
                                                                                                        (text.includes("<sub>")) ?
                                                                                                            <sub style={{ fontSize: "7px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sub>', '')}</sub> :
                                                                                                            (text.includes("<a>")) ?
                                                                                                                <a href={text.substring(
                                                                                                                    text.indexOf("<a>") + 3,
                                                                                                                    text.indexOf("</a>")
                                                                                                                )} style={{ color: "#fff" }}>{text.replace(text.substring(
                                                                                                                    text.indexOf("<a>"),
                                                                                                                    text.indexOf("</a>") + 4), '')}</a> : text
                                                                                                    }
                                                                                                </>
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
                                                                                    <td align="center" width="10%" height="5" style={{ color: "#fff", fontSize: "12px", lineHeight: "14px", backgroundColor: "#544e5c" }}><a target="_blank" href={data.cta_btn_1_link}><img src={`forxiga_images/${data.cta_btn_1}`} alt="" height="49px" width="215px" style={{ cursor: "pointer" }} /></a>
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
                                        </table>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: "#544e5c" }}>
                                    <td style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td width="100%">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="25">&nbsp;</td>
                                                <td >
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td height="30" style={{ background: "#fff", lineHeight: "30px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", color: "#000", fontSize: "12px" }}>
                                                                {data.text3.map(function (text, index) {
                                                                    return (
                                                                        <>
                                                                            {(text.includes("<sup>")) ? <sup style={{ fontSize: "7px", lineHeight: "0px", color: "#000" }}>{text.replace('<sup>', '')}</sup> :
                                                                                (text.includes("<sub>")) ?
                                                                                    <sub style={{ fontSize: "7px", lineHeight: "0px", color: "#000" }}>{text.replace('<sub>', '')}</sub> :
                                                                                    (text.includes("<a>")) ?
                                                                                        <a href={text.substring(
                                                                                            text.indexOf("<a>") + 3,
                                                                                            text.indexOf("</a>")
                                                                                        )} style={{ color: "#000" }}>{text.replace(text.substring(
                                                                                            text.indexOf("<a>"),
                                                                                            text.indexOf("</a>") + 4), '')}</a> : text
                                                                            }
                                                                        </>
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="20" style={{ background: "#fff", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "12px" }}>
                                                                {data.text4.map(function (text, index) {
                                                                    return (
                                                                        <>
                                                                            {(text.includes("<sup>")) ? <sup style={{ fontSize: "7px", lineHeight: "0px", color: "#000" }}>{text.replace('<sup>', '')}</sup> :
                                                                                (text.includes("<sub>")) ?
                                                                                    <sub style={{ fontSize: "7px", lineHeight: "0px", color: "#000" }}>{text.replace('<sub>', '')}</sub> :
                                                                                    (text.includes("<a>")) ?
                                                                                        <a href={text.substring(
                                                                                            text.indexOf("<a>") + 3,
                                                                                            text.indexOf("</a>")
                                                                                        )} style={{ color: "#000" }}>{text.replace(text.substring(
                                                                                            text.indexOf("<a>"),
                                                                                            text.indexOf("</a>") + 4), '')}</a> : text
                                                                            }
                                                                        </>
                                                                    )
                                                                })}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="30" style={{ background: "#fff", lineHeight: "30px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="25">&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="100%">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                            <tr>
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                                <td >
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                                        <tr>
                                                            <td height="30" style={{ background: "#544e5c", lineHeight: "30px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#544e5c", lineHeight: "18px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "16px" }}>
                                                                {data.text5.map(function (text, index) {
                                                                    return (
                                                                        <>
                                                                            {(text.includes("<sup>")) ? <sup style={{ fontSize: "10px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sup>', '')}</sup> :
                                                                                (text.includes("<sub>")) ?
                                                                                    <sub style={{ fontSize: "10px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sub>', '')}</sub> :
                                                                                    (text.includes("<a>")) ?
                                                                                        <a href={text.substring(
                                                                                            text.indexOf("<a>") + 3,
                                                                                            text.indexOf("</a>")
                                                                                        )} style={{ color: "#fff" }}>{text.replace(text.substring(
                                                                                            text.indexOf("<a>"),
                                                                                            text.indexOf("</a>") + 4), '')}</a> : text
                                                                            }
                                                                        </>
                                                                    )
                                                                })}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style={{ background: "#544e5c", lineHeight: "15px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="1" style={{ background: "#e3b7b8", lineHeight: "1px", verticalAlign: "top", height: "1px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="20" style={{ background: "#544e5c", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#544e5c", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "12px" }}>
                                                                {data.text6.map(function (text, index) {
                                                                    return (
                                                                        <>
                                                                            {(text.includes("<sup>")) ? <sup style={{ fontSize: "7px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sup>', '')}</sup> :
                                                                                (text.includes("<sub>")) ?
                                                                                    <sub style={{ fontSize: "7px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sub>', '')}</sub> :
                                                                                    (text.includes("<a>")) ?
                                                                                        <a href={text.substring(
                                                                                            text.indexOf("<a>") + 3,
                                                                                            text.indexOf("</a>")
                                                                                        )} style={{ color: "#fff" }}>{text.replace(text.substring(
                                                                                            text.indexOf("<a>"),
                                                                                            text.indexOf("</a>") + 4), '')}</a> : text
                                                                            }
                                                                        </>
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="30" style={{ background: "#544e5c", lineHeight: "30px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ backgroundColor: "#544e5c" }}><img src={`forxiga_images/${data.image1}`} alt="main_icon_1" className="main_icon_1" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style={{ background: "#544e5c", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#544e5c", lineHeight: "10px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "10px" }}>{data.smallText}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="20" style={{ background: "#544e5c", lineHeight: "20px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="100%">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                            <tr>
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                                <td width="25" style={{ backgroundColor: "#65606d" }}>&nbsp;</td>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#65606d" }}>
                                                        <tr>
                                                            <td height="15" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#65606d", lineHeight: "13px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "12px", fontWeight: " bold", textAlign: "center" }}>{data.text7.map(function (text, index) {
                                                                return (
                                                                    <>
                                                                        {(text.includes("<sup>")) ? <sup style={{ fontSize: "7px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sup>', '')}</sup> :
                                                                            (text.includes("<sub>")) ?
                                                                                <sub style={{ fontSize: "7px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sub>', '')}</sub> :
                                                                                (text.includes("<a>")) ?
                                                                                    <a href={text.substring(
                                                                                        text.indexOf("<a>") + 3,
                                                                                        text.indexOf("</a>")
                                                                                    )} style={{ color: "#fff" }}>{text.replace(text.substring(
                                                                                        text.indexOf("<a>"),
                                                                                        text.indexOf("</a>") + 4), '')}</a> : text
                                                                        }
                                                                    </>
                                                                )
                                                            })}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="20" style={{ background: "#65606d", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ backgroundColor: "#65606d" }}><img src={`forxiga_images/${data.image2}`} alt="main_icon_1" className="main_icon_2" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="25" style={{ backgroundColor: "#65606d" }}>&nbsp;</td>
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="100%" style={{ backgroundColor: "#544e5c" }}>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="42" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                                <td >
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                                        <tr>
                                                            <td height="20" style={{ background: "#544e5c", lineHeight: "20px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        {data.text8.map(function (text1, index1) {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#544e5c", lineHeight: "13px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "10px" }}>
                                                                            {text1.multiline.map(function (text, index) {
                                                                                return (
                                                                                    <>
                                                                                        {(text.includes("<sup>")) ? <sup style={{ fontSize: "6px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sup>', '')}</sup> :
                                                                                            (text.includes("<sub>")) ?
                                                                                                <sub style={{ fontSize: "6px", lineHeight: "0px", color: "#fff" }}>{text.replace('<sub>', '')}</sub> :
                                                                                                (text.includes("<a>")) ?
                                                                                                    <a href={text.substring(
                                                                                                        text.indexOf("<a>") + 3,
                                                                                                        text.indexOf("</a>")
                                                                                                    )} style={{ color: "#fff" }}>{text.replace(text.substring(
                                                                                                        text.indexOf("<a>"),
                                                                                                        text.indexOf("</a>") + 4), '')}</a> : text
                                                                                        }
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="8" style={{ background: "#544e5c", lineHeight: "8px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })}
                                                        <tr>
                                                            <td height="22" style={{ background: "#544e5c", lineHeight: "22px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="42" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="100%">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                            <tr>
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                                <td width="25" style={{ backgroundColor: "#65606d" }}>&nbsp;</td>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#65606d" }}>
                                                        <tr>
                                                            <td height="15" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "12px", fontWeight: "bold" }}>In a real-world study<sup style={{ fontSize: "7px", lineHeight: "0px", color: "#fff" }}>‡</sup>, HF and/or CKD was the <span style={{ color: "#e6b7ba" }}>most common</span> early CV complication in T2D patients – higher than stroke and MI.<sup style={{ fontSize: "7px", lineHeight: "0px", color: "#fff" }}>5</sup>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="20" style={{ background: "#65606d", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ backgroundColor: "#65606d" }}><img src="forxiga_images/main_icon_3.png" alt="main_icon_1" className="main_icon_3" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="25" style={{ backgroundColor: "#65606d" }}>&nbsp;</td>
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="100%" style={{ backgroundColor: "#544e5c" }}>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                            <tr>
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                                <td >
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                                        <tr>
                                                            <td height="30" style={{ background: "#544e5c", lineHeight: "30px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#544e5c", lineHeight: "10px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "10px" }}>PAD = peripheral arterial disease</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="5" style={{ background: "#544e5c", lineHeight: "5px", verticalAlign: "top", height: "5px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#544e5c", lineHeight: "12px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "10px" }}><sup style={{ fontSize: "6px", lineHeight: "0px", color: "#fff" }}>‡</sup>Real-world evidence taken from cohorts of patients from Germany, Japan, Norway and Sweden.</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="30" style={{ background: "#544e5c", lineHeight: "30px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>

                                                    </table>
                                                </td>
                                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
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
                                                            <td height="13" style={{ background: "#3b353f", lineHeight: "16px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "16px" }}>TREATMENT GUIDELINES ARE EVOLVING</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="2" style={{ background: "#3b353f", lineHeight: "2px", verticalAlign: "top", height: "2px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#3b353f", lineHeight: "16px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "16px" }}>TO CONSIDER HOLISTIC MANAGEMENT OF T2D</td>
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
                                                                            <table className="mob_table1" width="40%" border="0" cellspacing="0" cellpadding="0" bgcolor="#65606d" style={{ float: "left", textAlign: "left" }} align="left">
                                                                                <tr>
                                                                                    <td className="mob_space" height="3" style={{ background: "#65606d", fontSize: "1px", lineHeight: "3px" }}>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="35%" height="20" style={{ color: "#e6b7ba", fontSize: "16px" }}>
                                                                                        EASD/ADA GUIDELINE
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="5" style={{ background: "#65606d", fontSize: "1px", lineHeight: "5px" }}>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="40%" height="20" style={{ color: "#fff", fontSize: "12px", lineHeight: "14px" }}>The new EASD/ADA guidelines recognise the importance of managing the risk of cardiac and renal damage in patients with T2D<sup style={{ fontSize: "7px", lineHeight: "0px", color: "#fff" }}>6</sup>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <table width="40" border="0" cellspacing="0" cellpadding="0" bgcolor="#65606d" style={{ float: "left", textAlign: "left" }} align="left">
                                                                                <tr>
                                                                                    <td width="20" style={{ background: "#65606d", fontSize: "1px", lineHeight: "28px" }}>&nbsp;</td>
                                                                                </tr>
                                                                            </table>
                                                                            <table className="mob_table1" width="43%" border="0" cellspacing="0" cellpadding="0" bgcolor="#65606d" style={{ float: "left", textAlign: "left" }} align="left">
                                                                                <tr>
                                                                                    <td className="mob_space" height="3" style={{ background: "#65606d", fontSize: "1px", lineHeight: "3px" }}>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="50%" height="20" style={{ color: "#fff", fontSize: "16px" }}>
                                                                                        ACC/AHA GUIDELINE
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="5" style={{ background: "#65606d", fontSize: "1px", lineHeight: "5px" }}>&nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="48%" height="5" style={{ color: "#fff", fontSize: "12px", lineHeight: "14px", background: "#65606d" }}>The 2019 ACC/AHA guidelines for primary prevention of CV risk recommend a management approach that addresses CV risk factors in patients with T2D<sup style={{ fontSize: "7px", lineHeight: "0px", color: "#fff" }}>7</sup>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>

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
                                    <td style={{ backgroundColor: "#2f2f36" }} align="center"><img src="forxiga_images/main_icon_4.png" alt="main_icon_5" className="main_icon_4" style={{ backgroundColor: "#544e5c" }} /></td>
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
                                                            <td height="13" style={{ background: "#2f2f36", lineHeight: "18px", verticalAlign: "top", height: "8px", textAlign: "center" }}><a target="_blank" href="#"><img src="forxiga_images/cta_2.png" alt="" style={{ cursor: "pointer" }} /></a></td>
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
                                                            <td height="13" style={{ background: "#fff", color: "#4d4d59", textAlign: "left", fontSize: "16px", lineHeight: "12px", fontWeight: "bold" }}>References</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="8" style={{ background: "#fff", lineHeight: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="13" style={{ background: "#fff", color: "#4d4d59", textAlign: "left", fontSize: "10px", lineHeight: "12px" }}><b>1.</b> Ronco C, et al. <i>J Am Coll Cardiol</i>. 2008&zwnj;;&zwnj; 52(19)&zwnj;:&zwnj;1527&zwnj;-&zwnj;1539. <b>2.</b> Huang Y, et al. <i>Br Med J</i>. 2016&zwnj;;&zwnj; 355&zwnj;:&zwnj; i5953. <b>3.</b> Echouffo&zwnj;-&zwnj;Tcheugui JB, et al. <i>Diabet Med</i>. 2016;33(12)&zwnj;:&zwnj;1615&zwnj;-&zwnj;1624. <b>4.</b> Faden G, et al. <i>Diabetes Res Clin Pract</i>. 2013&zwnj;;&zwnj;101(3)&zwnj;:&zwnj;309&zwnj;-&zwnj;316. <b>5.</b> Birkeland KI et al. Poster presented at the 7&zwnj;9&zwnj;th American Diabetes Association's Scientific Sessions; 20&zwnj;1&zwnj;9&zwnj;; June &zwnj;7&zwnj;-&zwnj;11&zwnj;; San Francisco, CA, US. <b>6.</b> Davies MJ, et al. <i>Diabetologica</i>. 2018; 51(12)&zwnj;:&zwnj;2461&zwnj;-&zwnj;2498. <b>7.</b> Arnett DK, et al. <i>J Am Coll Cardiol</i>. 2019.</td>
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
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#3b353f", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "center", fontSize: "10px" }}>If you would no longer like to receive these e-mails, please click <a target="_blank" href="#"><span style={{ color: "#fff", textDecoration: "underline", cursor: "pointer" }}> unsubscribe</span></a>.</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="5" style={{ background: "#3b353f", lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#3b353f", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "center", fontSize: "10px" }}>In accordance with AstraZeneca policy, all promotional material must be developed in association with, and approved for release by local nominated signatory.</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="5" style={{ background: "#3b353f", lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#3b353f", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "center", fontSize: "10px" }}>&copy;2019 AstraZeneca. All rights reserved.</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="5" style={{ background: "#3b353f", lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#3b353f", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "center", fontSize: "10px" }}>PromoMats ID: Z4-20039 &nbsp;&nbsp;Preparation date: 11 2019  &nbsp;&nbsp;Expiry date: 11 2020</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="10" style={{ background: "#3b353f", lineHeight: "10px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="13" style={{ background: "#3b353f", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "center", fontSize: "10px" }}><img src="forxiga_images/az_logo.png" alt="logo" /></td>
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