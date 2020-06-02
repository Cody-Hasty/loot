import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="about-page">
                <h1>About Us</h1>
                <p>
                    LOOT is made by a team of four software engineers with a passion for gaming. 
                    It can be found on <a href="https://github.com/Brittany-Hasty/loot">Github</a>, and utilizes the MERN stack (MongoDB, Express, React, and NodeJS)
                    along with AWS.
                </p>
                <h1>The Team</h1>
                <ul>
                    <ul>Brittany Hasty</ul>
                    <ul>Iulia Heinrich</ul>
                    <ul>Eyal Garbi</ul>
                    <ul>Daniel Lancaster</ul>
                </ul>
                <ul>
                    <li>Team Lead: Idea, Design, CSS</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h1>The Mission</h1>
                <p>If you've ever played a video game that is based on crafting 
                    - you've probably needed to make some item using a set of 
                    ingredients. You then have to take that item, and use a 
                    number of them to make some greater object later, but alas 
                    - you already have a few of the items you need- what more 
                    do you need to collect to make that item you want?
                </p>
            </div>
        )
    }
}

export default AboutPage;