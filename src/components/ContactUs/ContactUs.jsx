import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ContactUs extends Component {
    render() {
        return (
            <div>
                <div class="cont">
  <h1>
    <span class="orange">C</span>
    ontact 
    <span class="orange">U</span>
    s
  </h1>
  <div class="contact">

    <input type="text" 
           class="c1"
           placeholder="First name *" />

    <input type="text"
           class="c2"
           placeholder="Last name *" />

    <input type="email"
           class="c3"
           placeholder="Email address *" />

    <textarea class="c4"
              placeholder="Message" ></textarea>

    <input type="submit" value="SEND" />

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
