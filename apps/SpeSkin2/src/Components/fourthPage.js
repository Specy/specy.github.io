import React, { Component } from 'react'
class FourthPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exportedSkins: "",
            importedSkins:""
        }
    }
    handleFocus = (e) => e.target.select();
    export = () =>{
        let skins = localStorage.getItem("savedSkins")
        skins = skins === null ? [] : JSON.parse(skins)
        this.setState({
            exportedSkins: skins.join(",")
        })
        
    }
    handleInputChange = (e) => {
        this.setState({
            importedSkins: e.target.value
        })
    }
    sendSkinArr = () => {
        let skinText = this.state.importedSkins
        if(skinText === ""){
            alert("Write some skins first!")
            return
        }
        let skins = skinText.split(",")
        this.props.importSkinArr(skins)
        this.setState({
            importedSkins:""
        })
    }
    render() {
        return(

            <div className="view">
                <div className="importExport">
                    <div className="inputColumn">
                        <button className="button green imexBtn" onClick={this.export}>Export saved skins</button>
                        <textarea placeholder="Your skins will be here"
                            onClick={this.handleFocus}
                            className="skinsInput wm-L2"
                            value={this.state.exportedSkins} 
                            readOnly
                        />
                    </div>
                    <div className="inputColumn">
                        <button className="button darkTeal imexBtn" onClick={this.sendSkinArr}>Import skins</button>
                        <textarea placeholder="Write skins to import here separated by a comma, example: skin1,skin2,skin3"
                            className="skinsInput wm-L2"
                            onChange={this.handleInputChange}
                            value={this.state.importedSkins}
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default FourthPage