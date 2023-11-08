import React, { Component } from "react";

import Step2 from "../Step2"
import Step3 from "../Step3"
import Step4 from "../Step4"
import "./index.css"

class Signup extends Component {

    state = {
        step: 1,
        formData: {
            name: "",
            email: "",
            password: "",
            age: "",
            occupation: "",
            address: ""
        },
    }


    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            },
        }));
    };


    nextStep = () => {
        this.setState((prevState) => ({
            step: prevState.step + 1,
        }));
    };


    prevStep = () => {
        this.setState((prevState) => ({
            step: prevState.step - 1,
        }));
    };

    render() {
        const { step, formData } = this.state;

        // Render form sections based on the current step
        let formSection;
        switch (step) {
            case 1:
                formSection = (
                    <Step2
                        formData={formData}
                        handleInputChange={this.handleInputChange}
                        nextStep={this.nextStep}
                    />
                );
                break;
            case 2:
                formSection = (
                    <Step3
                        formData={formData}
                        handleInputChange={this.handleInputChange}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                    />
                );
                break;
            case 3:
                formSection = (
                    <Step4
                        formData={formData}
                        handleInputChange={this.handleInputChange}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                    />
                );
                break;
            default:
                formSection = <div>Invalid step.</div>;
        }

        return (
            <div className="signup-form">
                <div className="main-element-form">
                    <h1>Multi Step Form</h1>
                    {formSection}
                </div>
            </div>
        );
    }
}

export default Signup;
