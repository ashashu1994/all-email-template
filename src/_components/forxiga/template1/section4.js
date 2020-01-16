import React from 'react';
import CommonText from '../../_common/custom_text';
class Section4 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td width="25">&nbsp;</td>
                                <td >
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td height="30" style={{ background: "#fff", lineHeight: "30px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            {data.section4.title &&
                                                <>
                                                    <tr>
                                                        <td height="13" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", color: "#000", fontSize: "12px" }}>
                                                            {data.section4.title.map(function (commonTxt, commonTxtIndex) {
                                                                return (
                                                                    <React.Fragment key={commonTxtIndex}>
                                                                        <CommonText commonTxt={commonTxt} />
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="20" style={{ background: "#fff", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                            }
                                            {data.section4.description && data.section4.description.map(function (text, index) {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <tr>
                                                            <td height="13" style={{ background: "#fff", lineHeight: "15px", verticalAlign: "top", height: "8px", color: "#000", textAlign: "left", fontSize: "12px" }}>
                                                                {text.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                    return (
                                                                        <React.Fragment key={commonTxtIndex}>
                                                                            <CommonText commonTxt={commonTxt} />
                                                                        </React.Fragment>
                                                                    )
                                                                })}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="20" style={{ background: "#fff", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })}
                                            <tr>
                                                <td height="10" style={{ background: "#fff", lineHeight: "10px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width="25">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default Section4;