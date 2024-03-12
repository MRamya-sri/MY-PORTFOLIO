import React from "react";

interface ResourceCardProps {
  title: string;
  link: string;
  description: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, link, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Check it out
      </a>
    </div>
  );
};

export default ResourceCard;

