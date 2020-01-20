import React from 'react';
// import styles from './editor.module.css';
const error = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '14'
}

const info = {
    color: 'blue',
    fontWeight: 'italics',
    fontSize: '16'
}
class Editor extends React.Component {
    render() {
        return (
            <>
                <p style={error}>This is Error</p>
            </>
        )
    }
}

export default Editor;