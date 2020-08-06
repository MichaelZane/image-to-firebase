import React, { useState } from 'react';
import {storage} from '../firebase'


const ImageUpload = (props) => {
    const[image, setImage] = useState()
    const[progress, setProgress] = useState(0)


    const handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0]
            setImage(image)
        }
    }

    const handleUpload = e => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed', 
        (snapshot) => {
            //progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(progress)
        }, (error) => {
            //error function
            console.log(error)
        }, () => {
            //completed function
            storage.ref('images').child(image.name).getDownloadURL()
            .then(url => {
                console.log(url)
                setImage(url)
            })
        })
    }
    return ( 
        <div className="image-wrap">
            <progress value={progress} max="100" />
            <br/>
                <input 
                className="image" 
                type="file"
                onChange={handleChange}
                />
                <button className='btn' onClick={handleUpload} >Upload</button>
                <br/>
                <img className="image-container" src={image || 'http://via.placeholder.com/600x600'} alt="uploaded"/>
        </div>
     );
}
 
export default ImageUpload;