import {Component} from 'react'
import del from "../assets/delete.jpg";
import { ListGroup } from 'react-bootstrap'
import { Component } from "react";



class CommentsList extends Component {

    state = {
        comments: [],
   
    }

    componentDidMount = async () => {
        const url = "https://striveschool-api.herokuapp.com/api/comments/"
        try {
            let response = await fetch(url + this.props.imdbID, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNWRmYmNlYWY0ODAwMTVjOTE5NDYiLCJpYXQiOjE2MjU4MzIwMTMsImV4cCI6MTYyNzA0MTYxM30.yQAL2m_pMwi-2cimzPUpNaT56uC0MyAyMLMPZkqOtLI" 
                }
            })

            let comments = await response.json()

            this.setState({
                comments: comments,
            })
        } catch (error) {
            console.log(error)
            
        }
    }

    componentDidUpdate = async () => {
        if(this.props.updated) {
            try {
                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.imdbID, {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNWRmYmNlYWY0ODAwMTVjOTE5NDYiLCJpYXQiOjE2MjU4MzIwMTMsImV4cCI6MTYyNzA0MTYxM30.yQAL2m_pMwi-2cimzPUpNaT56uC0MyAyMLMPZkqOtLI" 
           }
                })

                let comments = await response.json()
                console.log('test update');

                this.setState({
                    comments: comments
                
                })
            } catch (error) {
                console.log(error)
            
            }
        }
    }

    deleteComment = async (id) => {
        this.setState({...this.state})
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNWRmYmNlYWY0ODAwMTVjOTE5NDYiLCJpYXQiOjE2MjU4MzIwMTMsImV4cCI6MTYyNzA0MTYxM30.yQAL2m_pMwi-2cimzPUpNaT56uC0MyAyMLMPZkqOtLI" 
                }
            })

            if(await response.ok) {
                alert('comment deleted')
                console.log(await response.json().comment);
                this.setState({
                    comments:''
                })
               /*  this.props.commentsUpdated() */
               
            }

        } catch (error) {
            console.log(error)
            this.setState({...this.state })
        }
    }

    refresh =()=>{
        window.location.reload();
   }

    render() {
        return (
            <>
                {
                    (
                        !this.state.comments.length
                    )
                        ? <p className="mt-3">No Comments Yet</p>
                        : <ListGroup>
                            
                            {(this.props.updatedComments.length>0)?
                            this.props.updatedComments.map(comment => 
                                <ListGroup.Item 
                                className="d-flex" 
                                >
                                    <span className="mr-auto">{comment.comment}</span>
                                    <span className="mr-5">{comment.rate}/5</span>
                                    <img
                                        className="ml-5 mt-1"
                                        id= 'deleteBtn'
                                        onClick={() => this.deleteComment(comment._id)}
                                        src={del} 
                                        alt="delete-icon"/>                             
                                    </ListGroup.Item>
                                  
                            ):this.state.comments.map(comment => 
                                <ListGroup.Item 
                                className="d-flex" 
                                >
                                    <span className="mr-auto">{comment.comment}</span>
                                    <span className="mr-5">{comment.rate}/5</span>
                                    <img
                                        className="ml-5 mt-1"
                                        id= 'deleteBtn'
                                        onClick={() => this.deleteComment(comment._id)}
                                        src={del} 
                                        alt="delete-icon"/>                             
                                    </ListGroup.Item>
                                  
                            )}
                        </ListGroup>
                }

                {/* {this.state.isLoading && <Loading />} */}
            </>
        )
    }
}

export default CommentsList