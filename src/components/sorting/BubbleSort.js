import React, { Component } from "react"

class BubbleSort extends Component {
    state = {
        arr: [1, 3, 5, 7, 8, 2, 8, 4, 6],
    }

    bubbleSort = (arr) => {
        let newArr = [...this.state.arr]
        for (let i = 0; i < newArr.length - 1; i++) {
            for (let j = 0; j < newArr.length - i; j++) {
                if (newArr[j] > newArr[j + 1]) {
                    let temp = newArr[j]
                    newArr[j] = newArr[j + 1]
                    newArr[j + 1] = temp
                }
            }
        }
        return newArr
    }

    componentDidMount = () => {
        console.log(this.state.arr)
        let sortedArr = this.bubbleSort(this.state.arr)
        console.log(this.bubbleSort(this.state.arr))
    }

    render() {
        return <div></div>
    }
}

export default BubbleSort
