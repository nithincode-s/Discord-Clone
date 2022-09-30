import { NearMeOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../features/appSlice';
function ChannelName({id,name}) {

    const dispatch = useDispatch();
    function selectChannel(){
        dispatch(setChannelInfo({
            channelId: id,
            channelName: name
        }))
    }
    return (
        <ChannelNameContainer onClick={selectChannel}>
           <h4><span>#</span>{name}</h4> 
        </ChannelNameContainer>
    )
}

export default ChannelName

const ChannelNameContainer = styled.div`

    width:auto;
    flex: 1;

    > h4{
        background-color: var(--discord_color); 
        font-weight: 400;
        display:flex;
        padding-left:8px;
        align-items:center;
        color:grey;
        cursor: pointer; 
        letter-spacing: 1px;
        font-size: 16px;

        >span{
            font-size:28px;
            padding:6px;
            font-weight: 800;
        }
    }
    > h4:hover{
        color: white;
        background-color: #40464b;

    }

`;