import React from 'react';
import CommonText from './custom_text';
class FS15 extends React.Component {
    render() {
        const { data, textColor, bgColor } = this.props;
        return (
            <td height="13" style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: "15px", color: `${textColor ? textColor : "#000"}`, verticalAlign: "top", height: "8px", textAlign: "left", fontSize: "15px" }}>
                {data.map(function (text, textIndex) {
                    return (
                        <React.Fragment key={textIndex}>
                            <CommonText commonTxt={text} supFS={"7px"} aColor={textColor ? textColor : "#000"} />
                        </React.Fragment>
                    )
                })}
            </td>
        )

    }
}

export default FS15;