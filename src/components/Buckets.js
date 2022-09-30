import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
function Buckets() {

    const [select, setSelect] = useState(true);

    function selected(){
        setSelect(true);
    }

    return (
        <BucketContainer onClick={selected}>
            {
                select? (
                    <S>
                        <h4>#<span>Bucket-Name</span></h4>
                    </S>
                ):(
                    <NS>
                        <h4>#<span>Bucket-Name</span></h4>
                        {/* {setSelect(true)} */}
                    </NS>
                )
            }
            
            
        </BucketContainer>
    )
}

const S = styled.div`
    width:100%;
    >h4{
        padding:8px;
        font-size: 22px;
        font-weight:800;
        width:100%;
        >span{
            font-size:18px;
            font-weight:500;
            margin-left:5px;
        }
    }
     >h4:hover{
        background-color: #40464b;
        color:white;
    }
`;
const NS = styled.div`
    width:100%;
    >h4{
        padding:8px;
        font-size: 22px;
        font-weight:800;
        width:100%;
        background-color: #40464b;
        color:white;
        >span{
            font-size:18px;
            font-weight:500;
            margin-left:5px;
        }
    }
`;



export default Buckets;

const BucketContainer = styled.div`
    color:grey;
    /* border: 1px solid black; */
    width:100%;
    cursor: pointer;
    display:flex;
    align-items:center;
      

    
`;

