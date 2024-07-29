import React from 'react';

const MovieItem = ({ title, image }) => {
  return (
    <div className="w-1/2 md:w-1/4 p-2">
      <div className="border rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-auto" />
        <div className="p-2">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
