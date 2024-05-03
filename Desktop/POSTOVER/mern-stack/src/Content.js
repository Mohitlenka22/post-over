import React, { useState } from 'react';
import axios from './axios';
import './Content.css';

function Content() {

    
    const [input, setInput] = useState("");
    const [img, setImg] = useState("");
    const [imgtxt, setImgtxt] = useState("");

    const send = async () => {
        await axios.post('/upload', {
            name: input,
            imgUrl: img,
            imgtxt:imgtxt
        });
        setInput("")
        setImg("")
        setImgtxt("")

        
        alert('Successfully uploaded')

    }

    return <div className='content'>
        <div className="container">
         
            <form>
                <div class="mb-3 mt-4">
                    <label for="exampleInputEmail1" class="form-label">Image Description</label>
                    <input type="text" class="form-control" placeholder='Description' id="exampleInputEmail1" value={input} onChange={e=>setInput(e.target.value)}  aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Image Url</label>
                    <input type="text" value={img} onChange={e=>setImg(e.target.value)} placeholder='Image Url' class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Image Url</label>
                    <input type="file" value={imgtxt} onChange={e=>setImgtxt(e.target.value)} placeholder='Image Url' class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" onClick={send} class="btn btn-primary mx-4">Upload</button>
            </form>

        </div>

    </div>;
}

export default Content;

// "https://images.unsplash.com/photo-1642629244457-6985ba7ff581?ixlib=rb-..."

// "https://images.unsplash.com/photo-1642640377719-541f3afbf6e3?ixlib=rb-..."
// "https://media.istockphoto.com/photos/sun-sets-on-the-james-river-in-sp..."