import React from "react";

interface MusicCardProps {
  title: string;
  artist: string;
  image: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ title, artist, image }) => {
  return (
    <div className="card bg-dark text-white border-0 shadow-sm">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;
