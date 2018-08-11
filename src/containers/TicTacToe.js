import React, {Component} from 'react'
import {Stage} from 'react-konva'

class TicTacToe extends Component {

    state= {
        rows:3
    }

    componentWillMount(){
        let height = window.innerHeight
        let width = window.innerHeight
        let size = (height < width) ? height * .8 : width * .8
        let rows = this.state.rows 
        let unit = size / rows

        this.setState({
            size,
            rows,
            unit
        })
    }

    move = () => {
        // when user make a move
    }

    makeAImove = () => {
        // when the AI makes a move
    }

    turningTest =() => {
        //administer the Turing Test to my user once they finish with the game  
    }

    recordGame =() => {
        // record the game when I'm finished
    }

    render() {
        return (
            <div>
                <Stage
                    width={}
                    hight={}    
                >
                    {/* <Board/> */}
                    {/* <Squares/> */}
                </Stage>
            </div>

        ) //return 
    } //render
} //class Home

export default TicTacToe 