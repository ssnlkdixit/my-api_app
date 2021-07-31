import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Badge,Card} from "react-bootstrap"
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'
//import { Button} from '@material-ui/core'


class PostList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      posts: [],
      
      page: 0
		}
	}



	componentDidUpdate() {
		axios
			.get(`https://reqres.in/api/users?page=${this.state.page}`)
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data.data })
                
			})
			.catch(error => {
        console.log(error)
        
			})
	}
    
    
   
	render() {
		const { posts} = this.state
        console.log(posts)

		return (
			<div className="flex justify-between ...">
                
					

					
                
				<h1>List of<Badge pill bg="light" text="dark"> Users</Badge></h1>
                
                
				{posts.length
					? posts.map(post => <ul key = {post.id}>
						
						<Card className="text-center">
                       <Card.Img variant="top" src="holder.js/100px180" />
                         <Card.Body>
                           <Card.Title> <center><Avatar alt= {post.first_name} src= {post.avatar}   /></center></Card.Title>
                             <Card.Text>
	                          {post.first_name}{post.last_name}
                            </Card.Text>
	                          <Card.Text>{post.email}</Card.Text>
                             <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                       </Card>
					
                        
                       
                        
                    </ul>)
                   
         
          
          <Button  
          onClick = {()=>this.setState({page:this.state.page+1})}>
              next page,currentpage{this.state.page}
              </Button>
              <Button 
          onClick = {()=>this.setState({page:this.state.page-1})}>
              Previous page
              </Button>

        
			</div>
		)
	}
   
}

export default PostList
