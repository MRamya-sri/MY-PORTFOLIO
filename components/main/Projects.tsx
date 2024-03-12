// Projects.tsx
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-4xl font-semibold text-center text-black bg-gradient-to-r from-purple-500 to-cyan-500 py-6 px-4 mb-10">
        My Projects 💡
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 text-white">
        <ProjectCard
          src="/newspaper.jpeg"
          title="News Article Text Summarization"
          description="Built a news article summarization system using a machine learning model to condense lengthy articles into informative summaries, saving time and keeping users updated on current events. Achieved [performance metric] on evaluation, showcasing potential for NLP applications."
          link="https://github.com/MRamya-sri/NEWS-ARTICLE-TEXT-SUMMARIZATION"
        />
        <ProjectCard
          src="/Cancer.jpg"
          title="Breast Cancer Survival Prediction"
          description="Built a machine learning model to predict breast cancer patient survival, analyzing patient data for risk assessment. This model has the potential to aid healthcare professionals in personalized treatment plans."
          link="https://github.com/MRamya-sri/BREAST-CANCER-SURVIVAL-PREDICTION"
        />
        <ProjectCard
          src="/sentiment.webp"
          title="Sentiment Analysis [Isreal and Palestine Conflict Reddits]"
          description="This project utilizes natural language processing techniques to classify Reddit comments.Sentiment analysis is a powerful tool that can be used for a variety of applications. It can help businesses understand their customers better.
          discussing the Israel-Palestine conflict as positive, negative, or neutral in sentiment"
          link="https://github.com/MRamya-sri/SENTIMENT-ANALYSIS-ISREAL-PALESTINE-REDDITCOMMENTS"
        />
        <ProjectCard
          src="/spam.webp"
          title="SMS Spam Detection"
          description="This project tackles identifying unwanted SMS messages, also known as spam. By analyzing text content and message patterns, we can build a system to automatically classify incoming texts as legitimate or spam, helping users avoid phishing attempts and promotional clutter."
          link="https://github.com/MRamya-sri/NEWS-ARTICLE-TEXT-SUMMARIZATION"
        />
        <ProjectCard
          src="/Churn.png"
          title="Customer Churn Prediction"
          description="Customer churn prediction aims to forecast which customers are at risk of cancelling a subscription or abandoning a service.  By analyzing customer data like purchase history, support interactions, and engagement levels, we can develop models to identify these at-risk customers and intervene with targeted retention efforts."
          link="https://github.com/MRamya-sri/BREAST-CANCER-SURVIVAL-PREDICTION"
        />
        <ProjectCard
          src="/credit.webp"
          title="Credit Card Fraud Detection"
          description="Credit card fraud detection acts like a security shield for your money. It analyzes your spending habits and flags unusual transactions, like a large purchase overseas, to prevent stolen card use.Goal is to Identify fraudulent credit card purchases, protecting both you and the issuing bank."
          link="https://github.com/MRamya-sri/SENTIMENT-ANALYSIS-ISREAL-PALESTINE-REDDITCOMMENTS"
        />
        <ProjectCard
          src="/HR.jpg"
          title="HR Data Analysis"
          description="HR data analytics aims to leverage people data to generate insights that inform strategic workforce planning and talent management decisions. Connected Power BI with Excel to import records."
          link="https://github.com/MRamya-sri/NEWS-ARTICLE-TEXT-SUMMARIZATION"
        />
        <ProjectCard
          src="/whatsapp.png"
          title="WhatsApp Chat Analysis"
          description="Uncover hidden patterns in your group chats! This project explores machine learning techniques to analyze WhatsApp conversations, identifying trends, frequent topics, and communication styles. Gain valuable insights into group dynamics and how conversations evolve."
          link="https://github.com/MRamya-sri/BREAST-CANCER-SURVIVAL-PREDICTION"
        />
        <ProjectCard
          src="/covid.jpg"
          title="Covid-19 Analysis"
          description="This interactive Power BI dashboard visualizes global Covid-19 data, revealing trends in cases, deaths, and vaccinations. Explore patterns and gain insights to inform future public health strategies."
          link="https://github.com/MRamya-sri/SENTIMENT-ANALYSIS-ISREAL-PALESTINE-REDDITCOMMENTS"
        />
      </div>
    </div>
  );
};

export default Projects;
