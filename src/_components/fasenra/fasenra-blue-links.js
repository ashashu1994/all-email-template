import React from 'react';
import CommonText from '../_common/custom_text';
class FasenraBlueLinks extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {data.blue_links && data.blue_links.map(function (blue_links, blue_linksIndex) {
                    return (
                        <>
                            <tr>
                                <td height="15" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "fontSize": "1px" }}>&nbsp;</td>
                            </tr>
                            {blue_links.blue_links_length &&
                                <tr>
                                    <td width="100%">
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                            <tbody>
                                                <tr>
                                                    <td width="100%" bgcolor="#4472c4">
                                                        {(blue_links.blue_links_length.length === 1) ?
                                                            <>
                                                                {blue_links.blue_links_length.map(function (blue_links_length, blue_links_lengthindex) {
                                                                    return (
                                                                        <table width="50%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#4472c4" style={{ "float": "left", "textAlign": "left" }} align="left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="1%">&nbsp;</td>
                                                                                    <td width="48%">&nbsp;</td>
                                                                                </tr>
                                                                                {blue_links_length.links.map(function (links, index) {
                                                                                    return (
                                                                                        <tr key={index}>
                                                                                            <td width="2%"></td>
                                                                                            <td width="48%" height="20" style={{ "color": "#fff", "fontSize": "12px" }}>
                                                                                                <span style={{ "color": "#fff" }} className="font-size-mob-9">
                                                                                                    {links.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                        return (
                                                                                                            <CommonText commonTxt={commonTxt} />
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
                                                                    <table width="50%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#4472c4" style={{ "float": "left", "textAlign": "left" }} align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="1%">&nbsp;</td>
                                                                                <td width="48%">&nbsp;</td>
                                                                            </tr>
                                                                            {blue_links.blue_links_length[0].links && blue_links.blue_links_length[0].links.map(function (links, linksIndex) {
                                                                                return (
                                                                                    <>
                                                                                        <tr>
                                                                                            <td width="2%"></td>
                                                                                            <td width="48%" height="20" style={{ "color": "#fff", "fontSize": "12px" }}>
                                                                                                <span style={{ "color": "#fff" }} className="font-size-mob-9">
                                                                                                    {links.multiline && links.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                        return (
                                                                                                            <CommonText commonTxt={commonTxt} />
                                                                                                        )
                                                                                                    })}
                                                                                                </span>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </>
                                                                                )
                                                                            })}
                                                                            <tr>
                                                                                <td width="1%">&nbsp;</td>
                                                                                <td width="48%">&nbsp;</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <table width="2" border="0" cellSpacing="0" cellPadding="0" bgcolor="#4472c4" style={{ "float": "left", "textAlign": "left" }} align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="1%" height="10"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="2" height="70" style={{ "lineHeight": "15px", "verticalAlign": "top", "textAlign": "center", "backgroundColor": "#fff" }}></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="1%" height="5"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <table width="46%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#4472c4" style={{ "float": "left", "textAlign": "left" }} align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="23%" className="fasenra_widthtd"></td>
                                                                                <td width="23%" height="13" className="fasenra_heighttd"></td>
                                                                            </tr>
                                                                            {blue_links.blue_links_length[1].links && blue_links.blue_links_length[1].links.map(function (links, linksIndex) {
                                                                                return (
                                                                                    <>
                                                                                        <tr>
                                                                                            <td width="23%" className="fasenra_widthtd"></td>
                                                                                            <td width="23%" height="20" style={{ "color": "#fff", "fontSize": "12px" }}><span className="font-size-mob-9"><a rel="noopener noreferrer" target="_blank" href="#"><font color="#fff"><u style={{ "color": "#fff", "cursor": "pointer" }}>{links.multiline && links.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                                                return (
                                                                                                    <CommonText commonTxt={commonTxt} />
                                                                                                )
                                                                                            })}</u></font></a></span></td>
                                                                                        </tr>
                                                                                    </>
                                                                                )
                                                                            })}

                                                                            <tr>
                                                                                <td width="10"></td>
                                                                                <td width="10" height="3"></td>
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
                        </>
                    )
                })
                }
            </>
        )
    }
}

export default FasenraBlueLinks;