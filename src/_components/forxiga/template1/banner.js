import React from 'react';
import CommonText from '../../_common/custom_text';
class ForxigaTemplate1Banner extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <tr style={{ lineHeight: "0px" }}>
                <td><img src={`forxiga_images/${data.hero_img}`} alt="main" className="full-img" /></td>
            </tr>
        )
    }
}

export default ForxigaTemplate1Banner;