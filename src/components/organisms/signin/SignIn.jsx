import React, { Component } from 'react'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import '../signin/signin.css'


const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
};

class SignIn extends Component {
    state = initialState;

    //to handle input tags
    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    //on submit of the form
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
    };

    //validation of the form
    validate = () => {
        let emailError = "";
        let passwordError = "";

        if (!this.state.email) {
            emailError = "email cannot be blank";
        }

        if (!this.state.location) {
            passwordError = "password cannot be blank";
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    };
    render() {
        return (
            <div className="mfp-content">
                <div className="">
                    <div className="social-login block-container authentication">
                        {/* div for sign in header */}
                        <div className="social-login-title">
                            <h2 className="login-title">Sign In</h2>
                        </div>
                        {/* sign in block */}
                        <div className="block social-login-customer-authentication col-mp mp-12" id="social-login-authentication">
                            <div className="block-title">
                                <span id="block-customer-login-heading" role="heading"
                                    aria-level="2">Registered Customers</span>
                            </div>
                            {/* block content */}
                            <div className="block-content" aria-labelledby="block-customer-login-heading">
                                {/* form starts here */}
                                <form className="form-customer-login" id="social-form-login" data-mage-init='{"validation":{}}'>
                                    <fieldset className="fieldset login" data-hasrequired="* Required Fields">
                                        <input name="form_key" type="hidden" value="8C5RO6ssplMnB1yp" />
                                        {/* Email field */}
                                        <div className="field field-name-email required col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <label className="label" for="social_login_email"><span>Email</span></label>
                                            <div className="control">
                                                <Input inputType={"email"}
                                                    id={"email"}
                                                    className={"input-text"}
                                                    name={"email"}
                                                    placeholder={"Email"}
                                                    value={this.state.email}
                                                    handleChange={this.handleChange} />
                                            </div>
                                        </div>
                                        {/* Password field */}
                                        <div className="field field-name-password required col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <label for="pass" className="label"><span>Password</span></label>
                                            <div class="control">
                                                <Input inputType={"password"}
                                                    id={"password"}
                                                    className={"input-text"}
                                                    name={"password"}
                                                    placeholder={"Password"}
                                                    value={this.state.password}
                                                    handleChange={this.handleChange} />
                                            </div>
                                        </div>
                                        {/* forgot password */}
                                        <div className="actions-toolbar">
                                            <div className="secondary scl-forgot-link">
                                                <span>Forgot Your Password?</span>
                                            </div>
                                            <div className="primary">
                                                <Button type={"button"}
                                                    className={"action-login-primary"}
                                                    action={this.handleFormSubmit}
                                                    title={"login"}>
                                                    <span>Login</span>
                                                </Button>
                                            </div>
                                        </div>
                                        {/* next block */}
                                        <div className="actions-toolbar">
                                            <div className="primary scl-sign-up-link">
                                                <p>New? Join Giftcart</p>
                                                <span>Sign Up</span>
                                            </div>
                                        </div>
                                        {/* login with google oAuth */}
                                        <div className="block social-login-authentication-channel col-mp mp-12">
                                            <div className="block-title">
                                                Or Sign In with
                                        </div>
                                            <div className="block-content">
                                                <div className="actions-toolbar social-btn google-login">
                                                    <span className="fa fa-google">Google</span>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default SignIn;