import React from "react";
import Greetings from "./greetings";
import Date from "./dateTime";
import Photo from "./profilePhoto";
import Quotes from "./quotes";
class Header extends React.Component {
    render() {
        return (
            <div>
                <Photo />
                < Greetings />
                <Quotes />
                <Date />
            </div>
        )
    }
}
export default Header;
