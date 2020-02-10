import React from 'react';
class Section35 extends React.Component {
    render() {
        const { data, marginTop, marginBottom, bgColor } = this.props;
        return (
            <>
                <tr>
                    <td height={marginTop ? marginTop : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginTop ? marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                </tr>
                <tr>
                    <td width="100%" style={{ background: `${bgColor ? bgColor : "#fff"}` }}>
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                            <tbody>
                                <tr>
                                    <td width="1%">&nbsp;</td>
                                    <td width="100%">
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                            <tbody>
                                                <tr>
                                                    <td height="13" style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: "12px", verticalAlign: "top", height: "8px", textAlign: "center" }}><a rel="noopener noreferrer" target="_blank" href={data.image_link && data.image_link}><img src={`template_images/${data.image}`} alt="" style={{ cursor: "pointer" }} /></a></td>
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
                    <td height={marginBottom ? marginBottom : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginBottom ? marginBottom : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default Section35;