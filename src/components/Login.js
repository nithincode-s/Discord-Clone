import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core';
import {auth,provider} from '../firebase';
import {login} from '../features/userSlice';
import { useDispatch } from 'react-redux';
function Login() {

    const dispatch = useDispatch();

    function signin(){
        console.log("button pressed");
        auth.signInWithPopup(provider).then((result)=>{
            // console.log(result);
            dispatch(login({
                username: result.user.displayName,
                photo: result.user.photoURL,
                id:result.user.uid,
                email: result.user.email
        }));

        })
        
    }
    return (
        <LoginContainer>
            <LoginArea>
                
                <Left>
                    <h2>Welcome back!</h2>
                    <h4>We're so exited to see you again!</h4>
                    <p>EMAIL OR PHONE NUMBER</p>
                    <input type="text" required />
                    <br />
                    <p>PASSWORD</p>
                    <input type="password" required/>
                    <h5>Forget your password ?</h5>
                    <Button onClick={signin}>Login</Button>
                    <h6>Need an account ? <span>Register</span></h6>
                </Left>
                <Right>
                    <img src="logo.png" alt="" />
                    
                    <h4>Your place to Hangout.</h4>
                    <h6>_@Bunny</h6>
                </Right>
            </LoginArea>
            </LoginContainer>
    )
}

export default Login;
const LoginContainer = styled.div`
    display: flex;
    justify-content:center;
    height:100vh;
    width:100%;
    align-items:center;
    background: url('wallpaper.png') fixed;
    object-fit: cover;
    overflow: hidden;
    
`;

const LoginArea = styled.div`
    min-width:60%;
    min-height:50%;
    display:flex;
    flex-direction: row;
    align-items:flex-start;
    color:white;
    padding:36px;
    justify-content: flex-start;
    background-color: var(--discord_color);
    

`;


const Left = styled.div`
    flex:0.6;
    display:flex;
    
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    >h2{
            margin-bottom:5px;  
    }

    >h4{
        margin-bottom:21px;
        color: grey;
    }
    >p{
        font-size:smaller;
        color:grey;
    }
    >input{
        background:#252627;
        border:none;
        padding:10px;
        color:white;
        width:100%;
        outline:#738adb;
        font-size:21px;

    }
    >h5{
        color:#0b9cfd;
        cursor: pointer;
    }
    > img{
        width:20vh;
        height: 20vh;
        object-fit: contain;
        z-index: 1;
    }
    > button{
        margin-top:21px;
        width:100%;
        background-color:#5470d8;
        color:#eff2f5;
        font-weight:800;
        cursor: pointer;
        padding:10px;
        outline:none;
        border:none;
    }
    > button:hover{
        background-color: #5470d8;
        opacity:0.9;

    }

    > h6{
        padding-top:15px;
        color:grey;
        >span{
            color:#0b9cfd;
            cursor: pointer;
            font-size:12px;
        }
    }
`
const Right = styled.div`
    flex:0.4;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height:100%;
    object-fit: cover;
    z-index: 1;
    >img{
        width:200px;
        height:200px;
        object-fit:contain;
        margin-left:41px;
        

    }
    >h6{
        font-weight:900;
        margin-left:3.1rem;
        margin-top:1rem;

    }
    >h4{
        font-size:32px;
        font-weight:1000;
        margin-left:81px;
    }
`;

