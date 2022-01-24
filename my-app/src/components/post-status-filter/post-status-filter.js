import "./post-status-filter.css"
import { Button } from "react-bootstrap"
import { Component } from "react"

export default class PostStatusFilter extends Component {
  buttons = [
    { name: "all", label: "Все" },
    { name: "like", label: "Понравилось" },
  ]
  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name
      const btnClass = active ? "info" : "outline-secondary"
      return (
        <Button
          key={name}
          variant={btnClass}
          onClick={() => {
            this.props.onFilterSelect(name)
          }}
        >
          {label}
        </Button>
      )
    })
    return <div className="btn-group">{buttons}</div>
  }
}
