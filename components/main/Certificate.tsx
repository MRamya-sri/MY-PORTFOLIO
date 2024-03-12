// Projects.tsx
import React from "react";
import CertificateCard from "../sub/CertificateCard";

const Certificate = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-4xl font-semibold text-center text-black bg-gradient-to-r from-purple-500 to-cyan-500 py-6 px-4 mb-10">
        My Certifications ✔️
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 text-black">
        <CertificateCard
                  src="/dscertficate.jfif"
                  title="Python for Data Science,AI & Development offered by IBM"
                  link="https://www.linkedin.com/posts/ramya-sri-518a85204_completion-certificate-for-python-for-data-activity-7120319099007590400-3wiO?utm_source=share&utm_medium=member_desktop" description={""}        />
        <CertificateCard
                  src="/pacertficate.jfif"
                  title="Predictive Analytics by Great Learning"
                  link="https://www.linkedin.com/posts/ramya-sri-518a85204_1000-free-courses-with-free-certificates-activity-7109161659780251648-P0WZ?utm_source=share&utm_medium=member_desktop" description={""}        />
        <CertificateCard
                  src="/mlcertficate.jfif"
                  title="Machine Learning Course under Acegrade"
                  link="https://www.linkedin.com/posts/ramya-sri-518a85204_machinelearning-activity-7075781006263259139-U5fy?utm_source=share&utm_medium=member_desktop" description={""}        />
        
    
      </div>
    </div>
    
  );
};

export default Certificate;