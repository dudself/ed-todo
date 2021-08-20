import React from "react";
import photo from '../../assets/pfp.jpg';

const profilePhoto = () => {
    return (
        < img className="pfp" alt="" src={photo} />
    );
}

export default profilePhoto;