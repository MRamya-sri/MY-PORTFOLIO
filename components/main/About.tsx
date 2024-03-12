import React from 'react';
import './About.css'; // Import the CSS file for styling

const About: React.FC = () => {
  return (
    <section id="about-me" className="px-4 py-8 md:px-8 flex flex-wrap justify-center items-center relative">
      <div className="max-w-[calc(50%-20px)] mb-6 text-center md:text-left md:w-1/2">
        <div className="border-2 border-blue-500 p-4 rounded-lg relative">
          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white"> So, What I'm Passionate About ?</h2>
          <div className="absolute top-0 left-0 w-full h-full border-l-2 border-t-2 border-blue-500 rounded-lg transform -rotate-3 z-0"></div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-white"> "Empowering Insights Through Data Science Excellence" </h3>
            <p className="text-white">
              I'm Ramya Sri Muthuluri 👩‍💻, Highly motivated and data-driven aspiring Data Scientist with a passion for uncovering hidden insights from complex datasets. I possess a strong foundation in Python, wielding libraries like Pandas, NumPy, and Matplotlib to effectively clean, analyze, and visualize data. My fascination with machine learning has led me to explore algorithms for tasks like classification and prediction. Additionally, my experience in web development allows me to bridge the gap between data and user-friendly applications. I'm proficient in data manipulation tools like SQL, Power BI, and Excel, allowing me to seamlessly extract, transform, and present data for clear communication. Eager to leverage this diverse skillset to contribute to impactful projects at a leading data science company and propel its growth.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-grey-500 text-white flex items-center justify-center rounded-full mr-2 bulb-animation">
              💡
            </div>
            <div className="w-12 h-12 bg-grey-500 text-white flex items-center justify-center rounded-full ml-2 bulb-animation">
              💡
            </div>
            <div className="w-12 h-12 bg-grey-500 text-white flex items-center justify-center rounded-full ml-2 bulb-animation">
              💡
            </div>
          </div>
        </div>
      </div>

      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <h1></h1>
      </div>

      <div className="relative md:w-1/2">
        <img
          src="Animationnn.gif"
          alt="Your GIF"
          className="max-w-[800px] md:max-w-[1000px] mx-auto"
        />
      </div>
    </section>
  );
};

export default About;

