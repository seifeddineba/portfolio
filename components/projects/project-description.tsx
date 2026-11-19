import React from "react";

const ProjectDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p className="mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      {bullets.length > 0 && (
        <ul className="mt-6 list-disc space-y-1 pl-5">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectDescription;
