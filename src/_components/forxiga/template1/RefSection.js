import React from 'react';
import CommonText from '../../_common/custom_text';
class RefSection extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <tr>
                    <td height="30" style={{ background: "#fff", lineHeight: "30px", fontSize: "1px" }}>&nbsp;</td>
                </tr>
                <tr>
                    <td width="100%" style={{ backgroundColor: "#fff" }}>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td width="25" style={{ background: "#fff" }}>&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        {data.reference_heading && <>
                                            <tr>
                                                <td height="13" style={{ background: "#fff", color: "#4d4d59", textAlign: "left", fontSize: "16px", lineHeight: "12px", fontWeight: "bold" }}>{data.reference_heading}</td>
                                            </tr>
                                            <tr>
                                                <td height="8" style={{ background: "#fff", lineHeight: "8px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </>
                                        }
                                        {data.reference_text && data.reference_text.map(function (reference_text, reference_textIndex) {
                                            return (
                                                <>
                                                    {reference_text.multiline &&
                                                        <>
                                                            <tr>
                                                                <td height="13" style={{ background: "#fff", color: "#4d4d59", textAlign: "left", fontSize: "10px", lineHeight: "12px" }}>
                                                                    {reference_text.multiline && reference_text.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                        return (
                                                                            <CommonText commonTxt={commonTxt} />
                                                                        )
                                                                    })}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="10" style={{ background: "#fff", lineHeight: "10px", fontSize: "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </>
                                                    }
                                                </>
                                            )
                                        })}
                                    </table>
                                </td>
                                <td width="25" style={{ background: "#fff" }}>&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="20" style={{ background: "#fff", lineHeight: "20px", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default RefSection;