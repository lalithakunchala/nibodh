import React from 'react'
import { StaticGoogleMap, Marker } from "react-static-google-map"

export default function GoogleMap() {
    
    return (
        <div className="p-5 bg-secondary ">
            <div className="container-fluid" id="location">
                <div className="row mb-5 ">
                    <div className="col-6">
                        <h2 className="text-light">Location</h2>
                        <div style={{margin:"100px;"}}></div>
                        <img src="https://www.tutorialspoint.com/assets/questions/media/35694/map.jpg" alt="image"/>
                    </div>
                    <div className="col-4">
                        <div className="row m-5">
                    
                        <h3 style={{width:"150px",margin:"auto"}} className="text-light" id="exampleModalLabel">Contact US</h3>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="validationTooltip01" placeholder="Firstname" required />
                       
                        </div>
                        <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="validationTooltip02" placeholder="Lastname" required/>
                        
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="validationTooltip01" placeholder="Email" required />
                        
                        </div>
                        <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="validationTooltip02" placeholder="Mobile" required/>
                       
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                        <label for="validationTooltip03">Message</label>
                        <textarea class="form-control w-100"  id="validationTooltip03" required />
                        
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">SEND MESSAGE</button>
                    </div>
                    
                    </div>
                    </div>
                    </div>
    )
}
