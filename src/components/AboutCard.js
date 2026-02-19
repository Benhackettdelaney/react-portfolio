const AboutCard = () => {
  return (
    <div className="bg-black text-white w-full py-10">
      <h2 className="text-3xl font-medium mb-6 tracking-tight text-left">
        About
      </h2>

      <div className="max-w-3xl space-y-6 text-neutral-300 leading-relaxed text-left">
        <p>
          I’m a Creative Computing graduate with an interest in building clean,
          functional web applications and interactive experiences.
        </p>

        <p>
          My work focuses mainly on frontend development using React, alongside
          backend and API-based projects developed throughout my studies.
        </p>

        <p>
          This portfolio is a selection of projects created during my time in
          college, ranging from small experiments to more structured applications.
        </p>

        <p className="text-neutral-400 text-sm">Graduated IADT, Dún Laoghaire.</p>
      </div>
    </div>
  );
};

export default AboutCard;
