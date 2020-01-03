import React from 'react';
class FasenraTemplate1 extends React.Component {
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
                                                    <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", color: "#000", fontSize: "12px" }}>{data.user_name}</td>
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#000", fontSize: "12px", textAlign: "left" }}>{data.user_desc}</td>
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
                <tr>
                    <td width="100%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td height="15" style={{ color: "#fff", backgroundColor: "#fff", fontSize: "1px" }}>&nbsp;</td>
                            </tr>
                            {data.cta_block.map(function (cta, index) {
                                return (
                                    <>
                                        <tr>
                                            <td width="10">&nbsp;</td>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr valign="top">
                                                            <td width="43%" style={{ color: "#fff", backgroundColor: "#fff" }}>
                                                                <a target="_blank" rel="noopener noreferrer" href="http://www.google.com"><img src="images/icon_1.png" alt="" height="152px" width="190px" style={{ cursor: "pointer" }} class="image1" /></a>
                                                            </td>
                                                            <td width="49%" style={{ color: "#fff", backgroundColor: "#fff" }}>
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td height="13" style={{ background: "#fff", lineHeight: "16px", verticalAlign: "top", height: "8px", color: "#000", fontSize: "11px", textAlign: "left", fontWeight: "bold" }}>{cta.heading}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ lineHeight: "14px", backgroundColor: "#fff" }}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td height="5" style={{ background: "#fff", fontSize: "1px" }}></td>
                                                                                    </tr>
                                                                                    {cta.list.map(function (list, index1) {
                                                                                        return (
                                                                                            <tr>
                                                                                                <td width="12" height="10" style={{ background: "#fff", color: "#000", textAlign: "justify", fontSize: "15px", verticalAlign: "top" }}>•</td>
                                                                                                <td height="13" style={{ background: "#fff", color: "#000", textAlign: "left", fontSize: "10px" }}>{list}</td>
                                                                                            </tr>
                                                                                        )
                                                                                    })}
                                                                                </tbody>
                                                                            </table></td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td width="8%" style={{ color: "#fff", backgroundColor: "#fff" }}>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td width="10" bgcolor="#fff" style={{ background: "#fff" }}>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="15" style={{ background: "#fff", fontSize: "1px", lineHeight: "15px" }}>&nbsp;</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                    </td>
                </tr>
                <tr>
                    <td width="100%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td width="1%">&nbsp;</td>
                                <td width="100%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td height="13" style={{ background: "#fff", lineHeight: "12px", verticalAlign: "top", height: "8px", textAlign: "center" }}>
                                            <a rel="noopener noreferrer" target="_blank" href={data.btn_link}>
                                                <img src={`images/${data.btn_image_name}`} alt="" style={{ cursor: "pointer" }} />
                                            </a>
                                        </td>
                                    </tr>
                                </table></td>
                                <td width="1%">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table></td>
                </tr>
            </>
        )
    }
}

export default FasenraTemplate1;