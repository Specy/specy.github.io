import React, { Component } from 'react'
import Skin from "./skin"
import InfiniteScroll from "react-infinite-scroll-component";
class SkinContainer extends Component {
    constructor(props) {
        super(props)
        this.skinsPerPage = 20
        this.state = {
            skins: [],
            search: ""
        }
        this.currentIndex = 0
    }
    getPage = () => {
        let skins = this.state.skins
        if(this.props.skins.length === 0) return
        if(this.props.skins.length < this.skinsPerPage){
            this.setState({
                skins: this.props.skins,
                search: this.props.search
            })
            return
        }
        if(this.props.dontRandomize){
            this.setState({
                skins: this.props.skins,
                search: this.props.search
            })
            return
        }
        for(let i = 0; i<this.skinsPerPage; i++){
            let random = Math.floor(Math.random() * this.props.skins.length)
            this.currentIndex++
            let randomSkin = this.props.skins[random]
            skins.push(randomSkin)
        }
        this.setState({
            skins: skins,
            search: this.props.search
        })
    }
    render() {
        if(this.state.skins.length === 0) this.getPage()
        if(this.state.search !== this.props.search) this.getPage()

        return(
                <div id={this.props.elId}   className="skinsHolder  scroll-bar">
                    <InfiniteScroll
                        className="infiniteScroll"
                        dataLength={this.state.skins.length}
                        hasMore={true}
                        next={this.getPage}
                        scrollableTarget={this.props.elId}
                    >
                        {this.state.skins.map((skin,i) => {
                            return <Skin 
                                skin={skin}
                                key={i}
                                type={this.props.type}
                                addSkin={this.props.addSkin}
                                removeSkin={this.props.removeSkin}
                            />

                        })}
                    </InfiniteScroll>
                </div>
        )
    }
}

export default SkinContainer