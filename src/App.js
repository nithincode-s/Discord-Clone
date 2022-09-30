import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Chat from './components/Chat';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login } from './features/userSlice';
import RightSideBar from './components/RightSideBar';


function App() {
  const userobject = useSelector(selectUser);
  const dispatch = useDispatch();
  // console.log(userobject);

  useEffect(() => {
    auth.onAuthStateChanged(async (userobject) =>{
      if(userobject){
          dispatch(login({
            username: userobject.displayName,
            photo: userobject.photoURL,
            id: userobject.uid,
            email: userobject.email
          }));
      }
    })
      
  }, [dispatch])


  return (
    <MainContainer>
      { userobject ? 
        (
          <>
            <Sidebar/>
            <Chat/>
            {/* <RightSideBar/> */}
          </>
        ):
        (
          <Login/>
        )
      }
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display:flex;
`;
