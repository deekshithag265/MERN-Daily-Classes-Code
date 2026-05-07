import React from "react";
import { Component } from "react";
class RegisterForm extends Component {
    render() {
        return (
            <>
                <h1>Registration Form</h1>
                <form>
                    <fieldset>
                 <label htmlFor="">Name:</label>
                    <input type="text" placeholder="Name" id="name" />
                    <br />
                    <label htmlFor="">Email:</label>
                    <input type="email" placeholder="Email" id="email" />
                    <br />
                    <label htmlFor="">Phone Number:</label>
                    <input type="tel" pattern="[6-9][0-9]{9}" placeholder="+91"  />
                    <button type="submit">Register</button>
                    <button type="reset">Reset</button>
                    </fieldset>
                </form>
            </>
        );
    }
}
export default RegisterForm;