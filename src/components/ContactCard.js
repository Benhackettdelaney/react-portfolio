const ContactCard = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="max-w-6xl mx-auto py-10 px-4">
        {/* Left-aligned heading & text */}
        <h2 className="text-3xl font-medium mb-6 tracking-tight">
          Contact
        </h2>

        <p className="text-neutral-400 mb-10 max-w-xl">
          If you’d like to get in touch about projects, collaborations, or opportunities,
          feel free to reach out below.
        </p>

        {/* Centered contact cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <a
              href="mailto:benhd@gmail.com"
              className="border border-neutral-700 rounded-xl px-6 py-4 text-center
                         hover:border-white transition-colors duration-200"
            >
              <span className="text-sm text-neutral-400 block mb-1">Email</span>
              <span className="text-base">benhd@gmail.com</span>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="border border-neutral-700 rounded-xl px-6 py-4 text-center
                         hover:border-white transition-colors duration-200"
            >
              <span className="text-sm text-neutral-400 block mb-1">Instagram</span>
              <span className="text-base">@yourhandle</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
