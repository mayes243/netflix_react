import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Fblogo from '../../images/fb-logo.png';
import { generateMedia } from 'styled-media-query';

const emailValid = RegExp(/^([a-zA-Z0-9_\]+)@([a-zA-Z0-9_\]+)([a-zA-Z]{2,5})$/);
const initState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    checked: false
}

class LoginForm extends React.Component {
    state = initState;

    handleEmailchange = e => {
        this.setState({
            name: e.target.value
        });
    };

    handlePassswordchange = e => {
        this.setState({
            password: e.target.value
        });
    };
    // validate
    validate = () => {
        let inputError = false;
        const errors = {
            emailError: '',
            passwordError: ''
        }
        if (!this.state.email) {
            inputError = true;
            errors.emailError = 'please enter a  email'
        }
        else if (!this.state.email.match(emailValid)) {
            inputError = true;
            errors.emailError = (
                < span style={{ color: 'red' }}> Your email address must be valid </span >
            )
        }
        if (this.state.password.length < 4) {
            inputError = true;
            errors.passwordError = "password must be beween 4 and 60"
        }

        this.setState({
            ...errors
        });
        return inputError;
    };
    onSubmit = e => {
        e.preventDefault()
        const err = this.validate();
        if (!err) {
            this.setState(initState);
        }
    }
    // checkbox
    
    handlerCheckbox = e => {
        this.setState({
            checked: e.target.checked
        })
    }


    render() {
        return (
            <FormWrapper>
                <div className="form-container">
                    <form>
                        <h1>Sign In</h1>
                        <div className="input-container">
                            <input
                                className={this.state.emailError ? 'input-error input-empty' : 'input-empty'}
                                onChange={this.handleEmailchange}
                                type="email"
                                required />
                            <label >Email or Phone Number</label>
                            <span style={{ color: '#db7302' }}>{this.state.emailError}</span>
                        </div>
                        <div className="input-container">
                            <input
                                className={this.state.passwordError ? 'input-error input-empty' : 'input-empty'}
                                onChange={this.handlePassswordchange}
                                type="password"
                                required />
                            <label >Password</label>
                            <span style={{ color: '#db7302' }}>{this.state.passwordError}</span>
                        </div>
                        <div className="input-container">
                            <Button type="submit" onClick={e => this.onSubmit(e)}>Sign In</Button>
                        </div>
                        <label className="checkbox">
                            Remember me
                            <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handlerCheckbox} />
                            <span className="checkmark">
                            </span>
                        </label>
                        <Link to='/' className="need-help">Need Help?</Link>
                        <div className="bottom-form">
                            <img src={Fblogo} alt="facebook_logo" />
                            <Link to='/' className="login-fb">Login With Facebook</Link>
                            <br /><br />
                            <span style={{ color: '999' }}>New to Netflix ? </span>
                            <Link to='/' className="signup-text">Sign up now</Link>
                        </div>
                    </form>
                </div>
            </FormWrapper>
        )
    }
}
export default LoginForm;
// media
const custommedia = generateMedia({
    tablet: '640px',
})
// form container
const FormWrapper = styled.div`
display:grid;
color:#fff;
justify-content:center;
position:relative;
z-index:5;
${custommedia.lessThan('tablet')`
  border-bottom:0.9px solid #999;
    `}

.form-container{
    background:rgba(0,0,0,0.8);
    position:relative;
    width:28.125rem;
    height:41.25rem;
    padding:4rem;
    ${custommedia.lessThan('tablet')`
    padding:0.6rem;
    height:35rem;
    `}
}

.input-container{
    display:grid;
    grid-template-columns:1fr;
    margin-top:1.2rem;
}

.input-empty{
    color:#fff;
    background:#333;
    border:0;
    border-radious:0.25rem;
    height:3rem;
    padding:0.9rem 1.25rem 0;
}
form div label{
    position:absolute;
    top:0.625rem;
    left:1.25rem;
    pointer-events:none;
    color:#8a8a8a;
    font-size:1rem;
    transition:transform 150ms ease-out, fontsize 150ms ease-out;
}

form div{
    position:relative;
}
input:focus~label{
    top:0.4375rem;
    font-size:0.7rem;
}
input{
    outline:none;
}
.input-error{
    border-bottom:1px solid #db7302;
}

// checkbox
.checkbox{
    margin-left:0.75rem;
    padding-left:1.875rem;
    position:relative;
    font-size:0.9rem;
    color:#999;
    cursor:pointer;
}
.checkbox input{
display:none;
}
.checkbox .checkmark{
    display:inline-block;
    background:#454545;
    width:1.1rem;
    height:1.1rem;
    left:0;
    top:0;
    border-radius:0.1rem;
    position:absolute;
}
.checkbox input:checked + .checkmark:after{
    content:'';
    position:absolute;
    height:0.25rem;
    width:0.625rem;
    border-left:2px solid #000;
    border-bottom:2px solid #000;
    top:25%;
    left:21%;
    transform:rotate(-45deg);
}
// need-help
.need-help{
    text-decoration:none;
    color:#828282;
    margin-left:6.6rem;
    font-size:0.9rem;
    ${custommedia.lessThan('tablet')`
   margin-left:13rem;
    `}
    &:hover{
        text-decoration:underline;
    }
}

// bottom-from
.bottom-form img{
    width:1.5625rem;
    margin:0.625rem 0.625rem -0.4375rem 0;
}
.login-fb{
    color:#828282;
    font-size:0.9rem;
}
.bottom-form{
    position:absolute;
    bottom:0;
    margin-bottom:4rem;
}
// signup-text

.signup-text{
    font-size:1.1rem;
    color:#fff;
    &:hover{
        text-decoration:underline;
    }
}
`
// Button
const Button = styled.button`
color:#fff;
background:rgba(229, 9, 20);
border:none;
outline:none;
padding:0.8rem 1.3rem;
border-radius:0.125rem;
font-size:1rem;
text-align:center;
box-shadow:0 1px 0 rgba(0,0,0,0.45);
transition:opacity 0.2s ease-in;
cursor:pointer;
text-decoration:none;
margin:1rem 0;
`