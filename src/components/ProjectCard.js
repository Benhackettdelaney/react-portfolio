const ProjectCard = ({ project, onShow }) => {
  const tags = (project.tags || []).map((tag, i) => (
    <div
      key={i}
      className="badge badge-outline flex justify-center items-center p-2"
    >
      {tag}
    </div>
  ));

  return (
    <div className="card w-96 bg-stone-900 shadow-xl text-white">
      <div className="card-body flex flex-col gap-4">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>

        <div className="flex flex-wrap flex-1 gap-4 whitespace-nowrap">{tags}</div>

        <div className="flex gap-8">
          {project.website ? (
            <a href={project.website} target="_blank" rel="noreferrer">
              <button className="btn btn-primary btn-outline btn-sm">Website</button>
            </a>
          ) : null}

          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              <button className="btn btn-primary btn-outline btn-sm">GitHub</button>
            </a>
          ) : null}
        </div>

        <button
          className="btn btn-success btn-outline"
          onClick={() => onShow?.(project)}
        >
          Show
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
