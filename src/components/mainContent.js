import React from 'react'
import PostElement from './posts';
var posts = require("../assets/blog.json")

class MainContent extends React.Component {
    constructor(params) {
        super(params)
        const linkParams = new URLSearchParams(document.location.search);
        this.postId = linkParams.get("p");
        switch(this.postId) {
            case "about":
            case "post":
            case "contact":
            case "links": 
                this.postId = posts[this.postId]
                break;
            default: {
                this.postId = +this.postId
                if(isNaN(this.postId))
                {
                    this.postId = "invalid"
                }
                else {
                    this.postId = posts.posts[this.postId]
                    console.log(this.postId)
                }
            }
        }
    }
    render() {
        return <div className='mainContent'><PostElement/></div>
        return <div className='mainContent' dangerouslySetInnerHTML={{__html: this.postId}}></div>
    }

}

export default MainContent