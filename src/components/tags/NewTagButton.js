import React from "react"
import { Button } from "react-bootstrap"

export default (props) => {
    return (
        <Button onClick={props.action}>
            Add Tag
        </Button>
    )
}