import React from 'react';
class Banner extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                <tr>
                    <td valign="top"><img src={`lynparza_images/${content.hero_img.desktop_img}`} alt="main" style={{ display: "block", maxWidth: "100%" }} /></td>
                </tr>
                <tr>
                    <td height="20" style={{ background: "#fff", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default Banner;