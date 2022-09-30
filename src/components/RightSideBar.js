import React from 'react'
import styled from 'styled-components'
import Buckets from './Buckets'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'


function RightSideBar() {
    return (
        <Container>
            <Top>
                <RightBarHeader>
                    <ExpandMoreIcon/>
                    <h4>Buckets</h4>  
                </RightBarHeader>
                <AddIcon />
            </Top>
            <Buckets/>
            <Buckets/>
            <Buckets/>
            <Buckets/>
            <Buckets/>
        </Container>
    )
}

export default RightSideBar;

const Container = styled.div`
    background-color: var(--discord_color);
    /* background-color: red; */
    width:100%;
    /* padding: 2vh; */
    height:100%;
    border-left:1px solid #26282c;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
`;

const Top = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    align-items: center;
    padding:2vh;
    > .MuiSvgIcon-root{
        margin-right:2vh;
        color:gray;
        font-size:1.8rem;
        cursor: pointer;
    }
    > .MuiSvgIcon-root :hover{
        color:white;
    }
`;

const RightBarHeader = styled.div`
    display: flex;
    align-items: center;
    color:white;
    cursor: pointer;
    >h4{
        width:100%;
        
    }
    

`;