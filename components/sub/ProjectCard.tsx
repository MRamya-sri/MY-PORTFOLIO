// ProjectCard.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link from Next.js

interface Props {
  src: string;
  title: string;
  description: string;
  link: string; // Add link property
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-white">
      <Link href={link}>
        <div style={{ cursor: "pointer" }}>
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
          />
        </div>
      </Link>
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-white-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
