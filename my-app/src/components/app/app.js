import AppHeader from "../app-header/app-header"
import SearchPanel from "../search-panel/search-panel"
import PostStatusFilter from "../post-status-filter/post-status-filter"
import PostList from "../post-list/post-list"
import PostAddForm from "../post-add-form/post-add-form"
import "./app.css"
import { Component } from "react"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          label: "Going to learn React",
          important: false,
          like: false,
          key: 1,
        },
        { label: "That is so good", important: false, like: false, key: 2 },
        { label: "I need a break", important: false, like: false, key: 3 },
      ],
      term: "",
      filter: "all",
    }
    this.lastKey = 4
  }

  deleteItem = (key) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.key !== key),
      }
    })
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      key: this.lastKey++,
    }
    this.setState(({ data }) => {
      const newData = [...data, newItem]
      return {
        data: newData,
      }
    })
  }

  onToggleImportant = (key) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.key === key)
      const oldVal = data[index]
      const newVal = { ...oldVal, important: !oldVal.important }
      return {
        data: [...data.slice(0, index), newVal, ...data.slice(index + 1)],
      }
    })
  }

  onTogglelike = (key) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.key === key)
      const oldVal = data[index]
      const newVal = { ...oldVal, like: !oldVal.like }
      return {
        data: [...data.slice(0, index), newVal, ...data.slice(index + 1)],
      }
    })
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => item.label.indexOf(term) > -1)
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  filterPost = (items, filter) => {
    if (filter === "like") return items.filter((item) => item.like)
    return items
  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { data, term, filter } = this.state
    const liked = data.filter((item) => item.like).length
    const allPosts = data.length

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onTogglelike={this.onTogglelike}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    )
  }
}
