import React from 'react';
import CommonText from '../../_common/custom_text';
class Section6 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
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
                                        {data.text7 && <>
                                            <tr>
                                                <td height="13" style={{ background: "#65606d", lineHeight: "13px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "12px", fontWeight: " bold", textAlign: "center" }}>
                                                    {data.text7.map(function (commonTxt, commonTxtIndex) {
                                                        return (
                                                            <CommonText commonTxt={commonTxt} />
                                                        )
                                                    })}</td>
                                            </tr>
                                            <tr>
                                                <td height="20" style={{ background: "#65606d", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </>
                                        }
                                        <tr>
                                            <td style={{ backgroundColor: "#65606d" }}><img src={`forxiga_images/${data.image2}`} alt="main_icon_1" className="main_icon_2" /></td>
                                        </tr>
                                        <tr>
                                            <td height="15" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                                <td width="25" style={{ backgroundColor: "#65606d" }}>&nbsp;</td>
                                <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td width="100%" style={{ backgroundColor: "#544e5c" }}>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td width="42" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                <td >
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                        <tr>
                                            <td height="20" style={{ background: "#544e5c", lineHeight: "20px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                        </tr>
                                        {data.text8.map(function (text1, index1) {
                                            return (
                                                <>
                                                    <tr>
                                                        <td height="13" style={{ background: "#544e5c", lineHeight: "13px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "10px" }}>
                                                            {text1.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                return (
                                                                    <CommonText commonTxt={commonTxt} />
                                                                )
                                                            })}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="8" style={{ background: "#544e5c", lineHeight: "8px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                        <tr>
                                            <td height="22" style={{ background: "#544e5c", lineHeight: "22px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                                <td width="42" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </>
        )
    }
}

export default Section6;