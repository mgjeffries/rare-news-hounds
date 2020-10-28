import React, { useContext } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { ConfirmableDeleteButton } from "../posts/ConfirmableDeleteButton" // confirmable delete button
import { CommentContext } from "./CommentProvider"

export const Comment = props => {
  const { comment } = props
  const { id, content, post_id, user_id, user } = comment

  const { deleteComment } = useContext(CommentContext)

  return (
    <Row>
      <Col sm="8">
        <p className="font-weight-bold">{user.username}</p>
        <p>{content}</p>
      </Col>
      {
        parseInt(localStorage.getItem("rare_user_id")) === user_id && (
          <Col sm="4">
            <ConfirmableDeleteButton onDelete={() => deleteComment(id, post_id) } />
          </Col>
        )
      }
    </Row>
  )
}