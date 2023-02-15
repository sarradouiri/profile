import React from 'react';
import Profile from './component/Profile';
import img from './assets/image.jpg';


export default function App () {
  var Nom="sarra";
  var prenom="douiri";
  var age= 29;
  var profession="webdesigner";
  var bio="loremipsumloremipsumloremipsumloremipsumloremipsumloremipsum";
  const msg=(x) =>{
   alert (x) 
  }
  return (
    <div>
  <Profile Nom={Nom} prenom={prenom}age={age}  profession={profession}bio={bio} >
    <img src={img} onMouseEnter={() => msg("voici votre photo de profile")} style={{width:'50%' , height:'50%'}}/>
    
  </Profile>
  
    </div>
  );
}


