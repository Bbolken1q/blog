import React from "react"
import tooLong from './maxTextWidth';

var posts_json = require("../assets/blog.json")

class PostElement extends React.Component {
    
    constructor(props) {
        super(props)
        this.ref = React.createRef()
        var str = posts_json.posts[0]
        this.title = str.split('<h2>').pop().split('</h2>')[0]
        this.textContent = str.split('</h2>').pop()
        this.textContent = this.textContent.replace(/<.*?>/g, '')
        console.log(this.textContent)
        
    }

    update = () => {
        console.log(this.ref.current.offsetWidth)
        this.sub = tooLong(this.textContent, null, this.ref.current.offsetWidth - 150, 13) 
        this.setState({}) 
    }

    componentDidMount() {
        console.log("width: "+ this.ref.current.offsetWidth)
        
        this.update()

        window.addEventListener('resize', this.update);
    }

    render() {
        return (
            <div className="post">
                <div className="title">{this.title}</div>
                <div className="subtext">{this.sub}</div>
            </div>
        )
    }
    
}

export default PostElement