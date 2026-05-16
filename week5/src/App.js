import { useState, useEffect } from "react";
import Album from './Album';
import Loading from './Loading';
import EmptyData from './EmptyData';

function App() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/albums")
      .then((response) => response.json())
      .then((json) => {
        setAlbums(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (albums.length === 0) {
    return <EmptyData />;
  }

  return (
    <div>
      {albums.map((album) => (
        <Album key={album.id} title={album.title} />
      ))}
    </div>
  );
}

export default App;