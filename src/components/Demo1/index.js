import { Component } from "react"

import "./index.css"

class Demo1 extends Component {
  state = { onclickToggle: false, inputFields: 1 }

  onClickBtn = () => {
    this.setState((prevState) => ({
      onclickToggle: !prevState.onclickToggle,
      inputFields: 1,
    }))
  }

  /* Render Input Field Containers */

  renderInputFields = () => {
    const { inputFields } = this.state
    let elementsList = []
    for (let i = 0; i < inputFields; i++) {
      elementsList.push(
        <div className="input-field-container">
          <input type="text" placeholder="College" className="input-field" />
          <input type="text" placeholder="Branch" className="input-field" />
        </div>
      )
    }
    return elementsList
  }

  /* Increase Input Fields */

  increaseInputFields = () => {
    const { inputFields } = this.state
    if (inputFields < 2) {
      this.setState((prevState) => ({
        inputFields: prevState.inputFields + 1,
      }))
    }
  }

  /* Decrease Input Fields */

  decreaseInputFields = () => {
    const { inputFields } = this.state
    if (inputFields > 1) {
      this.setState((prevState) => ({
        inputFields: prevState.inputFields - 1,
      }))
    }
  }

  /* Render Form */

  renderDemoForm = () => {
    const { onclickToggle, inputFields } = this.state

    return onclickToggle ? (
      <>
        {/* Step 2*/}

        <h1 className="step-heading">Step 2</h1>
        <div className="demo-sub-form-container">
          <div className="demo-form-body">
            {this.renderInputFields()}
            <div className="add-remove-btn-container">
              <button
                className="add-remove-btn"
                onClick={this.increaseInputFields}
              >
                Add more
              </button>
              {inputFields > 1 ? (
                <button
                  className="add-remove-btn"
                  onClick={this.decreaseInputFields}
                >
                  remove
                </button>
              ) : null}
            </div>
          </div>
          <button className="button">Save</button>
          <button
            type="button"
            className="back-button button"
            onClick={this.onClickBtn}
          >
            Back
          </button>
        </div>
      </>
    ) : (
      <>
        {/* Step 1 */}

        <h1 className="step-heading">Step 1</h1>
        <div className="demo-sub-form-container">
          <div className="demo-form-body">
            {this.renderInputFields()}
            <div className="add-remove-btn-container">
              <button
                className="add-remove-btn"
                onClick={this.increaseInputFields}
              >
                Add more
              </button>
              {inputFields > 1 ? (
                <button
                  className="add-remove-btn"
                  onClick={this.decreaseInputFields}
                >
                  remove
                </button>
              ) : null}
            </div>
          </div>
          <button type="button" className="button" onClick={this.onClickBtn}>
            Next
          </button>
        </div>
      </>
    )
  }

  render() {
    return <div className="demo-form-container">{this.renderDemoForm()}</div>
  }
}

export default Demo1
