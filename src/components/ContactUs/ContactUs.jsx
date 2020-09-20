import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ContactUs extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-dark font-weight-bold mt-2"  style={{fontSize:"1em",}} data-toggle="modal" data-target="#exampleModal">
                ContactUs
                </button>

                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content bg-secondary">
                    <div class="modal-header text-light">
                        <h3 style={{width:"150px",margin:"auto"}} className="text-light" id="exampleModalLabel">Contact US</h3>
                    </div>
                    <div class="modal-body">
                    
                    
                    <form class="needs-validation" novalidate>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="validationTooltip01" placeholder="Firstname" required />
                        <div class="valid-tooltip">
                            Looks good!
                        </div>
                        </div>
                        <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="validationTooltip02" placeholder="Lastname" required/>
                        <div class="valid-tooltip">
                            Looks good!
                        </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="validationTooltip01" placeholder="Email" required />
                        <div class="valid-tooltip">
                            Looks good!
                        </div>
                        </div>
                        <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="validationTooltip02" placeholder="Mobile" required/>
                        <div class="valid-tooltip">
                            Looks good!
                        </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                        <label for="validationTooltip03">Message</label>
                        <textarea class="form-control w-100"  id="validationTooltip03" required />
                        <div class="invalid-tooltip">
                            Please provide a valid Phone no.
                        </div>
                        </div>
                    </div>
                    
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">CLOSE</button>
                        <button type="button" class="btn btn-primary">SEND MESSAGE</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)
