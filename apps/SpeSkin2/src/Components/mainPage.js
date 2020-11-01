import React, { Component } from 'react'
import SkinContainer from "./SkinContainer";
class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSearch:""
        }
    }
    updateSeries = (e) => {
        this.setState({
            currentSearch: e.target.value.toLowerCase()
        })
    }

    render() {
        return(
            <div className="view">
                <div className="series">
                    <div className="searchRow">
                        <input 
                            type="text" 
                            className="searchInput wm-L1" 
                            placeholder="Skin name" 
                            onBlur={this.updateSeries}
                        />
                        <button 
                            className="searchBtn wm-L1"
                            onClick={this.props.search.bind(this,this.state.currentSearch)}
                        >
                            🔍
                        </button>
                    </div>
                </div>
                <SkinContainer
                    dontRandomize={true}
                    search={this.props.searchName}
                    elId={"search"} 
                    skins={this.props.skins}
                    addSkin={this.props.addSkin}
                    type={this.props.type}
                    removeSkin={this.props.removeSkin}
                />
            </div>
        )
    }
}

export default MainPage