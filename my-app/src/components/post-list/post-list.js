import { ListGroup } from "react-bootstrap"

import PostListItem from "../post-list-item/post-list-item"
import "./post-list.css"

function PostList({ posts, onDelete, onToggleImportant, onTogglelike }) {
  const elements = posts.map(({ label, key, important, like }) => (
    <li key={key} className="list-group-item">
      <PostListItem
        label={label}
        important={important}
        like={like}
        onDelete={() => {
          onDelete(key)
        }}
        onToggleImportant={() => {
          onToggleImportant(key)
        }}
        onTogglelike={() => {
          onTogglelike(key)
        }}
      />
    </li>
  ))

  return <ListGroup className="app-list">{elements}</ListGroup>
}

export default PostList
