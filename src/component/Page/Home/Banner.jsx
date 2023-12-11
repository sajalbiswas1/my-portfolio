
const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="lg:grid grid-cols-3 gap-3 mt-10 mx-5 items-center">
            <div className="col-span-2">
                <p>INTRODUCTION</p>
                <h3 className="text-5xl font-bold">I am Ron a Creative</h3>
                <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan via-purple-500 to-pink-500"  >Developer & UI Expert</h3>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
            </div>
            <div className="col-span-1">
        <img src="https://i.ibb.co/HVh8qSm/1a14794f-4482-46cf-8946-12f443ce408c.jpg" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;