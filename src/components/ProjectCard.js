import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const tags = project.tags.map((tag, i) => {
    return (
      <div key={i} className="badge badge-outline flex justify-center items-center p-2">
        {tag}
      </div>
    );
  });

  return (
    <div className="card w-96 bg-stone-900 shadow-xl text-white">
      {/* <figure>
        <img src={project.images[0].path} alt={project.images[0].caption} />
      </figure> */}
      <div className="card-body flex flex-col gap-4">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="flex flex-wrap flex-1 gap-4 whitespace-nowrap">{tags}</div>
        <div className='flex gap-8'>
          {project.website ? (
            <a href={project.website} target="_blank" rel="noreferrer"><button className="btn btn-primary btn-outline btn-sm">Website</button></a>
          ) : (
            ""
          )}
          {project.github ? (
            <a href={project.github}><button className="btn btn-primary btn-outline btn-sm">GitHub</button></a>
          ) : (
            ""
          )}
        </div>
        <Link className='btn btn-success btn-outline' to={`/projects/${project.slug}`}>Show</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
