import React from 'react';
import CommonText from '../../_common/custom_text';
class Section6 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {data.heading && data.image && <>
                    <tr>
                        <td width="100%">
                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#544e5c" }}>
                                <tbody>
                                    <tr>
                                        <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                        <td width="25" style={{ backgroundColor: "#65606d" }}>&nbsp;</td>
                                        <td>
                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#65606d" }}>
                                                <tbody>
                                                    <tr>
                                                        <td height="15" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                    </tr>
                                                    {data.heading && <>
                                                        <tr>
                                                            <td height="13" style={{ background: "#65606d", lineHeight: "13px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "12px", fontWeight: " bold", textAlign: "center" }}>
                                                                {data.heading.map(function (commonTxt, commonTxtIndex) {
                                                                    return (
                                                                        <React.Fragment key={commonTxtIndex}>
                                                                            <CommonText commonTxt={commonTxt} />
                                                                        </React.Fragment>
                                                                    )
                                                                })}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="20" style={{ background: "#65606d", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </>
                                                    }
                                                    {data.image && <>
                                                        <tr>
                                                            <td style={{ backgroundColor: "#65606d" }}><img src={`forxiga_images/${data.image}`} alt="main_icon_1" style={{ maxWidth: "100%" }} className="full-img-196" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style={{ background: "#65606d", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </>
                                                    }
                                                </tbody>
                                            </table>
                                        </td>
                                        <td width="25" style={{ backgroundColor: "#65606d" }}>&nbsp;</td>
                                        <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="20" style={{ background: "#544e5c", lineHeight: "20px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                    </tr>
                </>
                }
                {data.text8 &&
                    <tr>
                        <td width="100%" style={{ backgroundColor: "#544e5c" }}>
                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                <tbody>
                                    <tr>
                                        <td width="42" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                                        <td >
                                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#544e5c" }}>
                                                <tbody>
                                                    {data.text8.map(function (text1, index1) {
                                                        return (
                                                            <React.Fragment key={index1}>
                                                                <tr>
                                                                    <td height="13" style={{ background: "#544e5c", lineHeight: "13px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "10px" }}>
                                                                        {text1.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                            return (
                                                                                <React.Fragment key={commonTxtIndex}>
                                                                                    <CommonText commonTxt={commonTxt} />
                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="8" style={{ background: "#544e5c", lineHeight: "8px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                                </tr>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                    <tr>
                                                        <td height="22" style={{ background: "#544e5c", lineHeight: "22px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td width="42" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
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

export default Section6;