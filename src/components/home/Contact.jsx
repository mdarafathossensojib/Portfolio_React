const Contact = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          Contact Me
        </h2>

        <form className="space-y-6 bg-gray-900 p-8 rounded-2xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500"
          ></textarea>

          <button className="w-full bg-cyan-500 py-3 rounded-lg font-semibold text-black hover:bg-cyan-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;