import React from 'react';
import CommonText from '../_common/custom_text';
class FasenraTemplate4 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {data.template4 &&
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
                                                            <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>
                                                                {data.user_name && data.user_name.map(function (commonTxt, commonTxtIndex) {
                                                                    return (
                                                                        <CommonText commonTxt={commonTxt} />
                                                                    )
                                                                })}</td>
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
                                                                    <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px" }}>
                                                                        {desc.multiline && desc.multiline.map(function (commonTxt, commonTxtIndex) {
                                                                            return (
                                                                                <CommonText commonTxt={commonTxt} />
                                                                            )
                                                                        })}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })}
                                                    {data.template4.cta_full_text &&
                                                        <>
                                                            <tr>
                                                                <td height="13" style={{ "background": "#fff", "lineHeight": "15px", "verticalAlign": "top", "height": "8px", "color": "#000", "fontSize": "12px", "fontWeight": "bold" }}>{data.template4.cta_full_text.map(function (commonTxt, commonTxtIndex) {
                                                                    return (
                                                                        <CommonText commonTxt={commonTxt} />
                                                                    )
                                                                })}</td>
                                                            </tr>
                                                            <tr>
                                                                <td height="10" style={{ "background": "#fff", "lineHeight": "10px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                            </tr>
                                                        </>
                                                    }
                                                    {data.template4.image_name && <>
                                                        <tr style={{ "lineHeight": "0px" }}>
                                                            <td align="center"><img src={`images/${data.template4.image_name}`} alt="main" className="main_img" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td height="30" style={{ "background": "#fff", "lineHeight": "30px", "verticalAlign": "top", "fontSize": "1px" }}>&nbsp;</td>
                                                        </tr>
                                                    </>
                                                    }
                                                    {data.template4.btn_image_name && <>
                                                        <tr style={{ "lineHeight": "0px", "backgroundColor": "#fff" }}>
                                                            <td align="center"><a href={data.template4.btn_link}><img src={`images/${data.template4.btn_image_name}`} alt="main" className="main_img" /></a></td>
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
                }
            </>
        )
    }
}

export default FasenraTemplate4;