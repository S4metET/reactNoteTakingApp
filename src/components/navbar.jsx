import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMagnifyingGlass, faDownload, faTag, faGear } from "@fortawesome/free-solid-svg-icons"; 

export default function Navbar({ setCurrentPage }) {  // Burayı doğru hale getirdim
  return (
    <div className="navbar">
      <button onClick={() => setCurrentPage("home")} >
        <FontAwesomeIcon icon={faHouseChimney} />
      </button>
      <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      <button><FontAwesomeIcon icon={faDownload} /></button>
      <button><FontAwesomeIcon icon={faTag} /></button>
      <button><FontAwesomeIcon icon={faGear} /></button>
    </div>
  );
}
