import React from 'react';
import CommonText from '../../_common/custom_text';
class Footer extends React.Component {
    render() {
        const { content } = this.props;
        return (
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
                                                            {content.footer_text && content.footer_text.map(function (footer_text, footer_textIndex) {
                                                                return (
                                                                    <React.Fragment key={footer_textIndex}>
                                                                        <tr>
                                                                            <td height="13" style={{ background: "#fff", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "10px" }}>
                                                                                {footer_text.multiline.map(function (multiline, multilineIndex) {
                                                                                    return (
                                                                                        <React.Fragment key={multilineIndex}>
                                                                                            <CommonText commonTxt={multiline} />
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
                                                            {content.copyright_logo && <>
                                                                {content.copyright_logo.promo_id &&
                                                                    <tr>
                                                                        <td height="15" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "15px", color: "#000", textAlign: "left", fontSize: "10px" }}>PromoMats ID: {content.copyright_logo.promo_id} </td>
                                                                    </tr>
                                                                }
                                                                <tr>
                                                                    <td style={{ background: "#fff", verticalAlign: "top" }}>
                                                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td height="13" style={{ background: "#fff", verticalAlign: "top", color: "#000", textAlign: "left", fontSize: "10px", lineHeight: "13px" }}>Preparation date: {content.copyright_logo.preparation_date && content.copyright_logo.preparation_date} Expiry date: {content.copyright_logo.expiry_date && content.copyright_logo.expiry_date}</td>
                                                                                    <td height="10" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px" }}>&nbsp;</td>
                                                                                    <td height="15" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top" }} align="right"><img src={`symbicort_images/${content.copyright_logo.logo && content.copyright_logo.logo}`} alt="" /></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
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
                                <td height="10" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default Footer;