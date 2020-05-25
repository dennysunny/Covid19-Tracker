import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="text-center ">APIs Used</h5>
                <p className="text-center ">
                    <a href="https://corona.lmao.ninja/v2/countries/india"> India </a>
                </p>
                <p className="text-center ">
                    <a href="https://api.covid19india.org/state_district_wise.json">State Wise</a>
                </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/dennysunny/Covid19-Tracker"> dE </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;