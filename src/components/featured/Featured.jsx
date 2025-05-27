import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

const Featured = ({ type }) => {
  return (
    <div className={"featured"}>
      {type && (
        <div className={"category"}>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        className={"test-slika"}
        src="https://images.pexels.com/photos/32145474/pexels-photo-32145474/free-photo-of-elegant-portrait-of-woman-with-headscarf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="User Image"
      />

      <div className="info">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10d7e8b1-9fe1-4c41-aeb7-331f4fb188aa/desxzmc-7d5eaf94-1c8f-4d62-b30d-9b1e11b85730.png/v1/fill/w_1280,h_544/the_matrix_logo_by_huyvo2001_desxzmc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ0IiwicGF0aCI6IlwvZlwvMTBkN2U4YjEtOWZlMS00YzQxLWFlYjctMzMxZjRmYjE4OGFhXC9kZXN4em1jLTdkNWVhZjk0LTFjOGYtNGQ2Mi1iMzBkLTliMWUxMWI4NTczMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uChjzAOgKvW4-rcC1bTZ9GNi4Q8M6OPTjsILQjQQt40"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at beatae
          blanditiis cumque deserunt dolorem ea harum magni nisi nulla
          praesentium quae quam qui quidem quis reprehenderit, sint, sit
          voluptate.
        </span>
        <div className="buttons">
          <button className={"play"}>
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className={"more-info"}>
            <InfoOutlineIcon />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
