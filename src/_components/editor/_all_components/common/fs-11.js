import React from 'react';
import CommonText from './custom_text';
class FS11 extends React.Component {
    render() {
        const { data, textColor, bgColor } = this.props;
        return (
            <td height="15" style={{ background: `${bgColor ? bgColor : "#fff"}`, lineHeight: "14px", color: `${textColor ? textColor : "#000"}`, verticalAlign: "top", height: "8px", textAlign: "left", fontSize: "11px" }}>
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

export default FS11;