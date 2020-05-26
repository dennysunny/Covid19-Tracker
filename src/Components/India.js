import React, {Component} from 'react'
import { Card} from 'react-bootstrap'
import State from './State';
import axios from 'axios';


class India extends Component{

    constructor(){
        super();

        this.state = {
            data : {}
        }
    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response =>{
           this.setState({data : response.data}) 
        })
    }

    render(){
        return(
  
              <div className="row">
                    <div className="col-md-12">
                        <img src= "https://www.countryflags.io/in/shiny/64.png" alt=""/>
                        <h3>INDIA</h3>
                    </div>

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">

                            <Card className="badge badge-info" style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES REPORTED</Card.Title>
                                    <h3>{this.state.data.cases}</h3>
                                    <Card.Text>
                                    TODAY : {this.state.data.todayCases}   </Card.Text>
                                </Card.Body>
                            </Card>

                            </div>

                            <div className="col-md-3">

                            <Card className="badge badge-warning" style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title> ACTIVE CASES</Card.Title>
                                    <h3>{this.state.data.active}</h3>
                                    
                                    <Card.Text>
                                    CRITICAL : {this.state.data.critical}
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>

                            </div>

                            <div className="col-md-3">

                            <Card className="badge badge-success" style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>{this.state.data.recovered}</h3>
                                    <Card.Text>
                                        TODAY : N?A
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            </div>

                            <div className="col-md-3">

                            <Card className="badge badge-danger" style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <h3>{this.state.data.deaths}</h3>
                                    <Card.Text>
                                    TODAY : {this.state.data.todayDeaths}   </Card.Text>
                                </Card.Body>
                            </Card>

                            </div>

                            <div className="col-md-3">

                            <Card className="badge" border="primary" style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title>Cases Per One Million</Card.Title>
                                    <h3>{this.state.data.casesPerOneMillion}</h3>
                                </Card.Body>
                            </Card>

                            </div>

                            <div className="col-md-3">

                            <Card className="badge" border="warning" style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title>Active Per One Million</Card.Title>
                                    <h3>{this.state.data.activePerOneMillion}</h3>
                                </Card.Body>
                            </Card>

                            </div>

                            <div className="col-md-3">

                            <Card className="badge" border="success" style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title>Recovered Per One Million</Card.Title>
                                    <h3>{this.state.data.recoveredPerOneMillion}</h3>
                                </Card.Body>
                            </Card>

                            </div>

                            <div className="col-md-3">

                                <Card className="badge" border="danger" style={{ width: '18rem' }}>
                                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                    <Card.Body className="text-center">
                                        <Card.Title>Deaths Per One Million</Card.Title>
                                        <h3>{this.state.data.deathsPerOneMillion}</h3>
                                    </Card.Body>
                                </Card>

                            </div>

                            <div className="col-md-3">

                                    <Card className="badge" border="primary" style={{ width: '18rem' }}>
                                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                        <Card.Body className="text-center">
                                            <Card.Title>Tests</Card.Title>
                                            <h3>{this.state.data.tests}</h3>
                                        </Card.Body>
                                    </Card>

                            </div>

                            <div className="col-md-3">

                            <Card className="badge" border="warning" style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title>Tests Per One Million</Card.Title>
                                    <h3>{this.state.data.testsPerOneMillion}</h3>
                                </Card.Body>
                            </Card>

                            </div>

                            

                            

                            <div className="col-md-3">

                            <Card className="badge" border="success" style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title>Critical Per One Million</Card.Title>
                                    <h3>{this.state.data.criticalPerOneMillion}</h3>
                                </Card.Body>
                            </Card>

                            </div>

                            
                            <div className="col-md-3">
                                <Card className="badge" border="danger" style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title>Last updated :</Card.Title>
                                    <h3>{this.state.data.updated }</h3>
                                </Card.Body>
                            </Card>
                            </div>

                            <div className="col-md-12">
                                <State/>
                            </div>

                        </div>
                    </div>
              </div>
            
        )
    }
}

export default India