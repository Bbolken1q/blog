import React from 'react'
var lang = require('../assets/lang_english.json')

function Navbar() {
    return(
        <div className="navbar">
            <ul>
                <li><span/><span/><span/><span/><a onClick={window.mainContent.changePage("main")}>{lang.nav.home}</a></li>
                <li><span/><span/><span/><span/><a onClick={window.mainContent.changePage("about")}>{lang.nav.about}</a></li>
                <li><span/><span/><span/><span/><a href="/?p=links">{lang.nav.links}</a></li>
                <li><span/><span/><span/><span/><a href="/?p=post">{lang.nav.posts}</a></li>
                <li><span/><span/><span/><span/><a href="/?p=contact">{lang.nav.contact}</a></li>
            </ul>
        </div>
    )
}

export default Navbar