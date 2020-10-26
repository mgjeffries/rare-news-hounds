import React, {useContext, useEffect, useRef} from "react"
import { Form, FormGroup } from "react-bootstrap";
import { CategoryContext } from "../categories/CategoryProvider";
import { PostContext } from "./PostProvider";


export default (props) => {
    const {categories, getCategories} = useContext(CategoryContext)
    const {getPosts, getPostsByCategoryId} = useContext(PostContext)

    useEffect(()=> {
        getCategories()
    }, [])

    const categoryRef = useRef('')
    const filterByCategory = (value) => {
        if (value === "0"){
            getPosts()
        } else {
        getPostsByCategoryId(value)
    }
    }

    return (
        <FormGroup controlId="categorySelect">
        <Form.Label>Filter categories</Form.Label>
            <Form.Control as="select" ref={categoryRef} onChange={evt => {
                evt.preventDefault()
                filterByCategory(categoryRef.current.value)
            }}>
            <option value ="0">Select a category</option>
            {categories.map(c => (
                <option key={c.id} value={c.id}>
                    {c.name}
                </option>
            ))}
            </Form.Control>
        </FormGroup>
    )
}