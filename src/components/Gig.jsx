// file: Gig.jsx

// Create a component called Gig, which contains information about a gig on the website. It should contain:

// A h3 (heading) element listing the name of the band
// A img (image) element for an image of the band, using the src attribute to link to an image.
// A p (paragraph) element containing a description of the event
// A p element containing the time and date of the event
// A p element containing the location of the event
// You can come up with the event details yourself.

import React from "react";
import "./Gig.css";

const Gig = (props) => {
    return (
        <div className="gig-container">
            <h3 className="bandname">{props.bandname}</h3>
            <img className="bandimage" src={props.imgsrc} style={{ width: '350px', height: '200px'}}></img>
            <p role="decription" className="description">{props.description}</p>
            <p role="datetime" className="datetime">{props.datetime}</p>
            <p role="location" className="location">{props.location}</p>
        </div>
    );
};

export default Gig;