import { Component } from "react"

import Header from "../Header"
import Demo1 from "../Demo1"
import Demo2 from "../Demo2"
import Demo3 from "../Demo3"

import "./index.css"

const demosList = [
  {
    id: "DEMO1",
    displayText: "Demo 1",
  },
  {
    id: "DEMO2",
    displayText: "Demo 2",
  },
  {
    id: "DEMO3",
    displayText: "Demo 3",
  },
]

class Home extends Component {
  state = { activeDemo: "" }

  onToggleActiveDemo = (event) => {
    const { id } = event.currentTarget
    this.setState({ activeDemo: id })
  }

  renderDemo = () => {
    const { activeDemo } = this.state
    switch (activeDemo) {
      case "DEMO1":
        return <Demo1 />
      case "DEMO2":
        return <Demo2 />
      case "DEMO3":
        return <Demo3 />
      default:
        return null
    }
  }

  render() {
    const { activeDemo } = this.state
    return (
      <div className="home-container">
        <div className="home-body">
          <Header />
          <div className="main">
            <ul className="demos-header-container">
              {demosList.map((each) => (
                <button
                  className={`demo-button ${
                    activeDemo === each.id ? "active-demo" : ""
                  }`}
                  type="button"
                  onClick={this.onToggleActiveDemo}
                  key={each.id}
                  id={each.id}
                >
                  <li className="demo-heading">{each.displayText}</li>
                </button>
              ))}
            </ul>
            <div className="demo-container">{this.renderDemo()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
