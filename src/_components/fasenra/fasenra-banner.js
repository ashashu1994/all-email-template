import React from 'react';
class FasenraBanner extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr style={{ "lineHeight": "0px" }}>
                <td align="center"><img src={`images/${data.hero_img}`} alt="main" className="main_img" /></td>
            </tr>
        )
    }
}

export default FasenraBanner;