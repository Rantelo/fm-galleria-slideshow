
const Gallery = ({data}) => {
  return (
    <div className="gallery">
      { data &&
        data.map(({name, images, artist }, index) => {
          return (
            <div key={`${name}-${index}`} className="tile">
              <img src={`${process.env.PUBLIC_URL}${images.thumbnail}`} alt={`${name}`} />
              <span className="tile__name">
                {name}
              </span>
              <span className="tile__artist">
                {artist.name}
              </span>
            </div>
          );

        })
      }
    </div>
  );
}

export default Gallery;