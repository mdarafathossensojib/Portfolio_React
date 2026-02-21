const Contact = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Contact Me
        </h1>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-4 rounded-xl transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center text-gray-400 space-y-2">
          <p>Email: mdarafathossensojib2020@email.com</p>
          <p>Location: Rajshahi, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;