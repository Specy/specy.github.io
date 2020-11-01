import React, { Component } from 'react'
import SkinContainer from "./SkinContainer";
class ThirdPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <div className="view">
                <div className="title">Your skins</div>
                <SkinContainer 
                    elId={"savedSkins"}
                    search="" 
                    type={this.props.type}
                    addSkin={this.props.addSkin}
                    skins={this.props.skins}
                    removeSkin={this.props.removeSkin}
                />
            </div>
        )
    }
}

export default ThirdPage