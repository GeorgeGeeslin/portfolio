import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  state = {
    headerSolid: false,
    wittyLine: "",
  }

  componentWillMount() {
    let wittyRemarks = [
      "And I hope hero images are still cool",
      "I shaved this yak for you",
      "I make stuff for the internet",
      "I'm a web developer",
      "I centered this div all by myself",
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
      <Layout headerSolid={this.state.headerSolid}>
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
        </div>
        <div
          id="about"
          style={{
            /*height: "100vh",*/ paddingLeft: "5em",
            paddingRight: "5em",
          }}
        >
          <h1 align="center">About Me</h1>
          <div className="about-image-container">{/*  <Image /> */}</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            id fermentum lectus. Quisque laoreet, libero sed rhoncus hendrerit,
            ante leo auctor justo, nec lobortis eros est sit amet nunc.
            Vestibulum ultrices volutpat urna, id interdum libero tincidunt at.
            Nullam ornare iaculis lacus eu sollicitudin. Nulla laoreet sodales
            massa sit amet porttitor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nam in nisi ante. Morbi finibus et erat et semper.
          </p>
          <p>
            Quisque tristique lorem et fringilla pharetra. Nullam tristique
            interdum suscipit. Nam ultrices enim porta, bibendum quam sit amet,
            dignissim orci. Sed pellentesque velit at nulla eleifend ultricies.
            In finibus eget nunc nec cursus. Vivamus non dolor scelerisque,
            sagittis nunc sed, lobortis lectus. Duis eget justo at eros mattis
            dapibus. Nunc rutrum luctus rutrum. Duis ante purus, ornare in
            maximus quis, malesuada nec diam. Praesent nisi velit, auctor et dui
            a, efficitur sollicitudin arcu.
          </p>
          <p>
            Cras ultricies, turpis et eleifend interdum, urna libero cursus
            elit, vel interdum nisi nibh sed mauris. Praesent a vehicula felis,
            et hendrerit diam. In hac habitasse platea dictumst. Nam rutrum, leo
            nec sollicitudin condimentum, nisl mauris accumsan leo, ut fringilla
            sem velit et nibh. Nullam volutpat lacus nec urna feugiat, non
            eleifend magna mattis. Ut ornare justo ac dolor ultrices, et
            eleifend tortor interdum. Suspendisse vel tellus nisl. Suspendisse
            in porta enim, quis dictum purus. Fusce nec sapien dolor. Mauris
            elementum luctus eros, at imperdiet risus ultricies semper. Nulla
            vulputate cursus mi, non vulputate nunc tempus eu. Cras at interdum
            turpis. Duis dictum et felis tincidunt pharetra. Nunc feugiat neque
            nec tellus consectetur, sodales dignissim neque pharetra. Aenean
            elementum elementum mauris a luctus. Phasellus suscipit nec tellus
            interdum mattis.
          </p>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
