import React from 'react'
var lang = require('../assets/lang_english.json')

function Navbar() {
    return(
        <div className="navbar">
            <ul>
                <li><span/><span/><span/><span/><a href="/">{lang.nav.home}</a></li>
                <li><span/><span/><span/><span/><a href="/">{lang.nav.about}</a></li>
                <li><span/><span/><span/><span/><a href="/">{lang.nav.links}</a></li>
                <li><span/><span/><span/><span/><a href="/">{lang.nav.posts}</a></li>
                <li><span/><span/><span/><span/><a href="/">{lang.nav.contact}</a></li>
            </ul>
        </div>
    )
}

export default Navbar