const ProjectCard = ({ project, onShow }) => {
  const tags = (project.tags || []).map((tag, i) => (
    <span
      key={i}
      className="badge badge-outline text-xs px-3 py-1 border-neutral-700"
    >
      {tag}
    </span>
  ));

  return (
    <div className="w-full bg-black text-white border border-neutral-800 rounded-2xl transition-all hover:-translate-y-1 hover:border-neutral-600">
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h2>

        <p className="text-sm text-neutral-400 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">{tags}</div>

        <div className="flex gap-4 mt-auto">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <button
                className="
                  btn btn-xs
                  border-neutral-600
                  text-neutral-200
                  hover:bg-white hover:text-black hover:border-white
                "
              >
                Website
              </button>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <button
                className="
                  btn btn-xs
                  border-neutral-600
                  text-neutral-200
                  hover:bg-white hover:text-black hover:border-white
                "
              >
                GitHub
              </button>
            </a>
          )}
        </div>

        <button
          className="btn btn-sm btn-outline btn-success mt-4"
          onClick={() => onShow(project)}
        >
          Show
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
