import React from 'react';
class Banner extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                <tr style={{ lineHeight: "0px" }}>
                    <td><img src={`symbicort_images/${content.hero_img}`} alt="main" className="full-img" /></td>
                </tr>
                <tr>
                    <td height="15" style={{ background: "#fff", lineHeight: "8px", verticalAlign: "top", height: "15px", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default Banner;