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
        this.getLink()
        window.mainContent = this
    }

    getLink(text = null) {
        const linkParams = new URLSearchParams(document.location.search)
            this.postId = linkParams.get("p")

            if(this.postId == null) {
                this.postId = "main"
            }

            if(text) {
                this.postId = text
            }

            switch(this.postId) {
                case "home": 
                case "main": 
                    this.postId = getPostElements()
                    break;
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
                    }
                }
            }
    }

    changePage(text = null) {
        

        if(text) {
            this.getLink(text)
        }

        let mainContent = document.getElementById("mainContent");
        
        ReactDOM.unmountComponentAtNode(mainContent) // unmount so you can go to the homepage again

        if (Array.isArray(this.postId)) {
            setTimeout(() => {
                ReactDOM.render(this.postId, mainContent);
            }, 1);
        } else if (this.postId instanceof HTMLElement) {
            mainContent.appendChild(this.postId);
        } else {
            setTimeout(() => {
                mainContent.innerHTML = this.postId;
            }, 1);
        }
    }

    componentDidMount() {
        this.changePage()
    }

    render() {
        return <div className='mainContent' id='mainContent'></div>
    }

}

export default MainContent