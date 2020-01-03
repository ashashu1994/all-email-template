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
                    <td width="100%">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td height="15" style={{ color: "#fff", backgroundColor: "#fff", fontSize: "1px" }}>&nbsp;</td>
                                </tr>
                                {data.cta_block.map(function (cta, index) {
                                    return (
                                        <>
                                            <tr>
                                                <td width="10" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                                                <td style={{ backgroundColor: "#fff" }}>
                                                    <table align="right" className="width-mob-100 text-mob-center" width="30%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fbeae1" style={{ float: "left", textAlign: "right" }}>
                                                        <tbody>
                                                            <tr>
                                                                <td className="height-mob-10" width="20%" height="15" style={{ color: "#fff", backgroundColor: "#fff", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                            <tr valign="top">
                                                                <td width="10%" style={{ color: "#fff", backgroundColor: "#fff" }}><a target="_blank" href="#"><img src={`images/${cta.image_name}`} alt="" height="152px" width="190px" style={{ cursor: "pointer" }} className="text-mob-center" /></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table align="right" className="display-mob-none" width="10%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fbeae1" style={{ float: "left", textAlign: "right" }}>
                                                        <tbody>
                                                            <tr>
                                                                <td className="height-mob-10" width="10%" height="55" style={{ color: "#fff", backgroundColor: "#fff", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table className="width-mob-95" width="50%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fff" style={{ float: "left", textAlign: "left" }} align="left">
                                                        <tbody>
                                                            <tr>
                                                                <td className="height-mob-10" height="15" style={{ background: "#fff", fontSize: "1px", lineHeight: "15px" }}>&nbsp;</td>
                                                            </tr>
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
                                                                                <tr key={index1}>
                                                                                    <td width="12" height="10" style={{ background: "#fff", color: "#000", textAlign: "justify", fontSize: "15px", verticalAlign: "top" }}>•</td>
                                                                                    <td height="13" style={{ background: "#fff", color: "#000", textAlign: "left", fontSize: "10px" }}>{list}</td>
                                                                                </tr>
                                                                            )
                                                                        })}
                                                                    </tbody>
                                                                </table></td>
                                                            </tr>
                                                            <tr>
                                                                <td height="15" style={{ background: "#fff", fontSize: "1px", lineHeight: "15px" }}>&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td width="10" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="35" style={{ background: "#fff", fontSize: "1px", lineHeight: "15px" }}>&nbsp;</td>
                </tr>
                <tr>
                    <td width="100%">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
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
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="25" style={{ background: "#fff", fontSize: "1px", lineHeight: "15px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default FasenraTemplate1;