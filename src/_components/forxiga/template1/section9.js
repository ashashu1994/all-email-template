import React from 'react';
class Section9 extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {data.image &&
                    <tr style={{ backgroundColor: "#2f2f36" }}>
                        <td style={{ backgroundColor: "#2f2f36" }} align="center"><img src={`forxiga_images/${data.image}`} alt="main_icon_5" className="full-img" style={{ backgroundColor: "#544e5c" }} /></td>
                    </tr>
                }
            </>
        )
    }
}

export default Section9;