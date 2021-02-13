import React from 'react'

const Table_td = (props) => {
    if (!props.payload) {
        return (<td>-</td>)
    }
    return (<td>{props.payload}</td>)
}
export default Table_td;
