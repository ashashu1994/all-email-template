import React from 'react';
class ImgLessWidth extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                <tr>
                    <td align="center"><img src={`symbicort_images/${content.img_less_width}`} alt="main" className="full-img-less" /></td>
                </tr>
                <tr>
                    <td height="13" style={{ background: "#fff", lineHeight: "13px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default ImgLessWidth;