import React from 'react'
import ReactDOM from 'react-dom'
import PostElement from './posts';
var posts = require("../assets/blog.json")

function getPostElements() {
    
    let postElements = []
    for(let i in posts.posts) {
        postElements.push(<PostElement post={i}/>)
    }

    return postElements
}

class MainContent extends React.Component {
    constructor(params) {
        super(params)
        // this.getLink()
        window.mainContent = this
    }

    getLink(text = null) {
        const linkParams = new URLSearchParams(document.location.search);
            this.postId = linkParams.get("p");

            if(text) {
                this.postId = text
            }

            switch(this.postId) {
                case "about":
                case "post":
                case "contact":
                case "links": 
                    this.postId = posts[this.postId]
                    break;
                case "home": 
                case "main": 
                    this.postId = getPostElements()
                    console.log(this.postId)
                    break;
                default: {
                    this.postId = +this.postId
                    if(isNaN(this.postId))
                    {
                        this.postId = "invalid"
                    }
                    else {
                        this.postId = posts.posts[this.postId]
                    }
                }
            }
    }

    changePage(text = null) {

        if(text) {
            this.getLink(text)
        }

        let mainContent = document.getElementById("mainContent");
        
        // If postId is a single React component or an array of React components
        if (Array.isArray(this.postId)) {
            // Render the array of React components
            setTimeout(() => {
                ReactDOM.render(this.postId, mainContent);
            }, 1);
        } else if (this.postId instanceof HTMLElement) {
            // If it's an HTML element, append it to mainContent
            mainContent.appendChild(this.postId);
        } else {
            // If it's a normal HTML content (string), set it as innerHTML
            setTimeout(() => {
                mainContent.innerHTML = this.postId;
            }, 1);
        }
    }

    componentDidMount() {
        this.changePage()
    }

    render() {
        return <div className='mainContent' id='mainContent'></div> // <PostElement post="1"/>
        // return <div className='mainContent' dangerouslySetInnerHTML={{__html: this.postId}}></div>
    }

}

export default MainContent