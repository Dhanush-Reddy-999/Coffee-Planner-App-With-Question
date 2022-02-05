import './index.css'
import {Component} from 'react'
import QuestionOption from '../QuestionOption'

class CoffeePlannerQuestion extends Component {
  state = {
    checkId: -1,
  }

  optionSelectedCount = selectedId => {
    this.setState({
      checkId: selectedId,
    })
    const {onSelection} = this.props
    const {optionsList} = this.props
    optionsList.map(eachItem =>
      eachItem.id === selectedId
        ? onSelection(selectedId, eachItem.optionTitle)
        : null,
    )
  }

  render() {
    const {questionTitle, optionsList} = this.props
    const {checkId} = this.state
    return (
      <li className="question-container" type="none">
        <h1 className="question-title">{questionTitle}</h1>
        <ul className="options">
          {optionsList.map(eachItem =>
            eachItem.id === checkId ? (
              <QuestionOption
                optionTitle={eachItem.optionTitle}
                description={eachItem.description}
                key={eachItem.id}
                optionSelectedCount={this.optionSelectedCount}
                Selected="true"
                id={eachItem.id}
              />
            ) : (
              <QuestionOption
                optionTitle={eachItem.optionTitle}
                description={eachItem.description}
                key={eachItem.id}
                optionSelectedCount={this.optionSelectedCount}
                Selected="false"
                id={eachItem.id}
              />
            ),
          )}
        </ul>
      </li>
    )
  }
}

export default CoffeePlannerQuestion
