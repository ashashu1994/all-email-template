import React from 'react';
import CommonText from '../../_common/custom_text';
class Section5_2 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#ffffff" }}>
                        <tbody>
                            <tr>
                                <td width="25" style={{ backgroundColor: "#ffffff" }}>&nbsp;</td>
                                <td >
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ backgroundColor: "#ffffff" }}>
                                        <tbody>
                                            {data.heading &&
                                                <>
                                                    <tr>
                                                        <td height="13" style={{ background: "#ffffff", lineHeight: "18px", verticalAlign: "top", height: "8px", color: "#4d4d59", fontSize: "16px" }}>
                                                            {data.heading.map(function (commonTxt, commonTxtIndex) {
                                                                return (
                                                                    <React.Fragment key={commonTxtIndex}>
                                                                        <CommonText commonTxt={commonTxt} />
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="15" style={{ background: "#ffffff", lineHeight: "15px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td height="1" style={{ background: "#e3b7b8", lineHeight: "1px", verticalAlign: "top", height: "1px", fontSize: "1px" }}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td height="20" style={{ background: "#ffffff", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                            }
                                            {data.description &&
                                                <>
                                                    <tr>
                                                        <td height="13" style={{ background: "#ffffff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#4d4d59", fontSize: "12px" }}>
                                                            {data.description.map(function (commonTxt, commonTxtIndex) {
                                                                return (
                                                                    <React.Fragment key={commonTxtIndex}>
                                                                        <CommonText commonTxt={commonTxt} />
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td height="30" style={{ background: "#ffffff", lineHeight: "30px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                            }
                                            {data.image && <>
                                                <tr>
                                                    <td style={{ backgroundColor: "#ffffff" }}><img src={`forxiga_images/${data.image}`} style={{ maxWidth: "100%" }} alt="main_icon_1" className="full-img-267" /></td>
                                                </tr>
                                                <tr>
                                                    <td height="15" style={{ background: "#ffffff", lineHeight: "15px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>
                                            }
                                            {data.smallText && <>
                                                <tr>
                                                    <td height="13" style={{ background: "#ffffff", lineHeight: "10px", verticalAlign: "top", height: "8px", color: "#4d4d59", fontSize: "10px" }}>{data.smallText}</td>
                                                </tr>
                                                <tr>
                                                    <td height="20" style={{ background: "#ffffff", lineHeight: "20px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                        </tbody>
                                    </table>
                                </td>
                                <td width="25" style={{ backgroundColor: "#ffffff" }}>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr >
        )
    }
}

export default Section5_2;