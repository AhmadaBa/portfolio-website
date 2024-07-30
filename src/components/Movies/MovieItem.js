import React from 'react';

const MovieItem = ({ index, title, image }) => {
  const delay = index * 200; 

  return (
    <div className="w-1/2 md:w-1/4 p-2 opacity-0 animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
      <div className="border rounded-lg overflow-hidden flex flex-col h-full">
        <img src={image} alt={title} className="w-full h-auto" />
        <div className="p-2 flex-grow flex items-center justify-center">
          <h3 className="font-semibold text-center text-sm md:text-lg break-words">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;

