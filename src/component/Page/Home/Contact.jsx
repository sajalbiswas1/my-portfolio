
const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <hr />
            <p className="border text-center border-black max-w-min m-auto px-5  py-1 text-lg rounded-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-red-500 to-pink-500">Contact</p>
        <h2 className="text-center text-5xl font-bold mt-4 mb-4">Get in touch</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div>
        <form className="card-body border border-black md:max-w-3xl md:m-auto lg:max-w-5xl mt-10 rounded-xl m-3"  action="https://formspree.io/f/mqkvrnol" method="POST">
        <div className="md:grid grid-cols-2 gap-5">
          <input type="name" name="Name" placeholder="Name *" className="px-3 py-2 mt-2 outline-none border border-black placeholder-slate-950 w-full" required />
          <input type="email" name="Email" placeholder="Email *" className="px-3 py-2 mt-2 outline-none border border-black placeholder-slate-950 w-full" required />
        </div>
        <div className="form-control">
          <input type="text" name="Subject" placeholder="Subject *"  className="px-3 py-2 outline-none border border-black placeholder-slate-950" required /> 
          <textarea name="Description" id="" cols="30" rows="10" placeholder="Text *" className="border outline-none placeholder-slate-950 px-3 py-1 border-black mt-2 " required></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="text-left font-bold text-xl w-36 hover:border-2 border-2 border-b-white hover:border-b-rose-400">Send Massage</button>
        </div>
      </form>
        </div>
        </div>
    );
};

export default Contact;