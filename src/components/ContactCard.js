const ContactCard = () => {
  const linkStyle = { color: "#fff", textDecoration: "none" };

  return (
    <div className="bg-black text-white w-full py-10">
      <h2 className="text-3xl font-medium mb-6 tracking-tight pl-6">
        Contact
      </h2>

      <p className="text-neutral-400 mb-10 max-w-xl pl-10">
        If you’d like to get in touch about projects, collaborations, or opportunities,
        feel free to reach out below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl pl-10 mx-auto">
        <a
          href="mailto:benhd@gmail.com"
          style={linkStyle}
          className="border border-neutral-700 rounded-xl px-6 py-4 text-center hover:border-white transition-colors duration-200"
        >
          <span className="text-sm text-neutral-400 block mb-1">Email</span>
          <span className="text-base text-white">benhd@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ben-hackett-delaney-655458250/"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
          className="border border-neutral-700 rounded-xl px-6 py-4 text-center hover:border-white transition-colors duration-200"
        >
          <span className="text-sm text-neutral-400 block mb-1">LinkedIn</span>
          <span className="text-base text-white">Ben Hackett-Delaney</span>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
