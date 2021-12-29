export default function BigGuy() {
  return (
    <>
    <main className="antialiased relative text-gray-600">
        <div className="absolute w-full min-h-screen">
            <div
                className="absolute z-0 top-0 w-full h-1/2 bg-cover bg-bottom pt-20 px-12 text-white text-center"
                style={{backgroundImage: `url('images/background.jpg')`}}
            ></div>
        </div>
        <div
            className="relative z-10 flex min-h-screen h-auto justify-center items-center"
        >
            <div className="relative max-w-4xl">
                <div
                    className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"
                ></div>
                <div
                    className="relative z-20 bg-white md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl"
                >
                    <div
                        className="sm:flex flex-col justify-between space-y-6 py-6 md:pr-10"
                    >
                        <div>
                            <h2 className="text-lg">Hello, I am</h2>
                            <h1 className="pt-1 text-5xl font-bold text-gray-800">
                                Shruti Balasa
                            </h1>
                        </div>
                        <p className="text-xl leading-relaxed">
                            Full-stack web developer who crafts beautiful
                            websites that help your business grow online
                        </p>
                        <div
                            className="inline-flex text-xl text-gray-600 space-x-5"
                        >
                            <a href="#"
                                ><ion-icon
                                    name="logo-youtube"
                                    className="hover:text-red-600"
                                ></ion-icon
                            ></a>
                            <a href="#"
                                ><ion-icon
                                    name="logo-twitter"
                                    className="hover:text-blue-500"
                                ></ion-icon
                            ></a>
                            <a href="#"
                                ><ion-icon
                                    name="logo-linkedin"
                                    className="hover:text-blue-700"
                                ></ion-icon
                            ></a>
                            <a href="#"
                                ><ion-icon
                                    name="logo-github"
                                    className="hover:text-blue-500"
                                ></ion-icon
                            ></a>
                        </div>
                    </div>
                    <img
                        src="images/shruti-balasa-profile.jpg"
                        alt=""
                        className="flex-shrink-0 w-80 rounded-full border-6 border-white shadow-md"
                    />
                </div>
            </div>
        </div>
        <section className="bg-gray-50 pt-20 pb-28 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800">Services</h1>
                    <p className="pt-2">Here's what I offer</p>
                </div>
                <div
                    className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
                >
                    <div className="relative">
                        <div
                            className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"
                        ></div>

                        <div
                            className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12"
                        >
                            <ion-icon
                                name="phone-portrait-outline"
                                className="text-5xl text-cyan-500"
                            ></ion-icon>
                            <h2 className="pt-3 font-bold text-2xl">
                                Responsive Websites
                            </h2>
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequuntur aperiam quibusdam
                                repudiandae et necessitatibus culpa libero
                                mollitia.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"
                        ></div>

                        <div
                            className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12"
                        >
                            <ion-icon
                                name="layers-outline"
                                className="text-5xl text-cyan-500"
                            ></ion-icon>
                            <h2 className="pt-3 font-bold text-2xl">Web Apps</h2>
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequuntur aperiam quibusdam
                                repudiandae et necessitatibus culpa libero
                                mollitia.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"
                        ></div>

                        <div
                            className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12"
                        >
                            <ion-icon
                                name="chatbubbles-outline"
                                className="text-5xl text-cyan-500"
                            ></ion-icon>
                            <h2 className="pt-3 font-bold text-2xl">
                                Consultation
                            </h2>
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequuntur aperiam quibusdam
                                repudiandae et necessitatibus culpa libero
                                mollitia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800">Work</h1>
                    <p className="pt-2">The best of my works</p>
                </div>
                <div
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
                >
                    <div className="bg-white rounded-md shadow-md lg:col-span-2">
                        <img
                            src="images/work1.jpg"
                            alt=""
                            className="object-cover w-full h-80"
                        />
                        <div className="p-8">
                            <h3 className="font-bold text-2xl">Work Title</h3>
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellat sequi minima vero
                                sunt perferendis.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                                >View More</a
                            >
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md">
                        <img
                            src="images/work2.jpg"
                            alt=""
                            className="object-cover w-full h-80"
                        />
                        <div className="p-8">
                            <h3 className="font-bold text-2xl">Work Title</h3>
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                                >View More</a
                            >
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md">
                        <img
                            src="images/work3.jpg"
                            alt=""
                            className="object-cover w-full h-80"
                        />
                        <div className="p-8">
                            <h3 className="font-bold text-2xl">Work Title</h3>
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                                >View More</a
                            >
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md lg:col-span-2">
                        <img
                            src="images/work4.jpg"
                            alt=""
                            className="object-cover w-full h-80"
                        />
                        <div className="p-8">
                            <h3 className="font-bold text-2xl">Work Title</h3>
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellat sequi minima vero
                                sunt perferendis.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                                >View More</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="pt-20 pb-36 px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800">Contact</h1>
                    <p className="pt-2">Get in touch with me</p>
                </div>
            </div>
            <div className="mt-16 relative max-w-4xl mx-auto">
                <div
                    className="absolute z-10 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"
                ></div>
                <div className="relative z-20 bg-white rounded-md shadow-md p-12">
                    <form action="">
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
                        >
                            <input
                                type="text"
                                placeholder="Name"
                                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                            />
                            <textarea
                                rows="5"
                                placeholder="Message"
                                className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                            ></textarea>
                        </div>
                        <button
                            className="inline-block w-auto mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </main>
    </>
  );
};