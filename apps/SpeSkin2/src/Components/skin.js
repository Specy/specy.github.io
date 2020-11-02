import React, { Component } from "react"

class Skin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skin: this.props.skin,
            nameShown: false,
        }

        if (this.props.type === "gallery") {
            this.addSkin = this.props.addSkin.bind(this, this.props.skin)
        } else {
            this.removeSkin = this.props.removeSkin.bind(this, this.props.skin)
        }
    }
    toggleName = () => {
        this.setState({
            nameShown: true,
        })
    }
    hideName = () => {
        this.setState({
            nameShown: false,
        })
    }
    render() {
        let skinName = this.props.skin
        let skin = "https://gamedata.gota.io/skins/" + skinName + ".png"
        let isGallery = this.props.type === "gallery"
        return (
            <div
                className="skinWrapper"
                onMouseOver={this.toggleName}
                onMouseLeave={this.hideName}
                onClick={this.toggleName}
            >
                <div className={this.state.nameShown ? "skinText" : "skinText hidden"}>
                    {skinName}
                </div>
                <img src={skin} alt={skinName} className="skinImg"></img>
                <div className="buttonsHolder">
                    <button
                        className={isGallery ? "skinBtn green" : "skinBtn red"}
                        onClick={isGallery ? this.props.addSkin : this.props.removeSkin}
                    >
                        {isGallery ? "+" : "-"}
                    </button>
                </div>
            </div>
        )
    }
}

export default Skin
