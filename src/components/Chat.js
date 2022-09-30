import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import NotificationsIcon from '@material-ui/icons/Notifications'
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'

import Message from './Message'
import { db } from '../firebase'

import { selectchannelid, selectchannelname } from '../features/appSlice'
import { useSelector } from 'react-redux'
import ChatInput from './ChatInput'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import RightSideBar from './RightSideBar'

function Chat() {
    const chatRef = useRef(null);
    const id = useSelector(selectchannelid);
    const name = useSelector(selectchannelname);

    const [channeldetails] = useDocument(
        id && db.collection('channelslist').doc(id)
    )

    const [msgdetails,loading] = useCollection(
        id && 
        db
        .collection('channelslist')
        .doc(id)
        .collection('chatbox')
        .orderBy('timestamp','asc')
    )
    console.log(channeldetails?.data());
    console.log(msgdetails);

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behaviour: 'smooth',
        });
        
    }, [id,loading])

    return (
        <ChatContainer>
            {
            channeldetails && msgdetails && (
                <Main>
                    <ChatHeader>
                        <Left>
                            <h3><span>#</span>{name}</h3>
                        </Left>
                        <Right>
                            <NotificationsIcon/>
                            <EditLocationRoundedIcon/>
                            <PeopleAltRoundedIcon/>
                            <Search>
                                <input type="text" placeholder='search' />
                                <SearchRoundedIcon/>
                            </Search>
                            <SendRoundedIcon/>
                            <HelpRoundedIcon/>
                        </Right>
                    </ChatHeader>
                    <Divider>
                        <LeftDivider>   
                            <ChatMessages>
                                {
                                    msgdetails?.docs.map(doc=>{
                                        const {message,timestamp,user,image} = doc.data()

                                        return(
                                            <Message 
                                                key={doc.id}
                                                message = {message}
                                                time = {timestamp}
                                                user={user}
                                                userimg = {image}
                                            
                                            />
                                        )
                                    })

                                }
                                
                            <ChatBottom ref={chatRef}/> 
                            </ChatMessages>
                            <ChatInput chatRef={chatRef} Channelname={name} Channelid = {id} />
                        </LeftDivider>
                        <RightDivider>
                                <RightSideBar/>
                        </RightDivider>
                    </Divider>
                </Main>
            )
            
            }
            
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    flex:0.75;
    display:flex;
    overflow-y:scroll;
    flex-direction: row;
    background-color: var(--discord_color);
    height: 100vh;
    width:100%;
    ::-webkit-scrollbar{
        width:5px;
        color:white;
    }
`;
const ChatHeader = styled.div`
    flex:0.3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: grey;
    position:fixed;
    width:75%;
    /* flex:1; */
    /* width:100%; */
    background-color:var(--discord_color);
    /* background-color:red; */
    padding:17.1px;
    border-bottom:3px solid #26282c;
    z-index:1;
`;
const Left = styled.div`
    >h3{
        display:flex;
        align-items: center;
        color:white;
        >span{
            color: #ffffff;
            margin-right:5px;
            font-size:24px;
        }
    }

`;
const Right = styled.div`
    display:flex;
    align-items: center;
    flex:0.5;
    justify-content: space-between;
    > .MuiSvgIcon-root{
        padding:3px;
        cursor: pointer;
        font-size:30px;
    }
    > .MuiSvgIcon-root :hover{
        color:white;
        
    }
`;
const Search = styled.div`
    display:flex;
    align-items: center;
    color: grey;
    background-color: var(--discord_color);
    border-radius: 3px;
    padding:3px;
    >input{
        background: transparent;
        color:white;
        outline:0;
        border: none;
    }

`;
const ChatMessages = styled.div`
    flex:1; 
    margin-top:5vh;
`;
const ChatBottom = styled.div`
    padding-bottom: 200px;

`;

const Main = styled.div`
/* position: relative; */
display:flex;
flex-direction: column;
flex:1;

`;

const Divider = styled.div`
    display:flex;
    position:relative;
    flex:0.7;
    margin-top:20px;
    flex-direction: row;
`;
const LeftDivider = styled.div`
    flex:0.75;
`;
const RightDivider = styled.div`
    position:fixed;
    flex:0.25;
    right:0;
    width:20%;
    height:100%;
    top:0;
    margin-top:8.8vh;

`;