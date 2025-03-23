import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faFeatherAlt} size="2x" className="icon" />
      <h1>notes</h1>
    </div>
  );
}
