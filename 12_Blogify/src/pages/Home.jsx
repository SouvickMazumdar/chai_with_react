import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Button, Container, Input, Login, PostCard,Cards } from '../components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { login } from '../store/authSlice'

function Home() {
    const [posts, setPosts] = useState([])

    const navigate = useNavigate();


    const userData = useSelector((state) => (state.auth.userData));



    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])


    if (userData || userData === undefined) {
        if (userData === undefined) {
            window.location.reload();

        }

        return (
            <>
                <div className="w-full py-8 mt-4 text-center text-slate-800">
                    <Container>
                        <div class="container mx-auto mt-6 flex justify-between space-x-6">
                            {/* <!-- Left Sidebar --> */}
                            <aside class="w-1/4 bg-white p-4 rounded-lg shadow-md">
                                <h2 class="text-3xl mt-6 font-bold mb-4">User Profile</h2>
                                <div class="flex items-center mb-4">
                                    <img src="https://via.placeholder.com/50" alt="User" class="rounded-full mr-3" />
                                    <div>
                                        <p class="font-semibold">{userData.name ? userData.name : ""}</p>
                                        <p class="text-gray-500">@{userData.name ? userData.name.toLowerCase().replace(/ /g, '') : ""}</p>
                                    </div>
                                </div>
                                {/* <nav>
                <a href="#" class="block mb-2 text-blue-600 hover:underline">Dashboard</a>
                <a href="#" class="block mb-2 text-blue-600 hover:underline">Settings</a>
                <a href="#" class="block text-blue-600 hover:underline">Logout</a>
            </nav> */}



                            </aside>

                            {/* <!-- Main Content --> */}
                            <main class="w-1/2">
                                {/* <!-- Post Input --> */}

                                <div class="bg-white p-4 rounded-full shadow-md mb-6">

                                    <div className="text-6xl font-bold mt-2 mb-4">
                                        My thoughts
                                    </div>
                                </div>
                                <button onClick={() => navigate("add-thought")} className="bg-amber-300 text-black text-2xl font-bold px-4 py-2 rounded-lg">
                                    {"Add Thought"}
                                </button>

                                {/* <!-- Posts --> */}
                                <div className='w-full py-8'>
                                    <Container>
                                        <div className='flex flex-wrap'>
                                            {
                                                posts.filter((post) => (post.userId === userData.$id)).slice(0, 2).map((post) => (

                                                    <div key={post.$id}>
                                                        <PostCard {...post} />
                                                        <br />
                                                    </div>
                                                ))}
                                        </div>
                                    </Container>
                                </div>

                                {/* <!-- Additional posts can be added here in the same format --> */}
                            </main>


                            {/* <!-- Right Sidebar --> */}
                            <aside class="w-1/4 bg-white p-4 rounded-lg shadow-md">
                                {/* <!-- Additional friend suggestions can be added here --> */}

                                <h2 class="text-3xl font-bold mt-6">All Ideas</h2>
                                <div class="mb-4">
                                    <div className='w-full py-8'>
                                        <Container>
                                            <div className='flex flex-wrap'>
                                                {posts.filter((post) => (post.userId !== userData.$id)).slice(0, 4).map((post) => (

                                                    <div key={post.$id} >
                                                        <PostCard {...post} />
                                                    </div>
                                                ))}
                                            </div>
                                        </Container>
                                    </div>
                                </div>

                                {/* <!-- Additional ads can be added here --> */}
                            </aside>

                        </div>
                    </Container>


                </div>
                <div className='w-full py-8'>
                    <Container>
                        <div className='flex flex-wrap'>
                            {
                                posts.filter((post) => (post.userId === userData.$id)).slice(2).map((post) => (

                                    <div key={post.$id} className='p-2 w-1/4'>
                                        <PostCard {...post} />
                                        <br />
                                    </div>
                                ))}
                        </div>
                    </Container>
                </div>

            </>
        )
    }
    else {
        return (
            <div className="w-full py-8 text-center bg-slate-300">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-9xl font-bold hover:text-gray-500 font-serif">
                                Thoughts
                            </h1>
                            <div className="flex ml-auto text-2xl mt-9 p-6  rounded-lg bg-amber-100">
                                <Cards image="https://cdn.pixabay.com/photo/2023/12/10/15/31/ai-generated-8441638_1280.jpg"/>
                                <div className="text-right">
                                <div className="text-4xl font-bold text-amber-400 underline hover:text-amber-600 mb-3">About us</div>
                                <p >Welcome to <strong>Thoughts</strong>, the ultimate hub for sharing your random thoughts and brilliant ideas. Whether you're here to jot down fleeting inspirations, share profound insights, or simply connect with like-minded thinkers,
                                     ThoughtStream is the place where your mind can wander and your voice can be heard.</p>
                                </div>
                            </div>
                            <div className="flex ml-auto text-2xl mt-1 p-4  rounded-lg bg-slate-200">

                            <div className="text-left">
                                <div className="text-4xl font-bold text-amber-400 underline hover:text-amber-600 mb-3">Express Freely</div>
                                <p>In ThoughtStream, there are no boundaries to your creativity. Share your thoughts, big or small, whether it's a sudden burst of inspiration, 
                                a quirky observation, or a deep philosophical question. Your ideas matter here.</p>
                                </div>
                                    <Cards image="https://cdn.pixabay.com/photo/2018/05/06/14/00/water-3378639_1280.jpg"/>
                            </div>
                            <div className="flex ml-auto text-2xl mt-1 p-4  rounded-lg bg-amber-100">
                            <Cards image="https://cdn.pixabay.com/photo/2013/02/09/10/01/face-79654_1280.jpg"/>
                                <div className="text-right">
                                <div className="text-4xl font-bold text-amber-400 underline hover:text-amber-600 mb-3">Stay Engaged</div>
                                <p >Keep up with trending thoughts, follow your favorite thinkers, and never miss an inspiring idea. 
                                    Our platform ensures that you stay engaged with the content that matters most to you.</p>
                                </div>
                            </div>
                            <div className="flex ml-auto text-2xl mt-1 p-4  rounded-lg bg-slate-200">

                            <div className="text-left">
                                <div className="text-4xl font-bold text-amber-400 underline hover:text-amber-600 mb-3">Mental Health Check</div>
                                <p >Not only this but also we provide a quick check on your thoughts, by notifying you about your mental health based on various trained Machine Learning and Deep Learning Models.
                                    This will help the user to take proper action based on our report and lead a more social life.
                                    </p>
                                </div>
                                    <Cards image="https://cdn.pixabay.com/photo/2022/02/15/10/39/robot-7014652_1280.jpg"/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }


}

export default Home