import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'

export default function Nav({ setLibraryStatus, libraryStatus }) {
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
      </nav>
    </div>
  )
}
