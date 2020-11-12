import React from 'react';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    },
    li: {
        display: 'flex',
        border: '1px solid red'
    }
}

export const Asdd = (props) =>{
    return (
        <ul style={styles.ul}>
            <li>1</li>
            <li>2</li>
            <li style={{justifyContent: 'center', margin: '.5rem'}}>3</li>
        </ul>
    )
}