import { useEffect, useState } from "react";

const Skill = () => {
    const [data , setData]=useState([])
    useEffect(()=>{
        fetch('../../../../public/skill.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl font-bold mt-10 text-center max-w-min m-auto bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-pink-500">Skill</h2>
            <hr className="border-2 w-52 mt-3 m-auto border-red-500" />
            <div className="grid grid-cols-4">
            {
                data?.map(skill => <div key={skill.id}>
                    <div>
                        <p>{skill.name}</p>
                        <img src={skill.image} alt="" />
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Skill;