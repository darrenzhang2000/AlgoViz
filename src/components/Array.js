import React from 'react'

const Array = props => {
    const arr = props.arr
    const style = {
        border: '2px solid red',
        height: '200px',
        width: '500px'
    }

    const values = arr.map(el => 
        <td style={style}>{el}</td>
    )

    return <div>
        <tr>
            {values}
        </tr>
    </div>
}

export default Array