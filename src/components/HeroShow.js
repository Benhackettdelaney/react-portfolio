import React from 'react';

const HeroShow = ({ project }) => {
    
  const Tag = ({ project }) => {
    if (project.images) {
      const tags = project.tags.map((tag, i) => (
        <div key={i} className="badge badge-outline">
          {tag}
        </div>
      ));
      return <>{tags}</>;
    }
    return null;
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h2>
            <b>Title:</b> {project.title}
          </h2>
          <h2>
            <b>Description:</b> {project.description}
          </h2>
          <img src = {project.images[0].path} alt=''/>
          <h2>
            <b>Date:</b> {project.date}
          </h2>
          <h2>
            <b>Tags:</b> <Tag project={project} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroShow;
