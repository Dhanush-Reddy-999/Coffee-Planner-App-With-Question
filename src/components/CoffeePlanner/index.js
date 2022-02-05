import './index.css'
import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

class CoffeePlanner extends Component {
  state = {
    section0: '',
    section1: '',
    section2: '',
    section3: '',
    section4: '',
    show: false,
    error: false,
  }

  onSelection = (valueId, title) => {
    this.setState({
      show: false,
      error: false,
    })
    if (valueId >= 0 && valueId <= 2) {
      this.setState({
        section0: title,
      })
    } else if (valueId >= 3 && valueId <= 5) {
      this.setState({
        section1: title,
      })
    } else if (valueId >= 6 && valueId <= 8) {
      this.setState({
        section2: title,
      })
    } else if (valueId >= 9 && valueId <= 11) {
      this.setState({
        section3: title,
      })
    } else if (valueId >= 12 && valueId <= 14) {
      this.setState({
        section4: title,
      })
    }
  }

  createPlan = () => {
    const {section0, section1, section2, section3, section4} = this.state
    if (
      section0 !== '' &&
      section1 !== '' &&
      section2 !== '' &&
      section3 !== '' &&
      section4 !== ''
    ) {
      this.setState({
        show: true,
        error: false,
      })
    } else {
      this.setState({
        error: true,
        show: false,
      })
    }
  }

  render() {
    const {coffeePlannerList} = this.props
    const {
      show,
      error,
      section0,
      section1,
      section2,
      section3,
      section4,
    } = this.state

    return (
      <div>
        <div className="top-image-container">
          <div className="text-container">
            <h1>Create a Plan</h1>
            <p>
              We offer an assortment of the best artesian coffees from the globe
              delivered fresh to the door create your plan with me.
            </p>
          </div>
        </div>
        <ul className="bottom-container">
          {coffeePlannerList.map(eachItem => (
            <CoffeePlannerQuestion
              questionTitle={eachItem.questionTitle}
              optionsList={eachItem.optionsList}
              key={eachItem.id}
              onSelection={this.onSelection}
            />
          ))}
        </ul>
        <div className="button-container">
          <button type="button" className="button" onClick={this.createPlan}>
            Create my plan
          </button>
        </div>
        {show ? (
          <div className="result-container">
            <p className="plan-description">
              I Drink my coffee as
              <span className="plan-option">{` ${section0}`}</span>, with a
              <span className="plan-option">{` ${section1} `}</span>
              type of bean.
              <span className="plan-option">{` ${section2} `}</span>
              of
              <span className="plan-option">{` ${section3} `}</span>
              ground, send to me
              <span className="plan-option">{` ${section4}`}</span>.
            </p>
          </div>
        ) : null}
        {error ? (
          <div className="result-container">
            <p className="plan-description">
              Kindly select options for all the questions.
            </p>
          </div>
        ) : null}
      </div>
    )
  }
}

export default CoffeePlanner
