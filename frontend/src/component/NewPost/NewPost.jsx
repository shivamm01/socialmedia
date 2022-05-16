import React,{useState,useEffect} from 'react'
import "./NewPost.css"
import {Typography,Button} from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import {createNewPost} from "../../Actions/Post"
import { useAlert } from 'react-alert'
import { loadUser } from '../../Actions/User'





const NewPost = () => {

const [image, setImage] = useState(null);
const [caption, setCaption] = useState("");
const dispatch = useDispatch()
const alert = useAlert();


const {loading,error,message} = useSelector((state) => state.like)

const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

Reader.onload = () => {
    if(Reader.readyState === 2){
        console.log(Reader.result)
        setImage(Reader.result)
    }
}  
};
  const submitHandler = async(e) => {
      e.preventDefault()
      await dispatch(createNewPost(caption,image))
      dispatch(loadUser());

  }

useEffect(() => {
    if(error){
        alert.error(error)
        dispatch({type:"clearErrors"}) 
      }
      if(message){
        alert.success(message)
        dispatch({type:"clearMessage"})
      }
     
}, [dispatch,error,message,alert])



  return (
    <div className='newPost'>
        <form  className="newPostForm" onSubmit={submitHandler}>
            <Typography variant="h6">
             New Post
            </Typography>
            {image && <img src = {image} alt="post" />}           
            <input type="file" accept="image/*"  onChange={handleImageChange}/>
            <input type="text" placeholder='Caption...' value={caption} onChange={(e) =>setCaption(e.target.value)} />
            <Button disabled ={loading} type="submit">Post</Button>
        </form>
    </div>
  )
}

export default NewPost