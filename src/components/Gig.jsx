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

const Gig = () => {
    return (
        <div className="gig-container">
            <h3 className="bandname">Bastille</h3>
            <img className="bandimage" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmotivatetalent.com%2Ftalents%2Fbastille%2F&psig=AOvVaw0kbJiHXvbqgLbNZOu1AF91&ust=1732380026816000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC6otKw8IkDFQAAAAAdAAAAABAE"></img>
            <p className="description">A sunny festival in a theme park!</p>
            <p className="datetime">12pm on 29/02/2020</p>
            <p className="location">Dreamland, Margate</p>
        </div>
    );
};

export default Gig;