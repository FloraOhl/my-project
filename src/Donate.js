<b>Flora Ohlsen</b>
//                                         <span className=" text">**** 8880</span>
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="pt-9">
//                                 <div className="d-flex flex-row pb-9">

//                                 </div>
//                             </div>
//                             <div className="d-flex flex-row pb-9">
//                                 <div className="rounded border d-flex w-100 px-3 py-2 align-items-center">
//                                     <div className="d-flex align-items-center pe-3">
//                                         <MDBRadio name="radioNoLabelX" id="radioNoLabel11" />
//                                     </div>
//                                     <div className="d-flex flex-column py-10">
//                                         <p className="mb-1 small text-primary">Choose amount</p>
//                                         <div className="d-flex flex-row align-items-center">
//                                             <h6 className="mb-0 text-primary pe-1">€</h6>
//                                             <MDBInput
//                                                 id="typeNumber"
//                                                 type="number"
//                                                 size="lg"
//                                                 style={{ width: "100px" }}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                             <div className="d-flex justify-content-bottom align-items-bottom pb-0">
//                                 <br />
//                                 <a href="#!" className="text">

//                                 </a>
//                                 <br />


//                                 <button><Link to='/'>Pay</Link>
//                                 </button>

//                             </div>
//                         </MDBCardBody>
//                     </MDBCard>

//                     <br />
//                 </MDBCol>
//                 <br />

//             </MDBRow>
//             <center><h3> THANK YOU</h3></center>
//             <h5>Security of your payment information</h5>
//             <p>
//                 We understand that payment services online involves a lot of trust on your part. We take your trust seriously, and we make the security and confidentiality of your information our highest priority.</p>
//             {/* <img src="images/Thx.jpg" className="thx" alt="" /><img src="images/Thx.jpg" className="thx" alt="" /><img src="images/Thx.jpg" className="thx" alt="" /><img src="images/Thx.jpg" className="thx" alt="" /><img src="images/Thx.jpg" className="thx" alt="" /> */}


//         </MDBContainer>
//     );
// }
import React from 'react';
import Cards from 'react-credit-cards';

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div id="PaymentForm">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
                <form>
                    <input
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    ...
                </form>
            </div>
        );
    }
}
