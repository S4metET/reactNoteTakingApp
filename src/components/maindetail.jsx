import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faClock } from "@fortawesome/free-solid-svg-icons";

export default function MainDetail() {
  return (
    <div>
      <div>
        <div>
          <FontAwesomeIcon icon={faTag} />
          <p>Tags</p>
        </div>
        <div>
          <p>Dev, React</p>
        </div>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faClock} />
          <p>Last edited</p>
        </div>
        <div>
          <p>29 Oct 2024</p>
        </div>
      </div>
    </div>
  );
}
