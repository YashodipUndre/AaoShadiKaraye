
import { useState } from 'react';
import './CSS/App.css';
import  {NavBar,MainDiv, SideMenu} from './Lander';

function App() {
  const [SMBDSIZE,setSMBDSIZE] = useState("0px");
  function SideMenuLoader(){
    if(SMBDSIZE=="0px"){
      setSMBDSIZE("200px");
    }
    else if(SMBDSIZE=="200px"){
      setSMBDSIZE("0px");
    }
  }
  return (
   <>
   <NavBar onClick={SideMenuLoader}></NavBar>
   <SideMenu SIZEGETTER={SMBDSIZE}></SideMenu>
   <MainDiv></MainDiv>
   </>
  );
}

export default App;
