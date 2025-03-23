import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMagnifyingGlass, faDownload, faTag, faGear } from "@fortawesome/free-solid-svg-icons"; 

export default function Navbar({ setCurrentPage }) {  // Burayı doğru hale getirdim
  return (
    <div className="navbar">
      <button onClick={() => setCurrentPage("home")} >
        <FontAwesomeIcon icon={faHouseChimney} />
        <span>Home</span>
      </button>
      <button><FontAwesomeIcon icon={faMagnifyingGlass} /><span>Search</span></button>
      <button><FontAwesomeIcon icon={faDownload} /><span>Download</span></button>
      <button><FontAwesomeIcon icon={faTag} /><span>Tags</span></button>
      <button><FontAwesomeIcon icon={faGear} /><span>Settings</span></button>
    </div>
  );
}
