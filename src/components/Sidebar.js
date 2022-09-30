import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from  '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
import ChannelName from './ChannelName';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import {Avatar} from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic"
import HeadsetIcon from "@material-ui/icons/Headset"
import SettingsIcon from "@material-ui/icons/Settings"
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import { useEffect } from 'react';
import {useCollection} from 'react-firebase-hooks/firestore'

function Sidebar() {

    const dispatch = useDispatch();
    const userobj = useSelector(selectUser);
    const [channelslist, loading, error] = useCollection(db.collection("channelslist"));
    
    const [hide, setHide] = useState(true);
    const [hidetotal, setHidetotal] = useState(true);
    function signOut(){ 
        auth.signOut().then(()=>{
            dispatch(logout());
        })
    }    

    function addChannels(){
        const channelname = prompt("Enter channel name");
        if(channelname){
            db.collection("channelslist").add({
                channelName: channelname,
            })
        }
    }

    function Hide(){
        console.log("yey");
        setHide(!hide);
    }

    function HideTotal(){
        setHidetotal(!hidetotal);
    }
    return (
        <SidebarContainer>
            <SidebarHeader>
                <h3>Bunny codes</h3>
                <ExpandMoreIcon onClick={HideTotal} />
            </SidebarHeader>

            {
                hidetotal && (
                    <ChannelsContainer>
                <ChannelsHeader>
                    <Heading onClick={Hide}>
                    
                            <ExpandMoreIcon/>
                            <h4>Channels</h4>
                        
                    </Heading>
                    <AddIcon  onClick={addChannels}/>
                    {/* <AddChannel Icon = {AddIcon} add channelOption/> */}
                </ChannelsHeader>
                { hide?(
            
                <ChannelsList>
                    {
                        channelslist?channelslist.docs.map((individualchannel)=>(
                            // console.log(individualchannel.data().channelName)
                            <ChannelName 
                            key={individualchannel.id} 
                            id = {individualchannel.id}
                            name = {individualchannel.data().channelName}

                            />
                        )):
                        
                        console.log("notfound")
                    }
                </ChannelsList>
            
                ):(console.log("nodata"))
                
                }        
            </ChannelsContainer>


                )
            }
            
            <VoiceContainer>
                <SignalCellularAltIcon/>
                <VoiceInfo>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </VoiceInfo>
                <VoiceIcons>
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </VoiceIcons>
            </VoiceContainer>
            <ProfileContainer>
                <Avatar src={userobj.photo} onClick={signOut}/>
                <ProfileInfo>
                    <h3>{userobj.username}</h3>
                    <p>{userobj.email}</p>
                </ProfileInfo>
                <ProfileIcons>
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </ProfileIcons>
            </ProfileContainer>
        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    display:flex;
    flex-direction: column;
    flex:0.25;
    height:100vh;
    background-color:#2f3135;
    /* color:white; */
`;

const SidebarHeader = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px;
    background-color: #2f3135d5;
    color:white;
    border-bottom: 3px solid #26282c;

    > .MuiSvgIcon-root{
        cursor: pointer;
    }

`;

const ChannelsContainer = styled.div`
    flex: 1;
    
`;

const ChannelsHeader = styled.div`

    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #2f3135;
    color:grey;

    > .MuiSvgIcon-root{
        cursor: pointer;
        font-size:32px;
    }
    > .MuiSvgIcon-root :hover{
        color: white;
    }
    

`;

const Heading = styled.div`

    display: flex;
    align-items:center;
    cursor: pointer;
    color:white;
    > h4 {
        letter-spacing: 1px;
        font-weight: 500;
        
    }
    > .MuiSvgIcon-root{
        font-size:24px;
    }

`;

const ChannelsList = styled.div`
    display: flex;
    height:56vh;
    flex-direction: column;
    overflow-y:scroll;
    ::-webkit-scrollbar{
        width:1px;
        background-color:grey;
    }
    ::-webkit-scrollbar-thumb{
        background: white;
        height:3px;
    }
`;
const VoiceContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    color: gray;
    background-color: var(--discord_color);
    padding:10px;
    border-top: 1px solid grey;
    > .MuiSvgIcon-root{
        color: #4fb185;
        font-size:xx-large;
    }
`;
const VoiceInfo = styled.div`
    flex: 1;
    padding: 10px;
    > h3 {
        color: #4fb185;
    }
    > p{
        font-size: smaller;
    }
`;

const VoiceIcons = styled.div`
    
    > .MuiSvgIcon-root{
        padding: 3px;
        margin:5px;   
        cursor: pointer;
    }
    > .MuiSvgIcon-root :hover{
        color:white;
        transform:scale(1.1);
    }
`;

const ProfileContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    color: gray;
    background-color: var(--discord_color);
    padding:10px;
    border-top: 1px solid grey;
    > .MuiSvgIcon-root{
        color: #4fb185;
        font-size:xx-large;
    }
    
`;

const ProfileInfo = styled.div`
    flex: 1;
    padding: 10px;
    > h3 {
        color: #ffffff;
    }
    > p{
        font-size: smaller;
    }
`;

const ProfileIcons = styled.div`
   
    .MuiSvgIcon-root{
        padding:3px;
        cursor: pointer;
        /* margin:5px; */
    }
    > .MuiSvgIcon-root :hover{
        color:white;
        transform:scale(1.1);
    }
`;