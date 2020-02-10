import React from 'react';
import CommonText from './common/custom_text';
class Section30 extends React.Component {
    render() {
        const { data, marginTop, marginBottom, bgColor, textColor } = this.props;
        return (
            <>
                <tr>
                    <td height={marginTop ? marginTop : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginTop ? marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                </tr>
                {data.map(function (blue_links, blue_linksIndex) {
                    return (
                        <React.Fragment key={blue_linksIndex}>
                            {blue_links.blue_links_length &&
                                <tr>
                                    <td width="100%" style={{ background: `${bgColor ? bgColor : "#fff"}` }}>
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                            <tbody>
                                                <tr>
                                                    <td width="100%" bgcolor={bgColor ? bgColor : "#fff"}>
                                                        {(blue_links.blue_links_length.length === 1) ?
                                                            <>
                                                                {blue_links.blue_links_length.map(function (blue_links_length, blue_links_lengthindex) {
                                                                    return (
                                                                        <table key={blue_links_lengthindex} width="50%" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"} style={{ "float": "left", "textAlign": "left" }} align="left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="1%">&nbsp;</td>
                                                                                    <td width="48%">&nbsp;</td>
                                                                                </tr>
                                                                                {blue_links_length.links.map(function (links, index) {
                                                                                    return (
                                                                                        <tr key={index}>
                                                                                            <td width="2%"></td>
                                                                                            <td width="48%" height="20" style={{ "color": `${textColor ? textColor : "#fff"}`, "fontSize": "12px" }}>
                                                                                                <span style={{ "color": `${textColor ? textColor : "#fff"}` }} className="font-size-mob-9">
                                                                                                    {links.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                        return (
                                                                                                            <React.Fragment key={commonTxtIndex}>
                                                                                                                <CommonText commonTxt={commonTxt}
                                                                                                                    aColor={textColor ? textColor : "#fff"}
                                                                                                                    supFS={"7px"}
                                                                                                                />
                                                                                                            </React.Fragment>
                                                                                                        )
                                                                                                    })}
                                                                                                </span>
                                                                                            </td>
                                                                                        </tr>
                                                                                    )
                                                                                })}
                                                                                <tr>
                                                                                    <td width="1%">&nbsp;</td>
                                                                                    <td width="48%">&nbsp;</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    )
                                                                })}
                                                            </>
                                                            : (blue_links.blue_links_length.length === 2) ?
                                                                <>
                                                                    <table width="50%" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"} style={{ "float": "left", "textAlign": "left" }} align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="1%">&nbsp;</td>
                                                                                <td width="48%">&nbsp;</td>
                                                                            </tr>
                                                                            {blue_links.blue_links_length[0].links && blue_links.blue_links_length[0].links.map(function (links, linksIndex) {
                                                                                return (
                                                                                    <React.Fragment key={linksIndex}>
                                                                                        <tr>
                                                                                            <td width="2%"></td>
                                                                                            <td width="48%" height="20" style={{ "color": `${textColor ? textColor : "#fff"}`, "fontSize": "12px" }}>
                                                                                                <span style={{ "color": `${textColor ? textColor : "#fff"}` }} className="font-size-mob-9">
                                                                                                    {links.multiline && links.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                        return (
                                                                                                            <React.Fragment key={commonTxtIndex}>
                                                                                                                <CommonText aColor={textColor ? textColor : "#fff"}
                                                                                                                    supFS={"7px"} commonTxt={commonTxt} />
                                                                                                            </React.Fragment>
                                                                                                        )
                                                                                                    })}
                                                                                                </span>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </React.Fragment>
                                                                                )
                                                                            })}
                                                                            <tr>
                                                                                <td width="1%">&nbsp;</td>
                                                                                <td width="48%">&nbsp;</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <table width="2" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"} style={{ "float": "left", "textAlign": "left" }} align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="1%" height="10"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="2" height="70" style={{ "lineHeight": "15px", "verticalAlign": "top", "textAlign": "center", "backgroundColor": `${textColor ? textColor : "#fff"}` }}></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="1%" height="5"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <table width="46%" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"} style={{ "float": "left", "textAlign": "left" }} align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="23%" className="fasenra_widthtd"></td>
                                                                                <td width="23%" height="13" className="fasenra_heighttd"></td>
                                                                            </tr>
                                                                            {blue_links.blue_links_length[1].links && blue_links.blue_links_length[1].links.map(function (links, linksIndex) {
                                                                                return (
                                                                                    <React.Fragment key={linksIndex}>
                                                                                        <tr>
                                                                                            <td width="23%" className="fasenra_widthtd"></td>
                                                                                            <td width="23%" height="20" style={{ "color": `${textColor ? textColor : "#fff"}`, "fontSize": "12px" }}><span style={{ "color": `${textColor ? textColor : "#fff"}` }} className="font-size-mob-9">{links.multiline && links.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                return (
                                                                                                    <React.Fragment key={commonTxtIndex}>
                                                                                                        <CommonText aColor={textColor ? textColor : "#fff"}
                                                                                                            supFS={"7px"} commonTxt={commonTxt} />
                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })}</span></td>
                                                                                        </tr>
                                                                                    </React.Fragment>
                                                                                )
                                                                            })}

                                                                            <tr>
                                                                                <td width="10"></td>
                                                                                <td width="10" height="3"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </>
                                                                : (blue_links.blue_links_length.length === 3) ?
                                                                    <>
                                                                        <table width="31%" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"} style={{ "float": "left", "textAlign": "left" }} align="left" className="width-mob-100">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="10" className="fasenra_widthtd">&nbsp;</td>
                                                                                    <td width="10" className="fasenra_heighttd">&nbsp;</td>
                                                                                </tr>
                                                                                {blue_links.blue_links_length[0].links && blue_links.blue_links_length[0].links.map(function (links, linksIndex) {
                                                                                    return (
                                                                                        <React.Fragment key={linksIndex}>
                                                                                            <tr>
                                                                                                <td width="10" className="fasenra_widthtd"></td>
                                                                                                <td height="20" style={{ "color": `${textColor ? textColor : "#fff"}`, "fontSize": "12px" }}>
                                                                                                    <span style={{ "color": `${textColor ? textColor : "#fff"}` }}>
                                                                                                        {links.multiline && links.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                            return (
                                                                                                                <React.Fragment key={commonTxtIndex}>
                                                                                                                    <CommonText aColor={textColor ? textColor : "#fff"}
                                                                                                                        supFS={"7px"} commonTxt={commonTxt} />
                                                                                                                </React.Fragment>
                                                                                                            )
                                                                                                        })}
                                                                                                    </span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })}
                                                                                <tr>
                                                                                    <td width="10">&nbsp;</td>
                                                                                    <td width="10">&nbsp;</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <table width="1%" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"} style={{ "float": "left", "textAlign": "left" }} align="left" className="display-mob-none">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="10" height="10"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td height="70" style={{ "lineHeight": "15px", "verticalAlign": "top", "textAlign": "center", "border-left": `1px solid ${textColor ? textColor : "#fff"}` }}></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="10" height="5"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <table width="33%" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"} style={{ "float": "left", "textAlign": "left" }} align="right" className="width-mob-100">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="10" className="fasenra_widthtd">&nbsp;</td>
                                                                                    <td width="10" height="13" className="fasenra_heighttd"></td>
                                                                                </tr>
                                                                                {blue_links.blue_links_length[1].links && blue_links.blue_links_length[1].links.map(function (links, linksIndex) {
                                                                                    return (
                                                                                        <React.Fragment key={linksIndex}>
                                                                                            <tr>
                                                                                                <td width="10" className="fasenra_widthtd">&nbsp;</td>
                                                                                                <td height="20" style={{ "color": `${textColor ? textColor : "#fff"}`, "fontSize": "12px" }}><span style={{ "color": `${textColor ? textColor : "#fff"}` }}>{links.multiline && links.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                    return (
                                                                                                        <React.Fragment key={commonTxtIndex}>
                                                                                                            <CommonText aColor={textColor ? textColor : "#fff"}
                                                                                                                supFS={"7px"} commonTxt={commonTxt} />
                                                                                                        </React.Fragment>
                                                                                                    )
                                                                                                })}</span></td>
                                                                                            </tr>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })}

                                                                                <tr>
                                                                                    <td width="10" className="fasenra_widthtd"></td>
                                                                                    <td width="10" height="3" className="fasenra_heighttd"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <table width="1%" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"} style={{ "float": "left", "textAlign": "left" }} align="left" className="display-mob-none">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="10" height="10"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td height="70" style={{ "lineHeight": "15px", "verticalAlign": "top", "textAlign": "center", "border-left": `1px solid ${textColor ? textColor : "#fff"}` }}></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td width="10" height="5"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <table width="31%" border="0" cellSpacing="0" cellPadding="0" bgcolor={bgColor ? bgColor : "#fff"} style={{ "float": "left", "textAlign": "left" }} align="right" className="width-mob-100">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="10" className="fasenra_widthtd">&nbsp;</td>
                                                                                    <td width="10" height="13" className="fasenra_heighttd"></td>
                                                                                </tr>
                                                                                {blue_links.blue_links_length[2].links && blue_links.blue_links_length[2].links.map(function (links, linksIndex) {
                                                                                    return (
                                                                                        <React.Fragment key={linksIndex}>
                                                                                            <tr>
                                                                                                <td width="10" className="fasenra_widthtd">&nbsp;</td>
                                                                                                <td height="20" style={{ "color": `${textColor ? textColor : "#fff"}`, "fontSize": "12px" }}><span style={{ "color": `${textColor ? textColor : "#fff"}` }} >{links.multiline && links.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                    return (
                                                                                                        <React.Fragment key={commonTxtIndex}>
                                                                                                            <CommonText aColor={textColor ? textColor : "#fff"}
                                                                                                                supFS={"7px"} commonTxt={commonTxt} />
                                                                                                        </React.Fragment>
                                                                                                    )
                                                                                                })}</span></td>
                                                                                            </tr>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })}
                                                                                <tr>
                                                                                    <td width="10" className="fasenra_widthtd"></td>
                                                                                    <td width="10" height="3" className="fasenra_heighttd"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </>
                                                                    : ""
                                                        }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            }
                        </React.Fragment>
                    )
                })}
                <tr>
                    <td height={marginBottom ? marginBottom : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginBottom ? marginBottom : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default Section30;