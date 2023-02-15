import React from 'react';

export default function Profile(props) {
    return (
        <div>
            {props.children}
            <p></p>
            Nom : {props.Nom}
          <p>  Prenom : {props.prenom}</p>
           <p> Age : {props.age}</p>
          <p> Proffession : {props.profession}</p>
          <p> Bio : {props.bio}</p>
         
        </div>
    );
}


