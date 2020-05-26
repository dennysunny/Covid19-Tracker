import React, {Component} from 'react'
import axios from 'axios';
import {Accordion, Card, Button} from 'react-bootstrap'


class State extends Component{

    constructor(){
        super();

        this.state={
            StateData : {}
        }
    }

componentDidMount(){
    axios.get("https://api.covid19india.org/state_district_wise.json")
    .then(response => { 

        this.setState({StateData : response.data})

    });
}

    render(){

        let keys = Object.keys(this.state.StateData);

        return(
            <div className="row">
                <div className="col-md-12">
                <Accordion>
                    {
                        keys.map((itm,ky) => {
                            let districts = this.state.StateData[itm].districtData;
                            //let district_keys = Object.keys(districts);

                            let total_active = 0
                            let total_confirmed = 0
                            let total_deths = 0
                            let total_recover = 0

                            let district_list = [];

                            for(var x in districts){
                               total_active += districts[x].active;
                               total_confirmed += districts[x].confirmed;
                               total_deths += districts[x].deceased
                               total_recover += districts[x].recovered
                                
                               let ob = districts[x];
                               ob["district_name"] = x;
                                district_list.push(ob)
                            }

                            return(
                                <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="dark" eventKey={ky}>
                                    {itm} - <span className="btn-primary p-1">TOTAL CASES : {total_confirmed}</span> | <span className="btn-warning p-1">ACTIVE : {total_active}</span> |  <span className="btn-success p-1">RECOVERED : {total_recover}</span> | <span className="btn-danger p-1">DEATHS : {total_deths}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={ky}>
                                <Card.Body>
                                    <table className="table table-bordered table-hover variant-dark " >
                                        <thead>
                                            <tr>
                                                <td>District</td>
                                                <td>Confirmed</td>
                                                <td>Active</td>
                                                <td>Recoverd</td>
                                                <td>Deaths</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                district_list.map((itm,ky) => {
                                                    return(

                                                        <tr>
                                                            <td>{itm.district_name}</td>
                                                            <td>{itm.confirmed}</td>
                                                            <td>{itm.active}</td>
                                                            <td>{itm.recovered}</td>
                                                            <td>{itm.deceased}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        
                                        </tbody>
                                    </table>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            )
                        })
                    }
                   
                </Accordion>
                </div>

            </div>
        )
    }
}

export default State;