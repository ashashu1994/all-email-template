import React from 'react';
import CommonText from '../../_common/custom_text';
class Footer extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr style={{ backgroundColor: "#3b353f" }}>
                <td width="100%">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td width="100%">
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td width="25">&nbsp;</td>
                                                <td>
                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                        <tbody>
                                                            <tr>
                                                                <td height="25" style={{ background: "#3b353f", lineHeight: "25px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                            {data.footer_text && data.footer_text.map(function (text, textIndex) {
                                                                return (
                                                                    <React.Fragment key={textIndex}>
                                                                        <tr>
                                                                            <td height="13" style={{ background: "#3b353f", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "center", fontSize: "10px" }}>
                                                                                {text.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                    return (
                                                                                        <React.Fragment key={commonTxtIndex}>
                                                                                            <CommonText aColor="#fff" commonTxt={commonTxt} />
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td height="5" style={{ background: "#3b353f", lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                        </tr>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                            {data.footer_logo && <>
                                                                <tr>
                                                                    <td height="5" style={{ background: "#3b353f", lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="13" style={{ background: "#3b353f", lineHeight: "14px", verticalAlign: "top", height: "8px", color: "#fff", textAlign: "center", fontSize: "10px" }}><img src={`forxiga_images/${data.footer_logo}`} alt="logo" /></td>
                                                                </tr>
                                                            </>
                                                            }
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td width="25" className="width-mob-10">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td height="25" style={{ background: "#3b353f", lineHeight: "25px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default Footer;