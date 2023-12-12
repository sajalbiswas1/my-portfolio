
const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="lg:grid grid-cols-3 gap-3 mt-10 mx-5 items-center">
            <div className="col-span-2">
                <p className="font-bold text-xl mb-3">INTRODUCTION</p>
                <h3 className="text-6xl font-bold mb-3">I am a Creative</h3>
                <h3 className="text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-red-500 to-pink-500"  >Web App Developer</h3>
                <p className="text-xl mb-5">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                <button className="btn btn-primary">Download CV </button>
            </div>
            <div className="col-span-1">
        <img src="https://i.ibb.co/34ZSpKq/Untitled-design-45.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;