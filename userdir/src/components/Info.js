import React, {Component} from 'react'
import data from '../data'

class Info extends Component{
    constructor(props){
        super(props)
    
        this.state ={
            i: 0,
            info: data
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
    }

    handleNext(){
        if(this.state.i === 24){
            this.setState({
                i: 0
            })
        }else{
            this.setState({
                i: this.state.i + 1
            })
        }
    }

    handlePrev(){
        if(this.state.i === 0){
            this.setState({
                i: 24
            })
        }else{
            this.setState({
                i: this.state.i - 1
            })
        }
    }

    render(){
        return(
            <div className='infoback'>
                <div className='container'>
                    <div className='info'>
                        <h1 className='name'>{this.state.info[this.state.i].name.first} {this.state.info[this.state.i].name.last} </h1>
                        <br></br>
                        <div className='from'>
                            <div className='froms'><strong>From:</strong>{this.state.info[this.state.i].city}, {this.state.info[this.state.i].country}</div>
                            <div className='froms'><strong>Job Title:</strong>{this.state.info[this.state.i].title}</div>
                            <div className='froms'><strong>Employer:</strong>{this.state.info[this.state.i].employer}</div>
                            <br></br>
                            <h3>Favorite Movies:</h3>
                            <ol>
                                <li>{this.state.info[this.state.i].favoriteMovies[0]}</li>
                                <li>{this.state.info[this.state.i].favoriteMovies[1]}</li>
                                <li>{this.state.info[this.state.i].favoriteMovies[2]}</li>
                            </ol>
                        </div>
                    </div>                    
                    <h1 className='outof25'>{this.state.info[this.state.i].id}/25</h1>
                </div>
                <br></br>
                <div className='buttons'>
                    <input onClick={this.handlePrev} type="button" value="< Previous"/>
                    <div className='innerbutt'>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>New</button>
                    </div>
                    <input onClick={this.handleNext} type="button" value="Next >"/>
                </div>
            </div>
        )
    }
}

export default Info