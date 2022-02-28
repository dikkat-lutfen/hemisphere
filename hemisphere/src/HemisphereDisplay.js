import React from "react";
import northernPic from './Northern.png';
import southernPic from './Southern.jpg';
import './Hemisphere.css'



const hemisphereConfig={
    Northern: {
        text:'It is northern hemisphere',
        picture: northernPic

    },
    Southern: {
        text:'İt is southern semisphere',
        picture: southernPic
    }
}


const HemisphereDisplay= ({latitude}) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const{ text,picture}= hemisphereConfig[hemisphere];
    return (

        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img  src={picture} alt="hemisphere picture1"/> 
                </div>         
                <div className="ui teal bottom attached label">
                   <h1> {text}</h1>
                </div>
           </div>
        </div>
    )
}
export default HemisphereDisplay;