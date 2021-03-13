import React from 'react'
import styled from 'styled-components';
import logo from '../svg/logo.svg';
import checkmarklogo from '../images/Checkmark.png';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../components/Button';
import FooterChoosePlan from '../components/choose_plan/FooterChoosePlan'


class ChoosePlan extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <ChooseWrapper>
                <div className="header-top">
                    <Link to="/">
                        <Logo src={logo} alt="logo" />
                    </Link>
                    <NavLink to="/login" className="btn signIn-btn">
                        Sign In
                </NavLink>
                </div>
                {/* header-content */}
                <div className="header-content">
                    <img className="checkmark-logo" src={checkmarklogo} alt="checkmarklogo" />
                    <p> Step <strong>1 </strong> of <strong>3</strong></p>
                    <h2>Choose your plan.</h2>
                    <div className="checked-list">
                        <div className="bullet">No commitments, cancel anytime.</div>
                        <div className="bullet">Everything on Netflix for one low price.</div>
                        <div className="bullet">Unlimited viewing on all your devices.</div>
                    </div>
                    <Button >see the plans</Button>

                </div>
                <FooterChoosePlan></FooterChoosePlan>
            </ChooseWrapper>
        )
    }
}
export default ChoosePlan;

// const ChooseWrapper
const ChooseWrapper = styled.div`
background:#fff ! important;
// header-top
.header-top{
    background:#fff;
    height:6rem;
    border-bottom:1px solid #e6e6e6;
}

.header-content{
display:grid;
justify-content:center;
background:#fff;
color:var(--main-dark);
margin-bottom:6rem;
width:65%;
position:relative;
margin:auto;
margin-top:4.5rem;
text-align:center;
align-content:center;
flex-direction:column;
z-index:1;
}

//checkmark-logo
.checkmark-logo{
    width:3rem;
    margin-top:3.125rem;
    margin-bottom:2rem;
}
// header-content
.header-content img{
    margin:6.25rem auto 1.875rem;
}
// checklist
.checked-list{
    text-align:left;
    margin:1rem auto 3rem;
    padding-left:1.5625rem;
    width:85%;
    font-size:17px;
    padding:auto;
}
// bullets
.bullet{
    margin-top:1rem;
    margin-left:1rem;
    text-indent:-1rem;
    line-height:1.2rem;
}
.checked-list .bullet::before{
    color:transparent;
    display:inline-block;
    position:relative;
    height:0.3em;
    width:0.8em;
    content:'';
    left:-0.9375rem;
    bottom:0.1875rem;
    border-bottom:1px solid #e50914;
    border-left:1px solid #e50914;
    transform:rotate(-45deg);
}
// the sign in btn
.signIn-btn{
    margin:1.625rem 3% 0;
    padding:0.375rem 1.0625rem;
    font-weight:700;
    line-height:normal;
    font-size:1.25rem;
    color:var(--main-dark);
    cursor:pointer;
    right:0;
    position:absolute;
    &:hover{
        text-decoration:underline;
    }
}
`
// logo
const Logo = styled.img`
width:10.5rem;
height:3.5rem;
position:absolute;
top:49%;
left:8%;
transform:translate(-50%,-50%);
margin-left:0;
`
