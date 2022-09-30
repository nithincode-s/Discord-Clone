import React, { useState } from 'react'
import firebase from 'firebase'
import styled from 'styled-components'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GiftIcon from '@material-ui/icons/Gif'
import { auth, db } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';


function ChatInput({Channelid,Channelname,chatRef}) {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);
    

    function sendMessage(e){
        e.preventDefault();
        if(!Channelid){
            return false;
        }

        db.collection('channelslist').doc(Channelid).collection('chatbox').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            image: user.photoURL,

        });

        chatRef?.current?.scrollIntoView({
            behaviour: 'smooth',
        });
        setInput('');
    }


    return (
            <ChatInputContainer> 
                {Channelid && (

                    <>
                    <AddCircleIcon/>
                    <form >

                        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder={`Say Hi to #${Channelname}`} />
                        <button hidden type="submit" onClick={sendMessage}>Send</button>

                    </form>
                    <ChatInputIcons>
                        <CardGiftcardIcon/>
                        <GiftIcon/>
                        <EmojiEmotionsIcon/>
                    </ChatInputIcons>
                    </>

                )
                }
                
            </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    color: lightgray;
    display: flex;
    position:fixed;
    align-items: center;
    justify-content: space-between;
    padding:8px;
    margin-left: 20px;
    bottom:30px;
    border-radius: 5px;
    margin:20px;
    width: 52.8%;
    border-top: 1px solid gray;
    background-color: #343538;
    /* border-radius: 20px;  */
    > form {
        flex:1;
        position: relative;
        display: flex;
        justify-content: center;
        >input{
            padding:10px;
            background:transparent;
            border: none;
            width: 100%;
            outline:none;
            font-size:24px;
            color:white;
            
        }
        >button{
            display: none;
        }
    }
`;

const ChatInputIcons = styled.div`
    > .MuiSvgIcon-root{
        padding: 2px;
        margin:6.5px;
        cursor: pointer;
        
    }
    > .MuiSvgIcon-root :hover{
        color:white;
        transform: scale(1.01);
        
    }
`;
