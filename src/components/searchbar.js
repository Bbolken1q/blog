import React from "react"
var lang = require('../assets/lang_english.json')

class searchbar extends React.Component {
    constructor() {
        super()
        window.addEventListener('keyup', function(event) {
            // if(event.repeat) {return}
            event.preventDefault()
            let search = this.document.getElementById("search")
            if (event.keyCode === 76) {
                // console.log(this.document.activeElement)
                    search.focus();
            }
            else if(event.keyCode === 13) {
                if(this.document.activeElement === search) {
                    console.log(search.value)
                    const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(search.value)}`
                    this.window.location.href = searchUrl
                }
            }
          }); 
        
    }
    render() {
        return(
            <input id="search" className="searchbar" placeholder={lang.search.search} />
        )
    }
}


export {searchbar}