import React from 'react';
import { Action } from './action';

class actionClass {
    constructor(component, action, text) {
        this.component = component
        this.action = action
        this.text = text.substring(text.indexOf(' ') + 1)
    }
}

class ActionContainer extends React.Component {
    constructor() {
        super()
        this.actions = []
        this.actionComponents = []
        window.actionContainer = this //define global variable to add actions to
    }

    update(scroll = false) {
        this.actionComponents = []

        // this.actions.every((e) => {
        //     console.log("asdf")
        //     this.actionComponents.push(e.component)
        //     return 0;
        // })

        for(let i in this.actions) {
            this.actionComponents.push(this.actions[i].component)
        }

        this.setState({})

        if(scroll) {
            setTimeout(function (){
                var actions = document.getElementById("actions");
                // console.log(actions.scrollTop)
                // console.log(actions.scrollHeight)
                actions.scrollTo({
                    top:  actions.scrollHeight,
                    left: 0,
                    behavior: "instant",
                  });
            }, 1)
        }
    }

    addMessage(text, type) {
        var action = new actionClass(<Action actiontext={text} actiontype={type} edited={false}/>, type, text)
        this.actions.push(action)

        this.update()
    }

    render() {
        return(
            <div className='ActionContainer' id='actions'>{this.actionComponents}</div>
        )
    }
}
export { ActionContainer }