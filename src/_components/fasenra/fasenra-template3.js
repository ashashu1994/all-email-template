import React from 'react';
class FasenraTemplate3 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {
                    data.cta_block.map(function (cta, index) {
                        return (
                            <tr key={index}>
                                <td width="100%">
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td className="mob_space" height="15" style={{ "backgroundColor": "#fff", "fontSize": "1px", "lineHeight": "15px" }} >&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td width="10" bgcolor="#fff">&nbsp;</td>
                                                <td className="mob_table" width="96%" style={{ "backgroundColor": "#fff" }}>
                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="mob_width" width="50%" valign="top">
                                                                    <table border="0" cellSpacing="0" cellPadding="0" bgcolor="#fff" style={{ "textAlign": "left" }} align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td height="13" style={{ "background": "#fff", "lineHeight": "16px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "11px", "textAlign": "left", "fontWeight": "bold" }}>
                                                                                    {cta.heading}
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" style={{ "lineHeight": "14px" }}>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td height="5" style={{ "background": "#fff", "fontSize": "1px" }}></td>
                                                                                            </tr>
                                                                                            {cta.list.map(function (list, index1) {
                                                                                                return (
                                                                                                    <tr key={index1}>
                                                                                                        <td width="12" height="10" style={{ "background": "#fff", "color": "#7f7d7a", "textAlign": "justify", "fontSize": "15px", "verticalAlign": "top" }}>&#8226;</td>
                                                                                                        <td height="13" style={{ "background": "#fff", "color": "#7f7d7a", "textAlign": "left", "fontSize": "10px" }}>{list}</td>
                                                                                                    </tr>
                                                                                                )
                                                                                            })}
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td height="15" style={{ "background": "#fff", "fontSize": "1px", "lineHeight": "15px" }}>&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="10%" style={{ "color": "#fff", "backgroundColor": "#fff" }}>
                                                                                    <a target="_blank" rel="noopener noreferrer" href={cta.btn_link}><img src={`images/${cta.btn_image_name}`} alt="" style={{ "cursor": "pointer" }} /></a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td className="mob_width" width="50%" valign="top">
                                                                    <table align="right" className="mob_leftTable" width="50%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#fbeae1" style={{ "textAlign": "right" }}>
                                                                        <tbody>
                                                                            <tr valign="top">
                                                                                <td width="10%" style={{ "color": "#fff", "backgroundColor": "#fff" }}>
                                                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.com"><img src={`images/${cta.image_name}`} alt="" height="152px" width="190px" style={{ "cursor": "pointer" }} /></a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td width="10" bgcolor="#fff">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        )
                    })
                }
            </>
        )
    }
}

export default FasenraTemplate3;