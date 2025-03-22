import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return(
    <div>
      <div className='sidebar'>
        <hr />
        <div className='App-sidebar'>
          <FontAwesomeIcon icon={faFeatherAlt} size="2x" className='icon'/>
          <h1 className='Logo'>notes</h1>
        </div>
        <div className='sidebar-menu'>
        <div className='sidebar-home'>
          <FontAwesomeIcon icon={faHouse} size='1.5x' />
            <h1>All Notes</h1>
        </div>
          <div className='sidebar-archived'>
          <FontAwesomeIcon icon={faInbox} />
          <h1>Archived Notes</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
