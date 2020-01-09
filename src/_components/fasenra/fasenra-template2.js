import React from 'react';
import CommonText from '../_common/custom_text';
class FasenraTemplate2 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <tr>
                    <td width="100%">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td width="10">&nbsp;</td>
                                    <td >
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                                <tr>
                                                    <td height="15" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", color: "#000", fontSize: "12px" }}>{data.user_name && data.user_name.map(function (commonTxt, commonTxtIndex) {
                                                        return (
                                                            <CommonText commonTxt={commonTxt} />
                                                        )
                                                    })}</td>
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                                {data.user_desc && data.user_desc.map(function (user_desc, user_descIndex) {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td height="13" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#000", fontSize: "12px", textAlign: "left" }}>{user_desc.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                    return (
                                                                        <CommonText commonTxt={commonTxt} />
                                                                    )
                                                                })}</td>
                                                            </tr>
                                                            <tr>
                                                                <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </>)
                                                })}
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width="10">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                {data.template5.cta_heading &&
                    <tr>
                        <td width="100%">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                    <tr>
                                        <td width="10">&nbsp;</td>
                                        <td >
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td height="15" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td height="13" style={{ background: "#fff", lineHeight: "12px", verticalAlign: "top", height: "13px", color: "#000", fontSize: "12px", fontWeight: "bold" }}>{data.template5.cta_heading.map(function (commonTxt, commonTxtIndex) {
                                                            return (
                                                                <CommonText commonTxt={commonTxt} />
                                                            )
                                                        })}</td>
                                                    </tr>
                                                    <tr>
                                                        <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td width="10">&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                }
                {/* 
                {data.template_type === "template2" &&
                    <tr>
                        <td width="100%">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                    <tr>
                                        <td width="10" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                                        <td className="mob_table" width="96%" style={{ backgroundColor: "#fff" }}>
                                            {data.cta_image.map(function (cta, index) {
                                                return (
                                                    <>
                                                        <table align="right" className="width-mob-100 text-mob-center" width="45%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fbeae1" style={{ float: "left", textAlign: "right" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="height-mob-10" width="20%" height="15" style={{ color: "#fff", backgroundColor: "#fff", fontSize: "1px" }}>&nbsp;</td>
                                                                </tr>
                                                                <tr valign="top" align="center">
                                                                    <td width="10%" style={{ color: "#fff", backgroundColor: "#fff" }}>
                                                                        <a target="_blank" href="#">
                                                                            <img src={`images/${cta}`} alt="" height="152px" width="190px" style={{ cursor: "pointer" }} />
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {index === 0 &&
                                                            <table align="right" className="width-mob-100 text-mob-center" width="10%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fbeae1" style={{ float: "left", textAlign: "right" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="height-mob-10" width="10%" height="55" style={{ color: "#fff", backgroundColor: "#fff", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        }
                                                    </>
                                                )
                                            })}
                                        </td>
                                        <td width="10" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                }
                */}
                {data.template_type === "template2" &&
                    <tr>
                        <td height="15" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                    </tr>
                }
                {data.template5.cta_list && <>
                    <tr>
                        <td width="100%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td width="10">&nbsp;</td>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                                {data.template5.cta_list.map(function (cta, index) {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td width="12" height="10" style={{ background: "#fff", color: "#000", textAlign: "justify", fontSize: "15px", verticalAlign: "top" }}>•</td>
                                                                <td height="13" style={{ background: "#fff", color: "#000", textAlign: "left", fontSize: "10px" }}>{cta}</td>
                                                            </tr>
                                                            <tr>
                                                                <td height="3" style={{ background: "#fff", lineHeight: "3px", verticalAlign: "top", height: "3px", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </>
                                                    )
                                                })}
                                                <tr>
                                                    <td height="10" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width="10">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table></td>
                    </tr>
                    <tr>
                        <td height="25" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "25px" }}>&nbsp;</td>
                    </tr>
                </>}
                {data.template5.btn_image_name && <>
                    <tr>
                        <td width="100%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td width="1%">&nbsp;</td>
                                <td width="100%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td height="13" style={{ background: "#fff", lineHeight: "12px", verticalAlign: "top", height: "8px", textAlign: "center" }}><a rel="noopener noreferrer" target="_blank" href={data.template5.btn_link}><img src={`images/${data.template5.btn_image_name}`} alt="" style={{ cursor: "pointer" }} /></a></td>
                                    </tr>
                                </table></td>
                                <td width="1%">&nbsp;</td>
                            </tr>
                        </table></td>
                    </tr>
                    <tr>
                        <td height="25" style={{ background: "#ffffff", fontSize: "1px", lineHeight: "25px" }}>&nbsp;</td>
                    </tr>
                </>
                }
            </>
        )
    }
}

export default FasenraTemplate2;