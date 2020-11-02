import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SwipeableViews from 'react-swipeable-views';
import './specy.css';
import './index.css';
import Mainpage from './Components/mainPage'
import SecondPage from './Components/secondPage'
import ThirdPage from './Components/thirdPage'
import FourthPage from './Components/fourthPage';
class App extends Component {
  constructor() {
    super()
    let savedSkins = localStorage.getItem("savedSkins") === null ? [] : JSON.parse(localStorage.getItem("savedSkins"))
    this.state = {
      loading: true,
      skins: [],
      pageIndex: 0,
      savedSkins: savedSkins,
      searchSkin: "",
      searchSkins: []
    }

  }
  componentDidMount() {
    this.getSkins()
  }
  getSkins = async () => {
    let skins = []
    let localStorageSkins = localStorage.getItem("gameSkins")
    localStorageSkins = localStorageSkins === null ? [] : JSON.parse(localStorageSkins)
    if (localStorageSkins.length !== 0) {
      this.setState({
        skins: localStorageSkins,
        loading: false
      })
    } else {
      skins = await fetch("https://cors-anywhere.herokuapp.com/https://gamedata.gota.io/skinData.php").then(data => data.json())
      skins = JSON.parse(skins.names)
      this.setState({
        skins: skins,
        loading: false
      })
    }
    skins = await fetch("https://cors-anywhere.herokuapp.com/https://gamedata.gota.io/skinData.php").then(data => data.json())
    skins = JSON.parse(skins.names)
    if (skins.length > localStorageSkins.length) {
      localStorage.setItem("gameSkins", JSON.stringify(skins))
      console.log("updated")
    }
  }
  addskin = (skin) => {
    skin = skin.target.parentElement.parentElement.querySelector(".skinText").innerText
    let skins = this.state.savedSkins
    if (skins.includes(skin)) return
    skins.push(skin)
    localStorage.setItem("savedSkins", JSON.stringify(skins))
    this.setState({
      savedSkins: skins
    })
  }
  importSkinArr = (skinArr) => {
    let skins = this.state.savedSkins
    skinArr.forEach(skin => {
      if (!skins.includes(skin)) skins.push(skin)
    })
    this.setState({
      savedSkins: skins
    })
    localStorage.setItem("savedSkins", JSON.stringify(skins))
    this.setState({
      savedSkins: skins
    })
  }
  removeSkin = (skin) => {
    skin = skin.target.parentElement.parentElement.querySelector(".skinText").innerText
    let skins = this.state.savedSkins
    let index = skins.indexOf(skin)
    if (index === -1) return
    skins.splice(index, 1)
    localStorage.setItem("savedSkins", JSON.stringify(skins))
    this.setState({
      savedSkins: skins
    })
  }
  search = (skinName) => {
    if (skinName.length === "") return
    let allSkins = this.state.skins
    let regExp = new RegExp("^\\d*" + skinName + "\\d*$")
    allSkins = allSkins.filter(skin => regExp.test(skin))

    //I have no idea what this does
    allSkins.sort((a, b) => a.localeCompare(b, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true }))
    this.setState({
      searchSkin: skinName,
      searchSkins: allSkins
    })
  }
  changePageIndex = (index) => {
    this.setState({
      pageIndex: index,
    });
  };
  render() {
    let navClass = "navItem dm-L1"
    let selNav = "navItem selectedTab"
    let index = this.state.pageIndex
    return (
      <div>
        <div className="navbar dm-L3">
          <button className={index === 0 ? selNav : navClass} onClick={this.changePageIndex.bind(this, 0)}>Discover</button>
          <button className={index === 1 ? selNav : navClass} onClick={this.changePageIndex.bind(this, 1)}>Gallery</button>
          <button className={index === 2 ? selNav : navClass} onClick={this.changePageIndex.bind(this, 2)}>Your skins</button>
          <button className={index === 3 ? selNav : navClass} onClick={this.changePageIndex.bind(this, 3)}>Other</button>
        </div>
        {this.state.loading ? <div className="title text-white">Loading...</div> : <div></div>}
        <SwipeableViews index={index} onChangeIndex={this.changePageIndex} className="slider">
          <Mainpage
            skins={this.state.searchSkins}
            search={this.search}
            key={this.state.searchSkin}
            searchName={this.state.searchSkin}
            addSkin={this.addskin} type="gallery"
          />
          <SecondPage
            skins={this.state.skins}
            addSkin={this.addskin}
            type="gallery"
          />
          <ThirdPage
            skins={[...this.state.savedSkins]}
            key={this.state.savedSkins.length}
            removeSkin={this.removeSkin}
            type="savedSkins" />
          <FourthPage
            importSkinArr={this.importSkinArr}
          />
        </SwipeableViews>
      </div>

    )
  }
}

// ========================================

ReactDOM.render(< App />, document.getElementById("root"));