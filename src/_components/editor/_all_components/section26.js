import React from 'react';
class Section26 extends React.Component {
    render() {
        const { data, marginTop, marginBottom, bgColor } = this.props;
        return (
            <>
                <tr>
                    <td height={marginTop ? marginTop : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginTop ? marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                </tr>
                <tr>
                    <td width="100%" valign="top" className="display-mob-none"><img src={`template_images/${data.image}`} alt="main" style={{ display: "block" }} /></td>
                </tr>
                <tr>
                    <td width="100%" valign="top" className="mobshow" lang="x-mobshow" style={{ width: "0", maxHeight: "0", overflow: "hidden", float: "left" }}><img src={`template_images/${data.resp_image}`} alt="main" width="318" /></td>
                </tr>
                <tr>
                    <td height={marginBottom ? marginBottom : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginBottom ? marginBottom : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default Section26;