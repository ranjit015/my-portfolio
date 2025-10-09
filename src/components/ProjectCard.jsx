import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  name,
  desc,
  tech = [],
  image,
  repo,
  category,
  kaggle,
}) => {
  return (
    <div className="group relative bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {image ? (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-gradient-to-br from-lightBtnBg/20 to-lightBtnBg/5" />
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold text-lightPrimaryText font-montserrat">
          {name}
        </h3>
        {desc && (
          <p className="mt-1 text-sm text-lightSecondaryText leading-relaxed">
            {desc}
          </p>
        )}

        {category && (
          <div className="mt-3">
            <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-700 font-medium">
              {category}
            </span>
          </div>
        )}

        {Array.isArray(tech) && tech.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-1 rounded-full bg-lightBtnBg/10 text-lightBtnBg font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {(repo || kaggle) && (
          <div className="mt-4 flex items-center flex-wrap gap-3">
            {repo && (
              <Link
                to={repo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-lightBtnBg bg-indigo-500/10 px-3 py-1.5 rounded-full hover:bg-indigo-500/15 transition-colors"
              >
                Repo
              </Link>
            )}

            {kaggle && (
              <Link
                to={kaggle}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-sky-700 bg-sky-500/10 px-3 py-1.5 rounded-full hover:bg-sky-500/15 transition-colors"
              >
                Kaggle
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
