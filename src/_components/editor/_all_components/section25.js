import React from 'react';
class Section25 extends React.Component {
    render() {
        const { data, marginTop, marginBottom, bgColor } = this.props;
        return (
            <>
                <tr>
                    <td height={marginTop ? marginTop : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginTop ? marginTop : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                </tr>
                <tr style={{ lineHeight: "0px" }}>
                    <td><img src={`template_images/${data.image}`} alt="main" className="full-img" /></td>
                </tr>
                <tr>
                    <td height={marginBottom ? marginBottom : "0px"} style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: `${marginBottom ? marginBottom : "0px"}`, verticalAlign: "top", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default Section25;