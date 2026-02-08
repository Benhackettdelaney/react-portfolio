import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ProjectCard from "../../components/ProjectCard";

// Demo(s)
import GiphyDemo from "./demos/giphy-app/components/GiphyDemo";

const Index = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

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
      onShow={setActiveProject}
    />
  ));

  return (
    <div className="bg-black text-white pb-16">
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

      {/* Inline details */}
      {activeProject && (
        <div className="mt-10 bg-black border border-neutral-800 rounded text-white">
          {/* Header (padded) */}
          <div className="p-6 flex items-start justify-between gap-4">
            <h2 className="text-3xl font-bold text-left">
              {activeProject.title}
            </h2>

            <button
              className="btn btn-sm bg-transparent border-neutral-700 text-white hover:bg-transparent hover:border-white"
              onClick={() => setActiveProject(null)}
            >
              Close
            </button>
          </div>

          {/* Image (full width) */}
          {activeProject.images?.[0]?.path && (
            <img
              className="max-h-[500px] border-t border-b border-neutral-800 w-full object-contain"
              src={activeProject.images[0].path}
              alt=""
            />
          )}

          {/* Content (padded) */}
          <div className="p-6 text-left">
            <p className="mb-4">
              <b className="text-xl mr-2">Description:</b>
              {activeProject.description}
            </p>

            {activeProject.date && (
              <p className="mb-4">
                <b className="text-xl mr-2">Date:</b>
                {activeProject.date}
              </p>
            )}

            {activeProject.tags?.length > 0 && (
              <div className="mb-6">
                <b className="text-xl mr-2">Tags:</b>
                <div className="mt-2 flex flex-wrap gap-3">
                  {activeProject.tags.map((t, idx) => (
                    <span key={idx} className="badge badge-outline">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 flex-wrap">
              {activeProject.website && (
                <a
                  href={activeProject.website}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline"
                >
                  <button className="btn btn-sm bg-transparent border-neutral-700 text-white hover:bg-transparent hover:border-white">
                    Website
                  </button>
                </a>
              )}

              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline"
                >
                  <button className="btn btn-sm bg-transparent border-neutral-700 text-white hover:bg-transparent hover:border-white">
                    GitHub
                  </button>
                </a>
              )}
            </div>

            {activeProject.demo && (
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">Demo</h3>

                {activeProject.slug === "giphy-app" ? (
                  <GiphyDemo />
                ) : (
                  <p className="text-neutral-400">
                    No demo component wired for this project yet.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
