import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';


function Message({message,time,user,userimg}) {
    return (
        <MessageComponents>
            {console.log("imin messages")}
            <Avatar src={userimg} alt=""/>
            <MessageDetails>
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(time?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </MessageDetails>
        </MessageComponents>
    )
}

export default Message
const MessageComponents = styled.div`
    display: flex;
    align-items:center;
    padding:24px;
    color:white;
`;
const MessageDetails = styled.div`
    margin-left:21px;
    > h4{
        margin-bottom:5px;
        >span{
            color: grey;
            margin-left: 21px;
            font-size: 15px;
        }
    }

`;
