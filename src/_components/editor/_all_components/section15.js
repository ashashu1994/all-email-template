import React from 'react';
import CommonText from './common/custom_text';
import FS10 from './common/fs-10';
class Section15 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td width="100%">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td width="10">&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td height={data.marginTop ? data.marginTop : "0px"} style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: `${data.marginTop ? data.marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            {data.map(function (footer_text, footer_textIndex) {
                                                return (
                                                    <React.Fragment key={footer_textIndex}>
                                                        <FS10
                                                            data={footer_text.multiline}
                                                        // bgColor={data.bgColor}
                                                        // textColor={data.textColor}
                                                        />
                                                        <tr>
                                                            <td height="5" style={{ background: "#fff", lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })}
                                            <tr>
                                                <td height={data.marginBottom ? data.marginBottom : "0px"} style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: `${data.marginBottom ? data.marginBottom : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
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
        )
    }
}

export default Section15;