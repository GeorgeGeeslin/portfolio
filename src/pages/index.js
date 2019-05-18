import React from "react"
import Layout from "../components/layout"
//import SEO from "../components/seo" TODO: implement this SEO component
import About from "../components/about"
import "../styles/hero.scss"

class IndexPage extends React.Component {
  state = {
    headerSolid: false,
    wittyLine: "",
  }

  componentWillMount() {
    let wittyRemarks = [
      "And I hope hero images are still cool.",
      "I make stuff for the internet.",
      "I'm a web developer.",
      "Welcome to my website.",
      "This message was chosen at random.",
      "I shaved this yak for you.",
    ]

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }

    let randomIndex = getRandomInt(wittyRemarks.length)

    this.setState({ wittyLine: wittyRemarks[randomIndex] })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    let scrolled = document.documentElement.scrollTop
    let navHeight = document.getElementsByTagName("nav")[0].scrollHeight

    document.getElementById("heading").style.top = scrolled + "px"

    document.getElementById("heading").style.opacity =
      1 - (scrolled + 400) / window.innerHeight

    document.getElementById("line1").style.top = -(scrolled * 0.0575) + "px"

    document.getElementById("line3").style.top = scrolled * 0.0575 + "px"

    document.getElementById("line2").style.wordSpacing =
      0.25 + scrolled * 0.1 + "px"

    if (scrolled === 0) {
      document.getElementById("heading").style.opacity = 1
    }

    if (
      scrolled >= window.innerHeight - (navHeight + 50) &&
      this.state.headerSolid === false
    ) {
      this.setState({ headerSolid: true })
    }

    if (
      scrolled < window.innerHeight - (navHeight + 50) &&
      this.state.headerSolid === true
    ) {
      this.setState({ headerSolid: false })
    }
  }

  render() {
    return (
      <Layout headerSolid={this.state.headerSolid} path="index">
        <div id="hero">
          <h1 id="heading">
            <span id="line1">Hi, I'm</span>
            <br />
            <span id="line2" style={{ fontSize: "1.5em" }}>
              George Geeslin
            </span>
            <br />
            <span id="line3">{this.state.wittyLine}</span>
          </h1>
          <div id="sky">
            <div className="stars" id="stars1" />
            <div className="stars" id="stars2" />
            <div className="stars" id="stars3" />
            <div className="stars" id="stars4" />
            <div className="stars" id="stars5" />
            <div className="stars" id="stars6" />
          </div>
        </div>

        <About />
      </Layout>
    )
  }
}

export default IndexPage
