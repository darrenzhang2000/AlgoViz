import React, { Component } from 'react'
import BubbleSort from './sorting/BubbleSort'
import Array from './Array'

class AlgoViz extends Component {
    render(){
        let dummyArr = [1, 3, 5, 7, 2, 4, 6]

        return <div>
            AlgoViz
            <BubbleSort/>
            <Array arr={dummyArr}/>
        </div>
    }
}

export default AlgoViz