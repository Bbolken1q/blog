import React from "react";

class Action extends React.Component {
    // constructor() {
    //     super()
    //     // console.log(this.Component.className)
    // }
    render()
    {
        return(
            <div className="action">
                <h1></h1>
                <span className="repo">{this.props.repo}</span><br/>
                <span className="message">{this.props.actiontext}</span>
            </div>
        )
    }
}

export { Action };