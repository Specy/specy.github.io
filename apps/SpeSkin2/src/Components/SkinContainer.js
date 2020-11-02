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
        if(this.props.dontRandomize){
            for (let i = 0; i < this.skinsPerPage; i++) {
                if(this.currentIndex + 1 > this.props.skins.length) break
                this.state.skins.push(this.props.skins[this.currentIndex])
                this.currentIndex++
            }
            this.setState({
                skins: this.state.skins,
                search: this.props.search
            })
            return
        }
        for(let i = 0; i<this.skinsPerPage; i++){
            let random = Math.floor(Math.random() * this.props.skins.length)
            this.currentIndex++
            if (this.props.skins.length === 0) break
            let randomSkin = this.props.skins[random]
            this.props.skins.splice(random,1)
            skins.push(randomSkin)
        }

        this.setState({
            skins: skins,
            search: this.props.search
        })
    }
    render() {
        if(this.state.skins.length === 0) this.getPage()
        //if(this.state.search !== this.props.search) this.getPage()

        return(
                <div id={this.props.elId}   className="skinsHolder  scroll-bar">
                    <InfiniteScroll
                        className="infiniteScroll"
                        dataLength={this.state.skins.length}
                        hasMore={true}
                        scrollThreshold= {0.99}
                        next={this.getPage}
                        scrollableTarget={this.props.elId}
                    >
                        {this.state.skins.map((skin,i) => {
                            return <Skin 
                                skin={skin}
                                key={skin+"_key"+i}
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