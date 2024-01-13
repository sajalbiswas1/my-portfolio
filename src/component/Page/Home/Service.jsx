import { useEffect, useState } from "react";

const Service = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div id="service" className="max-w-7xl m-auto">
            <h2 className="text-5xl font-bold mt-10 text-center max-w-min m-auto bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-pink-500">Service</h2>
            <hr className="border-2 w-52 mt-3 m-auto border-red-500" />
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-5 p-3">
            {
                data?.map(card => <div key={card.id}>
                    <div>
                        <h3 className="text-xl font-bold">{card.name}</h3>
                        <p>{card.details}</p>
                    </div>
                </div>)
            }
            </div>

        </div>
    );
};

export default Service;