import React from 'react';
import axios from 'axios';
export default class MyList extends React.Component {
	state = {
		blogs: []
	}
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				const posts = response.data;
				this.setState({ posts });
			})
	}
	render() {
		return (
			<ul>
				{this.state.posts.map(post => { post.title })}
				</ul>
)}
}


axios.request(config)
axios.head(url[, config])
axios.get(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.delete(url[, config])
axios.options(url[, config])
axios.patch(url[, data[, config]])