import React from 'react'
import ProjectCard from './ProjectCard'
import Ecommerce from '../Receipe app.png'
import Management from '../Chat app.png'
import Todo from "../Blog app.png"
import { Link } from 'react-router-dom'
import Animate from '../Animate'


function Project() {
    let projectList = [
        {
            image: Management,
            title: "chat app",
            description: " A real-time messaging application built using the MERN stack with secure authentication and user-friendly UI.",
            frontEnd: "https://github.com/lokesh000000/chatapp",
            webLink: "https://records-dv0v.onrender.com",
           
        },
        {
            image: Todo,
            title: "Blog App",
            description: "A MERN-based platform for creating, sharing, and managing blog posts with a minimalistic design.",
            frontEnd: "https://github.com/lokesh000000/blogserver",
            webLink: "https://blogserver-7vbm.onrender.com",
            
           
        },
        {
            image: Ecommerce,
            title: "Receipe app",
            description: " A MERN-powered app for discovering, sharing, and managing recipes with an intuitive interface.",
            frontEnd: "https://github.com/lokesh000000/Recipeapp",
            webLink: "https://recipe-app-plum-iota.vercel.app/",
            
        },
       
    ]
    return (
        <Animate>
            <div className="top">
                <h4 className="text-center mt-4 fs-1 text-light">Project</h4>
            </div>
            <div className="container project p-4">
                
                <div className="next-page">
                    <Link className="btn btn-dark rounded-circle ml-4" to={"/skill"}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                    <div className="row mt-5">
                        {projectList.map((card, index) => (
              <ProjectCard key={index} card={card} />
            ))}
                    </div>
                    <Link className="btn btn-dark rounded-circle ml-4" to={"/contact"}><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </div>

            </div>
        </Animate>

    )
}

export default Project
