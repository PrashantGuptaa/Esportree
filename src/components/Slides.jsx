import React, { useRef, useState } from 'react'


function Slides({articles}) {
    const [arr, setarr] = useState(articles.sort((a,b)=>b.upvotes-a.upvotes))

    const handleUpvotes = (e)=>{
        e.preventDefault()
        e.stopPropagation()
        let newArr = Array.from(arr.sort((a,b)=>b.upvotes-a.upvotes))
        
        setarr(newArr)
    }
    console.log(arr)
    const handleRecent = (e)=>{
        e.preventDefault()
        e.stopPropagation()
        let newArr = Array.from(arr.sort(function(a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return d-c;
        }))
        
        setarr(newArr)
        
    }
    return (
        <div className="card w-50 mx-auto">
        <button onClick={handleUpvotes} data-testid="most-upvoted-link">Most Upvotes</button>
        <button onClick={handleRecent} data-testid="most-recent-link">Most Recent</button>

        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Upvotes</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
                {
                   arr?.map((item,id)=>(

                    <tr key={id} data-testid="article" >
                        <td data-testid="article-title">{item.title}</td>
                        <td data-testid="article-upvotes">{item.upvotes}</td>
                        <td data-testid="article-date">{item.date}</td>
                    </tr>
                   ))
                }
            
            </tbody>
        </table>
    </div>
    );

}

export default Slides;