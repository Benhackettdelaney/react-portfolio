import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const pill =
  "inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white";

const Show = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://ben-portfolio-86b65-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        const data = response.data;

        const list = !data
          ? []
          : Array.isArray(data)
          ? data
          : Object.values(data);

        const found = list.find((p) => p.slug === slug);
        setProject(found || null);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setProject(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <p className="text-neutral-400 text-lg">Loading…</p>
        </div>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <Link
            to="/#projects"
            className="inline-block mt-6 text-neutral-400 hover:text-white transition"
          >
            ← Projects
          </Link>
        </div>
      </main>
    );
  }

  const tags = project.tags || [];
  const heroImg = project.images?.[0]?.path;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        {/* Back link (no underline) */}
        <Link
          to="/#projects"
          className="text-neutral-400 hover:text-white transition text-base"
        >
          ← Projects
        </Link>

        {/* Title */}
        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((t, idx) => (
              <span key={idx} className={pill}>
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Hero Image (NO BORDER) */}
        {heroImg && (
          <div className="mt-8">
            <img
              src={heroImg}
              alt={project.title}
              className="w-full rounded-xl object-cover"
            />
          </div>
        )}

        {/* Description */}
        {project.description && (
          <div className="mt-10 text-lg leading-relaxed text-neutral-300">
            {project.description}
          </div>
        )}

        {/* Buttons */}
        {(project.website || project.github) && (
          <div className="mt-12 flex flex-wrap gap-4">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white text-black px-5 py-3 font-medium no-underline hover:opacity-90 transition"
              >
                Website
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-neutral-700 px-5 py-3 font-medium no-underline hover:border-white transition"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Show;
