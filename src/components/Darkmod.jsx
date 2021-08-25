import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
 import "./Navbar.css"

const Darkmod = () => {
  const darkMode = useDarkMode(false);
 
  return (
    <div>
      <button className="sun" type="button" onClick={darkMode.disable}>
        🌞
      </button>
      {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
      <button className="lune" type="button" onClick={darkMode.enable}>
        🌚
      </button>
    </div>
  );
};
 
export default Darkmod;


// import React from 'react';
// import useDarkMode from 'use-dark-mode';
// import Toggle from './Toggle';



// const Darkmod = () => {
//   const darkMode = useDarkMode(false);

//   return (
//     <span>
//       <code>{darkMode.value ? 'enabled' : 'disabled'}</code>. {' '}
//       <button onClick={darkMode.toggle}>{darkMode.value ? 'off' : 'on'}</button>
//     </span>
//   );
// };

// export default Darkmod;
