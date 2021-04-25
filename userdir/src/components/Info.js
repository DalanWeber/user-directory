import React, {Component} from 'react'

class Info extends Component{
    constructor(props){
        super(props)
    
        this.state ={
            userinfo: ''
        }
    }

    render(){
        return(
            <div className='infoback'>
                <div className='container'>
                    <div className='info'>
                        <h1 className='name'> The Name</h1>
                        <br></br>
                        <div className='from'>
                            <div className='froms'><strong>From:</strong> HLEP</div>
                            <div className='froms'><strong>Job Title:</strong></div>
                            <div className='froms'><strong>Employer:</strong></div>
                            <br></br>
                            <h3>Favorite Movies:</h3>
                            <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </div>
                    </div>                    
                    <h1 className='outof25'> /25</h1>
                </div>
                <br></br>
                <div className='buttons'>
                    <input type="button" value="< Previous"/>
                    <div className='innerbutt'>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>New</button>
                    </div>
                    <input type="button" value="Next >"/>
                </div>
            </div>
        )
    }
}

export default Info