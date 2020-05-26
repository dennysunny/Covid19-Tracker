import React, {Component} from 'react'
import Axios from 'axios';
import {Accordion} from 'react-bootstrap'


class World extends Component{

    constructor(){
        super();

        this.state = {
            distData : []
        }
    }

    componentDidMount(){
        
        Axios.get("https://api.covid19india.org/states_daily.json")
        .then(response => {
            this.setState({distData : response.data})
            console.log("heyy",this.state.distData)
            console.log("heyy",this.state.distData.states_daily)
        })
        setTimeout(4000)
    }
    render(){
        //let keys = Object.keys(this.state.distData);
         let std=this.state.distData.states_daily
         console.log("HELLOOO",std)
        return(
            
            <div className="row">
                <div className="col-md-12">
                <Accordion>
                    {/* {
                        std.map(stated =>{
                            return(
                                <h1>
                                   {stated} 
                                </h1>
                            )
                        })
                    } */}
                </Accordion>
                </div>
            </div>
        )
    }
}

export default World