import React from 'react';
class RespBanner extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <>
                <tr>
                    <td width="100%" valign="top" class="display-mob-none"><img src={`lynparza_images/${content.hero_img.desktop_img}`} alt="main" width="598px" height="295px" style={{ display: "block" }} /></td>
                </tr>
                <tr>
                    <td width="100%" valign="top" class="mobshow" lang="x-mobshow" style={{ width: "0", maxHeight: "0", overflow: "hidden", float: "left" }}><img src={`lynparza_images/${content.hero_img.mob_img}`} alt="main" width="318" height="295" /></td>
                </tr>
                <tr>
                    <td height="20" style={{ background: "#fff", lineHeight: "20px", verticalAlign: "top", height: "8px", fontSize: "1px" }}>&nbsp;</td>
                </tr>
            </>
        )
    }
}

export default RespBanner;