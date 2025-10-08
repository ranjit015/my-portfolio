import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Project = () => {

  const projects = [
    {
      title: 'Customer Churn Prediction',
      description: 'Built classification models to predict customer churn using engineered behavioral features.',
      tags: ['Python', 'scikit-learn', 'Feature Engineering'],
      dataset: 'Telco Customer Churn',
      metrics: [
        { label: 'Accuracy', value: '91%' },
        { label: 'ROC-AUC', value: '0.94' },
      ],
      image: '/vite.svg',
      repo: '#',
      kaggle: '#',
    },
    {
      title: 'Fraud Detection (Imbalanced)',
      description: 'Detected fraudulent transactions with sampling strategies and tree-based models.',
      tags: ['Python', 'XGBoost', 'SMOTE'],
      dataset: 'Credit Card Fraud',
      metrics: [
        { label: 'Precision', value: '0.87' },
        { label: 'Recall', value: '0.82' },
      ],
      image: '/vite.svg',
      repo: '#',
      kaggle: '#',
    },
    {
      title: 'Time Series Forecasting',
      description: 'Forecasted monthly sales using SARIMAX and compared with Prophet.',
      tags: ['Time Series', 'SARIMAX', 'Prophet'],
      dataset: 'Retail Sales',
      metrics: [
        { label: 'MAE', value: '112.4' },
        { label: 'RMSE', value: '158.9' },
      ],
      image: '/vite.svg',
      repo: '#',
      kaggle: '#',
    },
  ]

  return (
    <div className='w-full min-h-screen bg-lightBg flex flex-col items-center p-6 md:p-10'>
      <div className='w-full max-w-6xl'>
        <div className='flex items-end justify-between gap-4'>
          <div>
            <h1 className='text-3xl md:text-4xl font-bold text-lightPrimaryText font-montserrat'>Projects</h1>
            <p className='text-sm md:text-base text-lightSecondaryText mt-1'>A selection of my recent work and experiments</p>
          </div>
        </div>

        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
