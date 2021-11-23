import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import { FaPencilAlt, FaTrash} from "react-icons/fa";
import {getDataAPI} from '../utils/fetchData'
import {ModalComponent} from '../components'
import {deleteDataAPI} from '../utils/fetchData'
import {toast } from 'react-toastify';

const ManageTestimonial = () =>{

	const [posts,setPosts] = useState([]);
	const [show,setShow] = useState(false);
	const [type,setType] = useState('');
	const [selected,setSelected] = useState({});

	useEffect(()=>{
		const fetchPosts = async() =>{
			const {data} = await getDataAPI(`testimonials?type=manage`);
			setPosts(data.posts)
		}	
		fetchPosts()
	},[]);

	const handleClose = ()=> setShow(false);

	const handleDelete = async(id) =>{
		try {
			const {data} = await deleteDataAPI(`testimonials/${id}`);
			if(data){
				let postsdata = posts.filter(post=>post._id !== id);
				setPosts(postsdata)
				toast.success(data.msg)
			}
		} catch(error) {
			toast.error(error.response.data.msg);
		}
	}

	return(
			<div className="manage__testimonial container-fluid">
				<div className="mt-2">
					<Link to='/' className="btn btn-secondary mr-2">Go Back</Link>
					<button className="btn btn-primary" onClick={()=>{
						setShow(true)
						setType('add')
					}}>Add Testimonial</button>
				</div>
				<div className="manage_table mt-2">
					<h2 className="text-center mb-2">Manage Testimonial</h2>
					<table className="table table-hover table-responsive-md">
					  <thead>
					    <tr>
					      <th scope="col">Name</th>
					      <th scope="col">Post</th>
					      <th scope="col">Description</th>
					      <th scope="col">Photo</th>
					      <th scope="col">Status</th>
					      <th scope="col">Actions</th>
					    </tr>
					  </thead>
					  <tbody>
					    {
					    	posts && posts.length > 0 ?
					    	posts.map((post,i) =>(
								<tr key={i}>
					    		<td>{post.name}</td>
					    		<td>{post.post}</td>
					    		<td>{post.description}</td>
					    		<td>
					    			<img src={post.photo} alt="" className="img-fluid tb__pic"/>
					    		</td>
					    		<td>{post.active}</td>
					    		<td>
					    			<FaPencilAlt className="tb__icon" onClick={()=>{
					    				setType('edit')
					    				setShow(true)
					    				setSelected(post)
					    			}}/>
					    			<FaTrash className="tb__icon" onClick={()=>handleDelete(post._id)}/>
					    		</td>
					    	</tr>
					    		))
					    	:
					    	(
					    		<tr>
					    			<td></td>
					    			<td></td>
					    			<td>No Testimonials Created</td>
					    			<td></td>
					    			<td></td>
					    			<td></td>
					    		</tr>
					    	)
					    }
					  </tbody>
					</table>					
				</div>
				<ModalComponent show={show} posts={posts} handleClose={handleClose} type={type} setPosts={setPosts}
				selected={selected}/>
			</div>
		)
}

export default ManageTestimonial;