import React from 'react';
import Img from '../images/tab-1-pic.png';
import styled from 'styled-components';
import { Button } from './Button';
import { generateMedia } from 'styled-media-query';
import { Link } from 'react-router-dom';

function TabContentOne() {
    return (
        <TabWrapper>
            <div className="continer">
                <div className="tab-content">
                    <div>
                        <span className="title" style={{ marginBottom: '2rem' }}>IF you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime</span>
                        <br />
                        <Link to='/choose-plan'>
                            <Button style={{ marginTop: '2rem' }}>try it now</Button>
                        </Link>
                    </div>
                    <img src={Img} alt="tab-1-pic" />
                </div>
            </div>
        </TabWrapper>
    )
}
export default TabContentOne;
// media query
const custommedia = generateMedia({
    smDesktop: '1440px',
    tablet: '960px'
})
const TabWrapper = styled.div`
background:var(--main-deep-dark);
span{
    color:white;
}
img{
    width:31.875rem;
}
.tab-content{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-gap:2rem;
    align-items:center;
    font-size:2rem;
    padding:2.5rem;
    ${custommedia.lessThan('tablet')`
    grid-template-columns:100%;
    text-align:center;
    padding-left:0;
    padding-right:0;
    `}
}

.title{
    margin-top:2rem;
    ${custommedia.lessThan('smDesktop')`
    font-size:1.5rem;
    line-height:1;
    `}
}
`


