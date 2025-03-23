import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faTrashCan, faDownload } from "@fortawesome/free-solid-svg-icons";

export default function functions() {
  return (
    <div className="functions">
      <div className="back">
        <FontAwesomeIcon icon={faChevronLeft} />
        <p>Go Back</p>
      </div>
      <div className="actions">
        <FontAwesomeIcon icon={faTrashCan} />
        <FontAwesomeIcon icon={faDownload} />
        <button>Cancel</button>
        <button>Save Note</button>
      </div>
    </div>
  );
}
