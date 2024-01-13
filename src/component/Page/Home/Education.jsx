
const Education = () => {
    return (
        <div id="education" className="max-w-7xl m-auto">
            <h2 id="project" className="text-5xl font-bold mt-10 text-center max-w-min m-auto bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-pink-500">Education</h2>
            <hr className="border-2 w-52 mt-3 m-auto border-red-500" />

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-6">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2023</time>
                        <div className="text-lg font-black">National University </div>
                        <div className="text-lg font-black">Syed Azizul Huq Degree College </div>
                        <p className="text-lg font-black">BSC in Soil Science (Present)</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2019</time>
                        <div className="text-lg font-black">HSC</div>
                        <div className="text-lg font-black">Syed Azizul Huq Degree College </div>
                        <p className="text-lg font-black">Study at group Science</p>
                    </div>
                    <hr />
                </li>



            </ul>
        </div>
    );
};

export default Education;