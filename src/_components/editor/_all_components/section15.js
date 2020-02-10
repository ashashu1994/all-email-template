import React from 'react';
import FS10 from './common/fs-10';
class Section15 extends React.Component {
    render() {
        const { data, marginTop, marginBottom, bgColor, textColor } = this.props;
        return (
            <tr>
                <td width="100%" style={{ background: `${bgColor ? bgColor : "#fff"}` }}>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td width="10">&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td height={marginTop ? marginTop : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginTop ? marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            {data.map(function (footer_text, footer_textIndex) {
                                                return (
                                                    <React.Fragment key={footer_textIndex}>
                                                        <tr>
                                                            <FS10
                                                                data={footer_text.multiline}
                                                                textColor={textColor}
                                                                bgColor={bgColor}
                                                            />
                                                        </tr>
                                                        <tr>
                                                            <td height="5" style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: "5px", verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })}
                                            <tr>
                                                <td height={marginBottom ? marginBottom : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginBottom ? marginBottom : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
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