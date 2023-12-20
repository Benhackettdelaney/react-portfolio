import React from 'react';
import { Link } from 'react-router-dom';

const HeroShow = ({ project }) => {
    
  const Tag = ({ project }) => {
    if (project.images) {
      const tags = project.tags.map((tag, i) => (
        <div key={i} className="badge badge-outline mr-4">
          {tag}
        </div>
      ));
      return <>{tags}</>;
    }
    return null;
  };

  return (
    <div className="hero min-h-screen p-16">
      <div className=" border-2 border-zinc-300 rounded p-16 flex-col lg:flex-row">
        <div className='flex flex-col gap-4'>
        <h2 >
          <h1  className='text-3xl mb-8 underline'><b>{project.title}</b></h1>
          </h2>
        <img className='max-h-[450px] border-b-2' src = {project.images[0].path} alt=''/>
       <div className='mt-5'>
          <h2 className='mb-5'>
            <b className='text-2xl mr-3'>Description:</b> {project.description}
          </h2>
         
          <h2 className='mb-5'>
            <b className='text-2xl mr-3'>Date:</b> {project.date}
          </h2>
          <h2 className='mb-3'>
            <b className='text-2xl'>Tags:</b> <Tag className='ml-4' project={project} />
          </h2>
          </div>
          <div className='flex gap-8'>
      {(project.website)?(<a href={project.website} target="_blank" rel="noreferrer" className="btn btn-primary btn-outline btn-sm mr-2">Website</a>):""}
           {(project.github)?(<a href={project.github} rel="noreferrer" target="_blank"className="btn btn-primary btn-outline btn-sm mr-2">Github</a>):"" }
           {(project.demo) ? (<Link to={`/projects/${project.slug}/demo`}><button className='btn btn-success btn-outline btn-sm'>Demo</button></Link>) : null}
           </div>
      
      </div>
        </div>

      </div>
  );
};

export default HeroShow;
