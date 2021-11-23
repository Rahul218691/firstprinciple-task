import React,{useState,useEffect} from 'react';
import {Modal,Button,Form} from 'react-bootstrap'
import {toast } from 'react-toastify';
import {postDataAPI,putDataAPI} from '../utils/fetchData'

const ModalComponent = ({show,handleClose,type,setPosts,posts,selected}) =>{

	const [name,setName] = useState('');
	const [post,setPost] = useState('');
	const [description,setDesc] = useState('');
	const [photo,setPhoto] = useState('');
	const [status,setStatus] = useState('');	

	const handleUpload = async() =>{
		if(status === '' || status === 'Choose Publish Status') return toast.error('Please choose status');
		try{
			let formdata = new FormData();
			formdata.append('name',name);
			formdata.append('post',post);
			formdata.append('description',description);
			formdata.append('pic',photo);
			formdata.append('active',status);
			const {data} = await postDataAPI('testimonials',formdata);
			if(data){
				setPosts([...posts,data.post]);
				updateState()
				handleClose()
			}
		}catch(error){
			toast.error(error.response.data.msg)
		}
	}

	const updateState = () =>{
		setName('');
		setDesc('');
		setPhoto('');
		setStatus('');
		setPost('')
	}

	useEffect(()=>{
		if(selected){
			setPost(selected.post);
			setStatus(selected.active);
			setPhoto(selected.photo);
			setDesc(selected.description);
			setName(selected.name);
		}
	},[selected])

	const updatePost = async() =>{
		if(status === '' || status === 'Choose Publish Status') return toast.error('Please choose status');
		try{
			let formdata = new FormData();
			formdata.append('name',name);
			formdata.append('post',post);
			formdata.append('description',description);
			formdata.append('pic',photo);
			formdata.append('active',status);
			const {data} = await putDataAPI(`testimonials/${selected._id}`,formdata);
			if(data){
				let updateData = {
					_id:selected._id,
					name,
					post,
					description,
					active:status,
					photo
				}
				let mapData = posts.map(item=>(item._id === selected._id ? updateData : item));
				setPosts(mapData)
				updateState()
				handleClose()
			}
		}catch(error){
			toast.error(error.response.data.msg)
		}
	}

	return(
		      <Modal
		        show={show}
		        onHide={handleClose}
		        backdrop="static"
		        keyboard={false}
		      >
		        <Modal.Header>
		          <Modal.Title>{type === "add" ? 'Add Testimonial' : 'Edit Testimonial'}</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
					  <Form.Group className="mb-3" controlId="formaddname">
					    <Form.Label>Name</Form.Label>
					    <Form.Control type="text" placeholder="Enter Name" 
					    value={name}
					    onChange={(e)=>setName(e.target.value)}/>
					  </Form.Group>
					  <Form.Group className="mb-3" controlId="formaddpost">
					    <Form.Label>Post</Form.Label>
					    <Form.Control type="text" placeholder="Enter Post" 
					    value={post}
					    onChange={(e)=>setPost(e.target.value)}/>
					  </Form.Group>					  
					  <Form.Group className="mb-3" controlId="formdesc">
					    <Form.Label>Description</Form.Label>
					    <Form.Control as="textarea" rows={3} placeholder="description..."
					    value={description}
					    onChange={(e)=>setDesc(e.target.value)}/>
					  </Form.Group>
					  <Form.Group controlId="formFile" className="mb-3">
					    <Form.Label>Photo</Form.Label>
					    <Form.Control type="file" 
					    onChange={(e)=>setPhoto(e.target.files[0])}/>
					  </Form.Group>	
					<div className="form-group">
						<select className="form-control" value={status}
						onChange={(e)=>setStatus(e.target.value)}>
							<option>Choose Publish Status</option>
							 <option value="1">Active</option>
							 <option value="0">Inactive</option>
						</select>
					</div>					  	  
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={()=>{
		          	handleClose()
		          	updateState()
		          }}>
		            Close
		          </Button>
		          {
		          	type === "add" ?
		          	<Button variant="primary" onClick={()=>handleUpload()}>Upload</Button>
		          	:
		          	<Button variant="primary" onClick={()=>updatePost()}>Update</Button>
		          }
		        </Modal.Footer>
		      </Modal>					
		)
}

export default ModalComponent;