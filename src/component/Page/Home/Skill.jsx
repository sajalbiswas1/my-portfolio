import { useEffect, useState } from "react";

const Skill = () => {
    const [data , setData]=useState([])
    useEffect(()=>{
        fetch('skill.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div id="skill" className="max-w-7xl m-auto">
            <h2 className="text-5xl font-bold mt-10 text-center max-w-min m-auto bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-pink-500">Skill</h2>
            <hr className="border-2 w-52 mt-3 m-auto border-red-500" />
            <div className="md:grid grid md:grid-cols-4 grid-cols-2 gap-5 mt-10 mx-3">
            {
                data?.map(skill => <div key={skill.id}>
                    <div className="flex items-center gap-5 border border-black p-4 rounded-lg">
                        <p className="font-bold">{skill.name}</p>
                        <img className="h-10" src={skill.image} alt="" />
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Skill;