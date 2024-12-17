import React from 'react'
var posts = require("../assets/blog.json")

class MainContent extends React.Component {
    // constructor(params) {
    //     super(params)
    // }
    render() { 
        return <div className='mainContent' dangerouslySetInnerHTML={{__html: posts.links}}></div>
    }

}

export default MainContent