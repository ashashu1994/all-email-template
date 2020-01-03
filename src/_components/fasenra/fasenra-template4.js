import React from 'react';
class FasenraTemplate4 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <tr>
                    <td width="100%" bgcolor="#fff">
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#fff">
                            <tbody>
                                <tr>
                                    <td width="10" style={{ "backgroundColor": "#fff" }} >&nbsp;</td>
                                    <td>
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0" bgcolor="#fff">
                                            <tbody>
                                                <tr>
                                                    <td height="15" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                </tr>
                                                {data.user_name && <>
                                                    <tr>
                                                        <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>{data.user_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                                }
                                                {data.user_desc && data.user_desc.map(function (desc, index) {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>{desc}</td>
                                                            </tr>
                                                            <tr>
                                                                <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </>
                                                    )
                                                })}
                                                {data.cta_full_text &&
                                                    <>
                                                        <tr>
                                                            <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px", "fontWeight": "bold" }}>{data.cta_full_text}</td>
                                                        </tr>
                                                        <tr>
                                                            <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </>
                                                }
                                                {data.image_name && <>
                                                    <tr style={{ "lineHeight": "0px" }}>
                                                        <td align="center"><img src={`images/${data.image_name}`} alt="main" className="main_img" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td height="30" style={{ "background": "#fff", "lineHeight": "30px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                                }
                                                {data.btn_image_name && <>
                                                    <tr style={{ "lineHeight": "0px", "backgroundColor": "#fff" }}>
                                                        <td align="center"><img src={`images/${data.btn_image_name}`} alt="main" className="main_img" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td height="15" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                    </tr>
                                                </>
                                                }
                                            </tbody>
                                        </table>
                                    </td>
                                    <td width="10" style={{ "background-color": "#fff" }}>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </>
        )
    }
}

export default FasenraTemplate4;