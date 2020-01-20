import React from 'react';
class FasenraBanner extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr style={{ "lineHeight": "0px" }}>
                <td align="center"><img src={`fasenra_images/${data.hero_img}`} alt="main" className="full-img" /></td>
            </tr>
        )
    }
}

export default FasenraBanner;