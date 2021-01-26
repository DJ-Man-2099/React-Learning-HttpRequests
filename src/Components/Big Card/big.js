import React, {useState} from 'react';
import classes from './big.module.css'
import CustomButton from '../Button/Button';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
 
const BigCard = (props) => {
    const [author, setAuthor] = useState(
        'Max'
    )

    const [title, setTitle] = useState(
        ''
    )

    const [content, setContent] = useState(
        ''
    )

    const [submitted, submit] = useState(
        false
    )

    const postNewPost =()=>{
        const post = {
            title: title,
            body: content,
            author: author,
        }
        axios.post("https://jsonplaceholder.typicode.com/posts/", post).then(res=>{
            console.log(res)
            setTitle('')
            setContent('')
            setAuthor('Max')
            submit(true)
        })
    }

    return (
        <div className={classes.Layout}>
        {submitted?<Redirect to='/'/>:null}
            <h1 className={classes.Header}>Add a Post</h1>
            <h2>Title</h2>
            <input type='Text' value={title} onChange={(event) => setTitle(event.target.value)} className={classes.TextInput}></input>
            <h2>Content</h2>
            <textarea rows="4" value={content} onChange={(event) => setContent(event.target.value)} className={classes.TextAreaInput}></textarea>
            <h2>Author</h2>
            <select className={classes.Select} value={author} onChange={(event) => setAuthor(event.target.value)}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
            <CustomButton click={postNewPost}/>
        </div>
    );
}
 
export default BigCard