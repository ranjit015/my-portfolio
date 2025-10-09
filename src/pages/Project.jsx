import ProjectCard from '../components/ProjectCard'
import { useProject } from '../context/projectProvider'

const Project = () => {
  const { projectData } = useProject();
  
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
          {projectData.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
