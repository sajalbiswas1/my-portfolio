import { useEffect, useState } from "react";

const Projects = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <div className="max-w-7xl m-auto">
            <h2 id="project" className="text-5xl font-bold mt-10 text-center max-w-min m-auto bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-pink-500">Projects</h2>
                <hr className="border-2 w-52 mt-3 m-auto border-red-500" />
            <div className="md:grid grid-cols-3 gap-5 mt-10 max-w-[400px] m-auto md:max-w-full px-2">
                {
                    data?.map(card => <div key={card.id}>
                        <div className="border border-black rounded-lg mt-3">
                        <img className="rounded-t-lg" src={card.image} alt="" />
                        <div className="border-t border-black">
                            <p className="px-3">{card.description}</p>
                            <div className="flex gap-3 m-2">
                                <a className="px-3 py-1 font-semibold text-green-800  border border-black" href={card.live}>Live</a>
                                <a className="px-3 py-1 font-semibold text-green-800  border border-black" href={card.clint}>Clint</a>
                                <a className="px-3 py-1 font-semibold text-green-800  border border-black" href={card.server}>Server</a>
                            </div>
                        </div>
                        </div>

                    </div>)
                }

            </div>
        </div>
    );
};

export default Projects;