import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function Nav({
  setLibraryStatus, 
  libraryStatus,
  isDarkModeActive,
  setIsDarkModeActive
}) {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <div>
      <nav>
        <h1>Chillhopify</h1>
        <button
          className={libraryStatus ? "library-active" : ""}
          onClick={openLibraryHandler}
        >
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>

        {/* <button
          className={`${isDarkModeActive ? "dark-button" : "light-button"}`}
          onClick={() => setIsDarkModeActive(!isDarkModeActive)}
        >
          {`${isDarkModeActive ? "Dark mode " : "Light mode "}`}
          <FontAwesomeIcon icon={isDarkModeActive ? faMoon : faSun} />
        </button> */}

      </nav>
    </div>
  )
}
