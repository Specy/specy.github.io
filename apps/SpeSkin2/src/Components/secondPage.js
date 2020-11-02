import React, { Component } from 'react'
import SkinContainer from "./SkinContainer";
class SecondPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="view">
                <div className="title">Gallery</div>
                <SkinContainer
                    elId={"gallery"}
                    search=""
                    skins={this.props.skins}
                    addSkin={this.props.addSkin}
                    type={this.props.type}
                    removeSkin={this.props.removeSkin}
                />
            </div>
        )
    }
}

export default SecondPage