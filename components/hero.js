import { CopyBlock, dracula } from "react-code-blocks";


export default function Hero() {
  return (
    	<section className="w-full h-full bg-transparent flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="z-0 blur-xl opacity-60 h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute sm:left-1/4 md:left-1/4 lg:left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
        <div className="z-0 blur-xl opacity-60 h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
          <div className="relative mb-0 mt-10 w-full -top-20 md:-top-0 md:mt-20 flex justify-center items-center transform sm:scale-50 sm:mb-0 scale-75 lg:scale-100  lg:mb-10 md:scale-75">
            <div className="relative z-10 bg-gray-800 rounded-lg w-terminal custom-shadow">
                <div className="flex items-center">
                    <div className="flex items-center space-x-2 p-3">
                        <div className="bg-red-500 rounded-full w-3 h-3"></div>
                        <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                    </div>
                    <h1 className="text-blue-500">mirafi.vercel.js</h1>
                </div>
                <pre className="p-0 h-96 mt-10 mb-0 overflow-hidden rounded-lg">
                  <CopyBlock
                  text="console.log(Hello Sir)"
                  language='python'
                  showLineNumbers='true'
                  wrapLines
                  theme={dracula}
                />
                <CopyBlock
                  text="<h1>Welcome to my Portfolio</h1>"
                  language='python'
                  showLineNumbers='true'
                  wrapLines
                  theme={dracula}
                />
                </pre>
            </div>

            <div className="absolute z-0 bg-gray-800 rounded-lg w-terminal h-96 transform rotate-6 translate-x-6 -translate-y-8 opacity-75">
                <div className="flex items-center space-x-2 p-3">
                    <div className="bg-red-500 rounded-full w-3 h-3"></div>
                    <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
                    <div className="bg-green-500 rounded-full w-3 h-3"></div>
                </div>
            </div>

        </div>


        <div className="w-full md:translate-y-0 sm:translate-y-40 flex justify-center items-center transform lg:scale-75 md:scale-50 scale-50 sm:top-0 -mr-16 sm:scale-75">
                <img className="w-80 h-80 rounded-full border-4 border-white custom-shadow"
                 src="/assets/rafe.png"
                 alt="" />

            <div className="hw-inner flex justify-between items-center absolute border border-gray-800 rounded-full animate-spin-slow anim-8s">
                <div className="bg-white p-1 rounded-full custom-shadow h-10 w-10  transform -translate-x-5 ">
                    <img className="h-9 w-9 object-center animate-rotate-img anim-8s"
                         src="/assets/alpine.png"
                         alt="" />

                </div>
                <div className="bg-white overflow-hidden rounded-full custom-shadow h-10 w-10 transform translate-x-5 ">
                    <img className="h-10 w-10 object-center animate-rotate-img anim-8s"
                         src="/assets/javascript.png"
                         alt="" />
                </div>
            </div>


            <div
                 className="hw-outer flex justify-between items-center absolute border border-gray-800 rounded-full animate-spin-slow ">


                <div className="flex justify-between items-center h-full w-full">
                    <div
                         className="bg-white p-1 rounded-full custom-shadow h-10 w-10  transform translate-x-8 translate-y-40 ">
                        <img className="h-full w-full object-center animate-rotate-img "
                             src="/assets/flutter.png"
                             alt="" />

                    </div>
                    <div
                         className="bg-white overflow-hidden p-1 rounded-full custom-shadow h-10 w-10 transform -translate-x-8 -translate-y-40 ">
                        <img className="h-full w-full object-center animate-rotate-img"
                             src="/assets/svelte.png"
                             alt="" />
                    </div>
                </div>


                <div className="absolute flex justify-between items-center h-full w-full">
                    <div
                         className="bg-white p-1 rounded-full custom-shadow h-10 w-10  transform translate-x-8 -translate-y-40">
                        <img className="h-full w-full object-center animate-rotate-img "
                             src="/assets/tailwindcss.png"
                             alt="" />

                    </div>
                    <div
                         className="bg-white overflow-hidden p-1 rounded-full custom-shadow h-10 w-10 transform -translate-x-8 translate-y-40 ">
                        <img className="h-full w-full object-center animate-rotate-img "
                             src="/assets/vuejs.png"
                             alt="" />
                    </div>
                </div>
            </div>
        </div>
        </section>
  );
};