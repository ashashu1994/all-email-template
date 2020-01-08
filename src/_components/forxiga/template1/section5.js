import React from 'react';
import CommonText from '../../_common/custom_text';
class Section5 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                        <tr>
                            <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                            <td >
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ backgroundColor: "#544e5c" }}>
                                    {data.heading &&
                                        <>
                                            <tr>
                                                <td height="13" style={{ background: "#544e5c", lineHeight: "18px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "16px" }}>
                                                    {data.heading.map(function (commonTxt, commonTxtIndex) {
                                                        return (
                                                            <CommonText commonTxt={commonTxt} />
                                                        )
                                                    })}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="15" style={{ background: "#544e5c", lineHeight: "15px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td height="1" style={{ background: "#e3b7b8", lineHeight: "1px", verticalAlign: "top", height: "1px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td height="20" style={{ background: "#544e5c", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </>
                                    }
                                    {data.description &&
                                        <>
                                            <tr>
                                                <td height="13" style={{ background: "#544e5c", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "12px" }}>
                                                    {data.description.map(function (commonTxt, commonTxtIndex) {
                                                        return (
                                                            <CommonText commonTxt={commonTxt} />
                                                        )
                                                    })}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td height="30" style={{ background: "#544e5c", lineHeight: "30px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </>
                                    }
                                    {data.image && <>
                                        <tr>
                                            <td style={{ backgroundColor: "#544e5c" }}><img src={`forxiga_images/${data.image}`} alt="main_icon_1" className="full-img-267" /></td>
                                        </tr>
                                        <tr>
                                            <td height="15" style={{ background: "#544e5c", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                        </tr>
                                    </>
                                    }
                                    {data.smallText && <>
                                        <tr>
                                            <td height="13" style={{ background: "#544e5c", lineHeight: "10px", verticalAlign: "top", height: "8px", color: "#fff", fontSize: "10px" }}>{data.smallText}</td>
                                        </tr>
                                        <tr>
                                            <td height="20" style={{ background: "#544e5c", lineHeight: "20px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                        </tr>
                                    </>}
                                </table>
                            </td>
                            <td width="25" style={{ backgroundColor: "#544e5c" }}>&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr >
        )
    }
}

export default Section5;