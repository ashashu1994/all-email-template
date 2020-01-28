import React from 'react';
import CommonText from '../../_common/custom_text';
class Section10 extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                <tr>
                    <td width="100%">
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                            <tbody>
                                <tr>
                                    <td width="10">&nbsp;</td>
                                    <td>
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ border: "1px solid #0b4e75" }}>
                                            <tbody>
                                                {content.heading &&
                                                    <tr>
                                                        <td>
                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#0b4e75" bordercolor="#0b4e75">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="15" style={{ lineHeight: "10px" }}>&nbsp;</td>
                                                                        <td>
                                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#0b4e75" bordercolor="#67116f">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td height="5" style={{ background: "#0b4e75", lineHeight: "5px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td style={{ background: "#0b4e75", color: "#ffffff", fontSize: "14px", lineHeight: "15px", fontWeight: "bold", textAlign: "left" }}>
                                                                                            {content.heading.map(function (commonTxt, commonTxtIndex) {
                                                                                                return (
                                                                                                    <React.Fragment key={commonTxtIndex}>
                                                                                                        <CommonText commonTxt={commonTxt} />
                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })}
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td height="11" style={{ background: "#0b4e75", lineHeight: "11px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td width="15" style={{ background: "#0b4e75", fontSize: "1px" }}>&nbsp;</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                }
                                                {content.paragraph && content.paragraph.map(function (paragraph, paragraphIndex) {
                                                    return (
                                                        <React.Fragment key={paragraphIndex}>
                                                            <tr>
                                                                <td height="10" style={{ background: "#f8f8f8", fontSize: "1px", lineHeight: "10px" }}>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" style={{ background: "#f8f8f8", color: "#0b4e75", fontSize: "12px", fontWeight: "bold" }}>
                                                                    {paragraph.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                        return (
                                                                            <React.Fragment key={commonTxtIndex}>
                                                                                <CommonText commonTxt={commonTxt} />
                                                                            </React.Fragment>
                                                                        )
                                                                    })}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="10" style={{ background: "#f8f8f8", fontSize: "1px", lineHeight: "10px" }}>&nbsp;</td>
                                                            </tr>
                                                        </React.Fragment>
                                                    )
                                                })}
                                                {content.image && (content.image.desktop_img && content.image.mob_img) ?
                                                    <>
                                                        <tr>
                                                            <td width="100%" valign="top" align="center" className="display-mob-none" style={{ background: "#f8f8f8" }}><img src="lynparza_images/main_img.png" alt="main" width="550px" style={{ display: "block" }} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td width="100%" valign="top" align="center" className="mobshow" lang="x-mobshow" style={{ width: "0", maxHeight: "0", overflow: "hidden", float: "left", display: "none", background: "#f8f8f8" }}><img src="lynparza_images/mob_main_img.png" alt="main" width="286px" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style={{ background: "#f8f8f8", lineHeight: "15px", verticalAlign: "top", height: "5px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </>
                                                    :
                                                    <>
                                                        <tr>
                                                            <td width="100%" valign="top" align="center" style={{ background: "#f8f8f8" }}><img src="lynparza_images/main_img.png" alt="main" style={{ maxWidth: "96%" }} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style={{ background: "#f8f8f8", lineHeight: "15px", verticalAlign: "top", height: "5px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </>
                                                }
                                                {content.bullet_list &&
                                                    <tr>
                                                        <td width="100%">
                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ background: "#f8f8f8" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="10">&nbsp;</td>
                                                                        <td>
                                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ lineHeight: "14px" }}>
                                                                                <tbody>
                                                                                    {content.bullet_list && content.bullet_list.map(function (bullet_list, bullet_listIndex) {
                                                                                        return (
                                                                                            <React.Fragment key={bullet_listIndex}>
                                                                                                <tr>
                                                                                                    <td width="10" height="10" align="top" style={{ background: "#f8f8f8", color: "#000", textAlign: "justify", fontSize: "12px", verticalAlign: "top" }}>•</td>
                                                                                                    <td height="13" style={{ background: "#f8f8f8", color: "#000", textAlign: "left", fontSize: "12px" }}>
                                                                                                        {bullet_list.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                            return (
                                                                                                                <React.Fragment key={commonTxtIndex}>
                                                                                                                    <CommonText commonTxt={commonTxt} />
                                                                                                                </React.Fragment>
                                                                                                            )
                                                                                                        })}
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td height="5" style={{ background: "#f8f8f8", fontSize: "1px" }}></td>
                                                                                                </tr>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })}
                                                                                    <tr>
                                                                                        <td height="10" style={{ background: "#f8f8f8", fontSize: "1px" }}></td>
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
                                                {content.full_cta && <>
                                                    <tr>
                                                        <td width="100%">
                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ background: "#f8f8f8" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="1%">&nbsp;</td>
                                                                        <td width="100%">
                                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td height="13" style={{ background: "#f8f8f8", lineHeight: "18px", verticalAlign: "top", height: "8px", textAlign: "center" }}><a rel="noopener noreferrer" target="_blank" href={content.full_cta_link ? content.full_cta_link : "#"}><img src={`lynparza_images/${content.full_cta && content.full_cta}`} alt="" style={{ cursor: "pointer" }} /></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td width="1%">&nbsp;</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="10" style={{ background: "#f8f8f8", fontSize: "1px", lineHeight: "10px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                                }
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width="10">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="20" style={{ background: "#ffffff", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default Section10;