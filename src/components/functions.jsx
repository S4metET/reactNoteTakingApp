import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faTrashCan, faDownload } from "@fortawesome/free-solid-svg-icons";

export default function functions() {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faChevronLeft} />
        <p>Go Back</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faTrashCan} />
        <FontAwesomeIcon icon={faDownload} />
        <button>Cancel</button>
        <button>Save Note</button>
      </div>
    </div>
  );
}
