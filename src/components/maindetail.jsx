import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faClock } from "@fortawesome/free-solid-svg-icons";

export default function MainDetail() {
  return (
    <div>
      <div>
        <div className="tags">
          <FontAwesomeIcon icon={faTag} />
          <p>Tags</p>
        <div>
          <p>Dev, React</p>
        </div>
        </div>
      </div>
      <div>
        <div className="last-edited"> 
          <FontAwesomeIcon icon={faClock} />
          <p>Last edited</p>
        <div>
          <p>29 Oct 2024</p>
        </div>
        </div>
      </div>
    </div>
  );
}
