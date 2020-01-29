import React from 'react';
import CommonText from './common/custom_text';
class Section2 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#fff">
                        <tbody>
                            <tr>
                                <td width="10" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#fff">
                                        <tbody>
                                            <tr>
                                                <td height={data.marginTop ? data.marginTop : "0px"} style={{ background: "#fff", lineHeight: `${data.marginTop ? data.marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td height="13" style={{ background: "#fff", lineHeight: "21px", verticalAlign: "top", color: "#000", fontSize: "20px", textAlign: "left" }} className="font-size-heading">
                                                    {data.text.map(function (text, textIndex) {
                                                        return (
                                                            <React.Fragment key={textIndex}>
                                                                <CommonText commonTxt={text} supFS={"10px"} />
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height={data.marginBottom ? data.marginBottom : "0px"} style={{ background: "#fff", lineHeight: `${data.marginBottom ? data.marginBottom : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width="10" bgcolor="#fff" style={{ backgroundColor: "#fff" }}>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr >
        )
    }
}

export default Section2;