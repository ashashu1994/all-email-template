import React from 'react';
import CommonText from './common/custom_text';
import FS11 from './common/fs-11';
class Section10 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor={data.bgColor ? data.bgColor : "#fff"}>
                        <tbody>
                            <tr>
                                <td width="10" bgcolor={data.bgColor ? data.bgColor : "#fff"} style={{ backgroundColor: `${data.bgColor ? data.bgColor : "#fff"}` }}>&nbsp;</td>
                                <td>
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor={data.bgColor ? data.bgColor : "#fff"}>
                                        <tbody>
                                            <tr>
                                                <td height={data.marginTop ? data.marginTop : "0px"} style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: `${data.marginTop ? data.marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                                            </tr>
                                            {data.preheader_text && <>
                                                <tr>
                                                    <FS11
                                                        data={data.preheader_text}
                                                        bgColor={data.bgColor}
                                                        textColor={data.textColor}
                                                    />
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {data.title && <>
                                                <tr>
                                                    <td height="13" style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: "20px", verticalAlign: "top", height: "8px", color: `${data.textColor ? data.textColor : "#fff"}`, fontSize: "20px", textAlign: "left" }} className="font-size-heading">
                                                        {data.title.map(function (title, titleIndex) {
                                                            return (
                                                                <React.Fragment key={titleIndex}>
                                                                    <CommonText commonTxt={title} aColor={data.textColor ? data.textColor : "#fff"} supFS={"7px"} />
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="13" style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                                                </tr>
                                            </>}
                                            {data.click_text && data.click_text.map(function (click_text, click_textIndex) {
                                                return (
                                                    <React.Fragment key={click_textIndex}>
                                                        <tr>
                                                            <td height="13" style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: "15px", verticalAlign: "top", height: "8px", color: `${data.textColor ? data.textColor : "#fff"}`, textAlign: "left", fontSize: "11px" }}>
                                                                {click_text.multiline.map(function (multiline, multilineIndex) {
                                                                    return (
                                                                        <React.Fragment key={multilineIndex}>
                                                                            <CommonText commonTxt={multiline} aColor={data.textColor ? data.textColor : "#fff"} supFS={"7px"} />
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="1" style={{ background: `${data.bgColor ? data.bgColor : "#fff"}`, lineHeight: "1px", verticalAlign: "top", height: "1px", fontSize: "1px" }}>&nbsp;</td>
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
                                <td width="10" bgcolor={data.bgColor ? data.bgColor : "#fff"} style={{ backgroundColor: `${data.bgColor ? data.bgColor : "#fff"}` }}>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr >
        )
    }
}

export default Section10;