import React from 'react';
import { Action } from './action';
import getContributedRepos from './githubActionGetter'; 

class actionClass {
    constructor(component, text, repo) {
        this.component = component
        this.text = text.substring(text.indexOf(' ') + 1)
        this.repo = repo
    }
}

class ActionContainer extends React.Component {
    constructor() {
        super()
        this.actions = []
        this.actionComponents = []
        window.actionContainer = this //define global variable to add actions to
        // this.addMessage("ASDFG", "Ohiomod")
        this.commits = getContributedRepos("Bbolken1q")
        Promise.all([this.commits]).then(values => {
            console.log("promise resolved")
            for(let i in values[0]) {
                
                this.addMessage(this.commits[i].message, this.commits[i].repo)
            }
        })
        
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

    addMessage(text, repo) {
        var action = new actionClass(<Action actiontext={text} repo={repo}/>, text, repo)
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