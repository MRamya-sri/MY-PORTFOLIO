import React from "react";
import ResourceCard from "../sub/ResourceCard";

const Resources = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="resources">
      <h1 className="text-4xl font-semibold text-center text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-6 px-4 mb-10">
        Check out my Resources! 📑
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ResourceCard
          title="Python Libraries"
          link="https://github.com/MRamya-sri/PYTHON-LIBRARIES"
          description="Explore various Python libraries for data science and development."
        />
        <ResourceCard
          title="Machine Learning Algorithms"
          link="https://github.com/MRamya-sri/MACHINE-LEARNING-ALGORITHMS"
          description="Discover a collection of machine learning algorithms implemented in Python."
        />
        <ResourceCard
          title="Data PreProcessing Basics"
          link="https://github.com/MRamya-sri/DATA-PREPROCESSING--ML-"
          description="Learn the basics of data preprocessing techniques for machine learning."
        />
        <ResourceCard
          title="BootStrap"
          link="https://github.com/MRamya-sri/BOOTSTRAP"
          description="Find resources and examples for Bootstrap framework for web development."
        />
        <ResourceCard
          title="HTML and CSS resources"
          link="https://github.com/MRamya-sri/CSS"
          description="Explore HTML and CSS resources for web design and development."
        />
        {/* Add more resource cards */}
      </div>
    </div>
  );
};

export default Resources;
