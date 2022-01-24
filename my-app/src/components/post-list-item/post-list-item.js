import { Component } from "react"
import "./post-list-item.scss"

export default class PostListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onTogglelike,
      onToggleImportant,
      important,
      like,
    } = this.props
    let classNames = "app-list-item d-flex justify-content-between"

    if (important) {
      classNames += " important"
    }

    if (like) {
      classNames += " like"
    }

    return (
      <div className={classNames}>
        <span
          className="app-list-item-label"
          role="button"
          onClick={onTogglelike}
        >
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fas fa-star" />
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="far fa-trash-alt" />
          </button>
          <i className="fas fa-heart" />
        </div>
      </div>
    )
  }
}
