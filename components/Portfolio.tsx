import Image from 'next/image'
import { getImagePath } from '../utils/paths'

interface Project {
  title: string
  description: string
  image: string
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "Children's Products Brand",
      description: "Concept development, promotion strategy, content creation and advertising management for own brand of children's tableware and educational toys.",
      image: "/images/2.jpg"  // без /zarina
    },
    {
      title: "Confectionery Business",
      description: "Profile design and advertising campaign setup to attract customers to the confectionery business.",
      image: "/images/3.jpg"  // без /zarina
    },
    {
      title: "Guest House",
      description: "Creating attractive content and conducting advertising campaigns to increase audience reach.",
      image: "/images/4.jpg"  // без /zarina
    }
  ]

  return (
    <>
      <h2 className="section-title">Key Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="card overflow-hidden group"
          >
            <div className="relative h-48 w-full mb-4">
              <Image
                src={getImagePath(project.image)}  // используем утилиту getImagePath
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="text-purple-500 mb-2">
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Portfolio