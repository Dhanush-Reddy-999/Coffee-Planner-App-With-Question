import './index.css'
import {Component} from 'react'

class QuestionOption extends Component {
  onOptionSelect = () => {
    const {optionSelectedCount, id} = this.props
    optionSelectedCount(id)
  }

  render() {
    let isSelected = false
    const {optionTitle, description, Selected} = this.props
    if (Selected === 'true') {
      isSelected = true
    }
    const whiteCupUrl =
      'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'
    const blueCupUrl =
      'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
    return (
      <li type="none">
        <button
          type="button"
          className={
            isSelected
              ? 'option-container-selected'
              : 'option-container-unselected'
          }
          onClick={this.onOptionSelect}
        >
          <div className="option-title-container">
            <span
              className={
                isSelected ? 'option-title-selected' : 'option-title-unselected'
              }
            >
              {optionTitle}
            </span>
            <img
              src={isSelected ? whiteCupUrl : blueCupUrl}
              alt={isSelected ? 'white cup' : 'blue cup'}
              className="cup-image"
            />
          </div>
          <span
            className={
              isSelected ? 'description-selected' : 'description-unselected'
            }
          >
            {description}
          </span>
        </button>
      </li>
    )
  }
}

export default QuestionOption
