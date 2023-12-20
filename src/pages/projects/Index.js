import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';

const Index = ({ search }) => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

console.log("filteredProjects", filteredProjects)
console.log("projects", projects)

  

  useEffect(() => {
    axios
      .get(`https://ben-portfolio-86b65-default-rtdb.firebaseio.com/.json`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if ( search.length <= 1) {
      setFilteredProjects(projects);
    } else {
      let filter = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProjects(filter);
    }
  }, [projects, search]);

  if (!projects) return <p>loading...</p>;

  const projectList = filteredProjects.map((project, i ) => (
    <ProjectCard key={i} project={project}/>
  ))

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 bg-zinc-200 p-4 justify-content-center auto-cols-auto pb-16">
    {projectList}
    </div>
  );
};

export default Index;
