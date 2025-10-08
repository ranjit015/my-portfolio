import React from 'react'

const ProjectCard = ({
  title,
  description,
  tags = [],
  image,
  link,
  repo,
  dataset,
  metrics = [], // e.g., [{ label: 'Accuracy', value: '95%' }]
  notebook,
  kaggle,
}) => {
  return (
    <div className="group relative bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {image ? (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-gradient-to-br from-lightBtnBg/20 to-lightBtnBg/5" />
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold text-lightPrimaryText font-montserrat">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-lightSecondaryText leading-relaxed">
            {description}
          </p>
        )}

        {dataset && (
          <div className="mt-3">
            <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-700 font-medium">
              Dataset: {dataset}
            </span>
          </div>
        )}

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-1 rounded-full bg-lightBtnBg/10 text-lightBtnBg font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {Array.isArray(metrics) && metrics.length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            {metrics.map((m) => (
              <div
                key={`${m.label}-${m.value}`}
                className="rounded-lg border border-black/5 bg-white/60 p-2 text-xs text-lightPrimaryText"
              >
                <div className="font-semibold">{m.label}</div>
                <div className="text-lightSecondaryText">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {(link || repo || notebook || kaggle) && (
          <div className="mt-4 flex items-center flex-wrap gap-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-white bg-lightBtnBg px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Live
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-lightBtnBg bg-lightBtnBg/10 px-3 py-1.5 rounded-full hover:bg-lightBtnBg/15 transition-colors"
              >
                Code
              </a>
            )}
            {notebook && (
              <a
                href={notebook}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-indigo-700 bg-indigo-500/10 px-3 py-1.5 rounded-full hover:bg-indigo-500/15 transition-colors"
              >
                Notebook
              </a>
            )}
            {kaggle && (
              <a
                href={kaggle}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-sky-700 bg-sky-500/10 px-3 py-1.5 rounded-full hover:bg-sky-500/15 transition-colors"
              >
                Kaggle
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard


