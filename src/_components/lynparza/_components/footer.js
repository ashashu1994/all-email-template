import React from 'react';
import CommonText from '../../_common/custom_text';
class Footer extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                {content.footer.paragraph &&
                    <tr>
                        <td width="100%">
                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                <tbody>
                                    <tr>
                                        <td width="100%">
                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td width="10">&nbsp;</td>
                                                        <td>
                                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    {content.footer.paragraph.map(function (paragraph, paragraphIndex) {
                                                                        return (
                                                                            <React.Fragment key={paragraphIndex}>
                                                                                <tr>
                                                                                    <td height="13" style={{ background: "#fff", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "10px" }}>
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
                                                                                    <td height="5" style={{ background: "#fff", lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                                </tr>
                                                                            </React.Fragment>
                                                                        )
                                                                    })}
                                                                    <tr>
                                                                        <td height="15" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
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
                                </tbody>
                            </table>
                        </td>
                    </tr>
                }
                {content.footer.copyright_logo &&
                    <tr>
                        <td width="100%">
                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                <tbody>
                                    <tr>
                                        <td width="90%" bgcolor="#004d74">
                                            <table width="72%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#004d74" style={{ float: "left", textAlign: "left" }} align="left" className="width-mob-100">
                                                <tbody>
                                                    <tr>
                                                        <td height="5" width="5"></td>
                                                        <td width="98%" height="15" className="height-mob-0"></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="10"></td>
                                                        <td width="20%" height="10" style={{ color: "#fff", fontSize: "10px" }}>
                                                            ©{content.footer.copyright_logo.year} {content.footer.copyright_logo.company}. All rights reserved. PromoMats ID: {content.footer.copyright_logo.promo_id}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="10" height="3"></td>
                                                        <td width="10" height="3"></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="10"></td>
                                                        <td width="48%" height="13" style={{ color: "#fff", fontSize: "10px", lineHeight: "13px" }}>Preparation date: {content.footer.copyright_logo.preparation_date} Expiry date: {content.footer.copyright_logo.expiry_date}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="10" height="3"></td>
                                                        <td width="10" height="3"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table width="1%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#004d74" style={{ float: "left", textAlign: "left" }} align="left">
                                                <tbody>
                                                    <tr>
                                                        <td width="1%" height="5"></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="1%" height="5"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table width="25%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#004d74" style={{ float: "left", textAlign: "left" }} align="right">
                                                <tbody>
                                                    <tr>
                                                        <td width="98%" height="5" className="height-mob-0"></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="98%" height="9" className="height-mob-0"></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="right" width="1%" height="5" style={{ color: "#fff", fontSize: "12.5px", lineHeight: "20px" }}><img src={`lynparza_images/${content.footer.copyright_logo.logo}`} alt="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td height="13" width="5" className="height-mob-0"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                }
            </>
        )
    }
}

export default Footer;