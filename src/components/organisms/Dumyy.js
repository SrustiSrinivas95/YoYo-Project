import React, { Component } from 'react'
import './signin/signin.css'
class dummy extends Component {
    render() {
        return (
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
                                            <input name="username" id="social_login_email" type="email" className="input-text"
                                                value="" autocomplete="off" title="Email"
                                                data-validate="{required:true, 'validate-email':true}"></input>
                                        </div>
                                    </div>
                                    {/* Password field */}
                                    <div className="field field-name-password required col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label for="pass" className="label"><span>Password</span></label>
                                        <div class="control">
                                            <input name="password" id="social_login_pass" type="password"
                                                className="input-text" autocomplete="off" title="Password"
                                                data-validate="{required:true, 'validate-password':true}"></input>
                                        </div>
                                    </div>
                                    {/* forgot password */}
                                    <div className="actions-toolbar">
                                        <div className="secondary scl-forgot-link">
                                            <span>Forgot Your Password?</span>
                                        </div>
                                        <div className="primary">
                                            <button type="button" className="action login primary" id="bnt-social-login-authentication">
                                                <span>Login</span>
                                            </button>
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
        );
    }
}

export default dummy;