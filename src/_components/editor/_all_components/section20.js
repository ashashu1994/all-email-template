import React from 'react';
class Section20 extends React.Component {
    render() {
        const { data, marginTop, marginBottom, bgColor, textColor } = this.props;
        return (
            <tr>
                <td width="100%" style={{ background: `${bgColor ? bgColor : "#fff"}` }}>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td width="10">&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td height={marginTop ? marginTop : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginTop ? marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style={{ background: `${bgColor ? bgColor : "#fff"}`, verticalAlign: "top" }}>
                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                        <tbody>
                                                            <tr>
                                                                <td height="13" style={{ background: `${bgColor ? bgColor : "#fff"}`, verticalAlign: "top", color: `${textColor ? textColor : "#fff"}`, textAlign: "left", fontSize: "10px", lineHeight: "13px" }}>
                                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td height="15" style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: "15px", verticalAlign: "top", height: "15px", color: `${textColor ? textColor : "#fff"}`, textAlign: "left", fontSize: "10px" }}>PromoMats ID: {data.promo_id && data.promo_id} </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td height="13" style={{ background: `${bgColor ? bgColor : "#fff"}`, verticalAlign: "top", color: `${textColor ? textColor : "#fff"}`, textAlign: "left", fontSize: "10px", lineHeight: "13px" }}>
                                                                                    Preparation date: {data.preparation_date && data.preparation_date} Expiry date: {data.expiry_date && data.expiry_date}
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td height="10" style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: "10px", verticalAlign: "top", height: "8px" }}>&nbsp;</td>
                                                                <td height="15" style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: "15px", verticalAlign: "top" }} align="right"><img src={`template_images/${data.logo && data.logo}`} alt="" /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height={marginBottom ? marginBottom : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginBottom ? marginBottom : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
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
        )
    }
}

export default Section20;