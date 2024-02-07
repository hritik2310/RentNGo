import React, { useEffect, useState } from 'react';

function Blog() {
  const [videos, setVideos] = useState([]);
  const apiKey = 'AIzaSyBIAGuU4BlqbcrBV26WBks-Kv73LPpQ9tU'; // Replace with your actual API key
  const searchQuery = 'car maintenance';

  useEffect(() => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${apiKey}&maxResults=10`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network error occurred');
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const headingStyle = {
    textAlign: 'center',
    fontFamily: 'Satisfy, cursive',
    fontSize: '36px',
    margin: '20px',
    color: '#333',
  };

  const videoContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const videoStyle = {
    width: '48%', // Adjust this value for the desired width
    
    margin: '1%',
  };

  return (
    <div>
      <div style={headingStyle}>Watch the Blogs...</div>
      <div style={videoContainerStyle}>
        {videos.map((video) => (
          <div key={video.id.videoId} style={videoStyle} className="video">
            <h2>{video.snippet.title}</h2>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
              title={video.snippet.title}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;