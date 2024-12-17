import React from "react";


const returnActionIcon = (action) => {
    switch(action) {
        case "pull_request":
            return "";
        case "push":
            return "";
        case "issues":
            return "";
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props)

        // this.messageId = new messageid
        this.userid = this.props.userid
    }
    render()
    {
        this.state.text = this.props.text

        return(
            <div className="action">
                action
            </div>
        )
    }
}

export { Action };