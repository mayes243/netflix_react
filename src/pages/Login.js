import React from 'react';
import Logo from '../svg/logo.svg';
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
import LoginFooter from '../components/login/LoginFooter';
import { generateMedia } from 'styled-media-query';
import { Link } from 'react-router-dom'


class Login extends React.Component {
    render() {
        return (
            <div className="main-login-container">
                <div className="header-top">
                    <Link to='/'>
                        <LOGO src={Logo} alt="logo......." className="Logo" />
                    </Link>
                </div>
                <LoginForm />
                <LoginFooter />
            </div>
        )
    }
}
export default Login;
// media
const custommedia = generateMedia({
    tablet: '640px',
    lgTablet: '740px'
})
const LOGO = styled.img`
    width:11rem;
    position:absolute;
    top:25%;
    left:11%;
    transform:translate(-50%,-50%);
    margin-left:0;
    ${custommedia.lessThan('tablet')`
    top:45%;
    left:22%;
    `}
    
`