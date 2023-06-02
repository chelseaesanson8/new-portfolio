import React, { useState } from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';


function Portfolio() {
    const [showCodingProjects, setShowCodingProjects] = useState(true); 

    // Filter the projects based on the showCodingProjects state
    const filteredProjects = showCodingProjects
        ? portfolio.filter(project => project.category === 'coding')
        : portfolio.filter(project => project.category === 'wordpress'); 
    
    // Function to handle buton click and toggle the showCodingProjects state
    const handleButtonClick = () => {
        setShowCodingProjects(!showCodingProjects);
    }; 

    return (
        <div>
            <div className="flex justify-center gap-4 mb-4">
                <button
                    className={`inline-block px-2 py-1 font-semibold border-2 rounded-md ${showCodingProjects
                        ? 'border-stone-900 dark:border-white bg-purple-500 text-white'
                            : 'border-stone-900 dark:border-white text-gray-800 dark:text-white'
                        }`}
                    onClick={handleButtonClick}
                >
                    Coding Projects
                </button>
                <button
                    className={`inline-block px-2 py-1 font-semibold border-2 rounded-md ${!showCodingProjects
                            ? 'border-stone-900 dark:border-white bg-purple-500 text-white'
                            : 'border-stone-900 dark:border-white text-gray-800 dark:text-white'
                        }`}
                    onClick={handleButtonClick}
                >
                    WordPress Projects
                </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-4">
                     {filteredProjects.map(project => (
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                        />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;