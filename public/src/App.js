import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const Section = ({ title, items }) => (
  <div className='mb-10'>
    <h2 className='text-2xl font-bold mb-2'>{title}</h2>
    <div className='flex overflow-x-auto space-x-4 py-2'>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className='min-w-[200px] bg-gray-800 p-4 rounded-lg flex-shrink-0'
          whileHover={{ scale: 1.05 }}
        >
          <h3 className='text-lg font-semibold'>{item.title}</h3>
          <p className='text-sm text-gray-400'>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const App = () => {
  const projects = [
    { title: "Google Play Analytics", desc: "Real-time app insights using Python, SQL" },
    { title: "Shopping Trend Analysis", desc: "Behavioral trends, dashboard & seasonal insights" },
  ];

  const experience = [
    { title: "NULLCLASS Internship", desc: "Python + SQL project-based analysis (2024)" },
    { title: "Techsaksham", desc: "CSR data project (Microsoft + SAP)" },
  ];

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold text-center mb-8'>Vaishnavi Gahoi</h1>
      <p className='text-center text-gray-400 max-w-2xl mx-auto mb-12'>
        Data Analyst | Insight Seeker | Passionate about storytelling with data.
      </p>
      <Section title="Projects" items={projects} />
      <Section title="Experience" items={experience} />
    </div>
  );
};

export default App;
