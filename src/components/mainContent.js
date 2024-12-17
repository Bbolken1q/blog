import React from 'react'
var posts = require("../assets/blog.json")

class MainContent extends React.Component {
    // constructor(params) {
    //     super(params)
    // }
    render() { 
        return <div className='mainContent' dangerouslySetInnerHTML={{__html: posts.posts[0]}}></div>
    }

}

export default MainContent