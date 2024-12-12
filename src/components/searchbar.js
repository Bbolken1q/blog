import React from "react"

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
                }
            }
          }); 
        
    }
    render() {
        return(
            <input id="search" className="searchbar" placeholder="  Press L to jump to searchbox"/>
        )
    }
}


export {searchbar}