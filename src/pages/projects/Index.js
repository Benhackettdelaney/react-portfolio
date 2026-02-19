import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ProjectCard from "../../components/ProjectCard";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://ben-portfolio-86b65-default-rtdb.firebaseio.com/.json`)
      .then((response) => {
        const data = response.data;

        if (!data) {
          setProjects([]);
          return;
        }

        if (Array.isArray(data)) {
          setProjects(data);
          return;
        }

        setProjects(Object.values(data));
      })
      .catch((e) => console.log(e));
  }, []);

  const featuredSlugs = ["college-app", "countries-app"];

  const featuredProjects = useMemo(() => {
    const filtered = projects.filter((p) => featuredSlugs.includes(p.slug));

    filtered.sort(
      (a, b) => featuredSlugs.indexOf(a.slug) - featuredSlugs.indexOf(b.slug)
    );

    return filtered;
  }, [projects]);

  const projectList = featuredProjects.map((project, i) => (
    <ProjectCard
      key={project.slug || i}
      project={project}
      onOpen={(slug) => navigate(`/projects/${slug}`)}
    />
  ));

  return (
    <div className="bg-black text-white pb-10">
      {/* Header */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-medium tracking-tight text-white">
          Projects
        </h2>
        <p className="text-neutral-400 mt-2 max-w-xl">
          A curated selection of my strongest work so far.
        </p>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{projectList}</div>
    </div>
  );
};

export default Index;
