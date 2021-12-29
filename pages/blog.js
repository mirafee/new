import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Blog() {

  const [photo, setPhoto] = useState("");
  const [clientId, setClientId] = useState("0otBx3PBdtwb4ciGfuv38X_6OjOgLb9dCou25DhJCSY");
  const [result, setResult] = useState([]);


  function handleChange(e) {
    setPhoto(e.target.value);
  }

  function handleClick(e) {
    const url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientId;

    axios.get(url)
    .then((res) => {
      setResult(res.data.results);
      console.log(res);
    })
  }

return (
<>
    <main className="pt-2 bg-gray-100 pb-2">
        <div className="container h-full mx-auto flex flex-wrap lg:flex-nowrap">
                <section className="p-8 flex-1">
                    <Tilt>
                        <div className="w-full bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                            <div className="relative h-48 bg-blue-500 rounded-bl-4xl">
                              <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                              </svg>
                            </div>
                            <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                              <h1 className="text-2xl font-semibold text-gray-900">Search your favourite...!</h1>
                                <div className="mt-12 relative">
                                  <input onChange={handleChange} id="search" name="search" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="search cat or flower" />
                                  <label htmlFor="search" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Search cat or flower...</label>
                                </div>
                                <button onClick={handleClick} className="mt-20 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset focus:ring-blue-800 focus:ring-opacity-10 cursor-pointer">Search</button> 
                            </div>
                        </div>
                    </Tilt>

                    <div className="w-full bg-white rounded-3xl mx-auto overflow-hidden shadow-xl grid grid-cols-2 mt-4 gap-3 items-center justify-center">
                        {result.map((photo) => {
                            return (
                                <Tilt>
                                    <div key={photo.id} className="rounded-sm bg-white p-4 shadow-sm">
                                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                            <img className="object-cover transform hover:scale-110 transition duration-500" src={photo.urls.small} />
                                        </div>
                                        <div className="mt-3">
                                            <div className="prose capitalize prose-stone prose-slate prose-sm">
                                                <h2>{photo.alt_description}</h2>
                                            </div>
                                            <div className="mt-3">
                                                <div className="flex text-gray-400 text-sm items-center">
                                                    {photo.user.name}
                                                </div>
                                                <div className="flex text-gray-400 text-sm items-center">
                                                    {photo.created_at}
                                                </div>
                                            </div>
                                        </div>
                                    </div>                
                                </Tilt>
                            );
                        })}
                    </div>
                </section>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl lg:w-3/12 w-full m-2">
                <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Popular Posts</h3>
                    <div className="space-y-4">
                    {result.map((post) => {
                    return (
                    <div key={post.id}>
                        <Link href={post.urls.small}>
                            <a href={post.urls.small} className="flex group">
                                <div className="flex-shrink-0">
                                    <img src={post.urls.small} className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover" />
                                </div>
                                <div className="flex-grow pl-3">
                                    <h5 className="prose prose-md capitalize transition group-hover:text-blue-500">
                                    {post.alt_description}
                                    </h5>
                                    <div className="flex text-gray-400 text-sm items-center">
                                        <span className="mr-1 text-xs">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                        {post.created_at}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    );
                    })} 
                    </div>
                </div>
            </div>
        </div>
    </main>
</>
);
}

