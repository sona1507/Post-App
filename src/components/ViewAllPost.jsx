import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAllPost = () => {
    const [postData,changePostData] = useState(
        []
    )
    const fetchData=()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>
            {
                changePostData(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered border-secondary caption-top">
                            <caption>Post Details</caption>
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">UserId</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Body</th>
                                </tr>
                            </thead>
                            <tbody>
                               {postData.map(
                                (value,index)=>{
                                    return(
                                        <tr>
                                                <td>{value.userId}</td>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>{value.body}</td>
                                            </tr>
                                    )
                                }
                               )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllPost