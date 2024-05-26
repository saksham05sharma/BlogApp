import './Create.css'
import {useState} from 'react'

const Craete = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title , body , author}

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="saksham">Saksham</option>
                    <option value="ritik">Ritik</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Addin Blog...</button>}
            </form>
        </div>
     );
}
 
export default Craete;