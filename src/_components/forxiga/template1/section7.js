import React from 'react';
import CommonText from '../../_common/custom_text';
class Section7 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {data.heading && data.image && <>
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
                                            {data.heading && <>
                                                <tr>
                                                    <td height="13" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "12px", fontWeight: "bold" }}>
                                                        {data.heading.map(function (commonTxt, commonTxtIndex) {
                                                            return (
                                                                <CommonText commonTxt={commonTxt} />
                                                            )
                                                        })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="20" style={{ background: "#65606d", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {data.image && <>
                                                <tr>
                                                    <td style={{ backgroundColor: "#65606d" }}><img src={`forxiga_images/${data.image}`} alt="main_icon_1" className="full-img-193" /></td>
                                                </tr>
                                                <tr>
                                                    <td height="15" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>
                                            }
                                        </table>
                                    </td>
                                    <td width="25" style={{ backgroundColor: "#65606d" }}>&nbsp;</td>
                                    <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="30" style={{ background: "#544e5c", lineHeight: "30px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                    </tr>
                </>
                }
                {
                    data.text10 &&
                    <tr>
                        <td width="100%" style={{ backgroundColor: "#544e5c" }}>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                <tr>
                                    <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                    <td >
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                            {data.text10.map(function (text, textIndex) {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td height="13" style={{ background: "#544e5c", lineHeight: "10px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "10px" }}>
                                                                {text.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                    return (
                                                                        <CommonText commonTxt={commonTxt} />
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="5" style={{ background: "#544e5c", lineHeight: "5px", verticalAlign: "top", height: "5px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </>
                                                )
                                            }
                                            )}
                                            <tr>
                                                <td height="25" style={{ background: "#544e5c", lineHeight: "25px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>

                                        </table>
                                    </td>
                                    <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                }
            </>
        )
    }
}

export default Section7;