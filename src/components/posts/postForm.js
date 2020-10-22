import React from "react"
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
export const PostForm = (props) => {


    return (
        <Form>
            <FormGroup controlId ="Email">
                <Form.Label>Title</Form.Label>
                <Form.Control as="text" placeholder="Enter Title" />
            </FormGroup>
            <FormGroup controlId ="Email">
                <Form.Label>Content</Form.Label>
                <Form.Control as="Textarea" rows={3} placeholder="Enter post..." />
            </FormGroup>
            <FormGroup>
                <Form.Label>Publish Date:</Form.Label>
                <Form.Control type="date" /> 
            </FormGroup>
            <FormGroup controlId ="Email">
                <Form.Label>Image</Form.Label>
                <Form.Control as="Text" placeholder="Image Url" />
            </FormGroup>
            <Button>Submit Post</Button>  
        </Form>    
    )

}