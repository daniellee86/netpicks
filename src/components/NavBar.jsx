import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"


function Navigation() {
   
  return (
      <div className='navBar'>
          <div className='navWrap'>

           <motion.h1 
              initial={{ opacity: 0, scale: 0.75 }}
              transition={{ ease: "easeInOut", duration: 1.00 }} 
              whileInView={{ opacity: 1, scale: 1}} 
              viewport={{ once: true }} 
           className='netPicks'>NETPICKS</motion.h1>
            <ul className='list'>
              <motion.li 
                 initial={{ opacity: 0, y: 15 }}
                 transition={{ ease: "easeInOut", delay: 1.00,  duration: 0.5 }} 
                 whileInView={{ opacity: 1, y: 0}} 
                 viewport={{ once: true }} 
              className='listItem'>
                 <NavLink className='link' to="/netpicks/">Home</NavLink>
              </motion.li>  
              <motion.li 
                  initial={{ opacity: 0, y: 15 }}
                  transition={{ ease: "easeInOut", delay: 1.25,  duration: 0.5 }} 
                  whileInView={{ opacity: 1, y: 0}} 
                  viewport={{ once: true }} 
              className='listItem'>
              <NavLink className='link' to="/Movies">Movies</NavLink>
              </motion.li>   
              <motion.li 
                  initial={{ opacity: 0, y: 15 }}
                  transition={{ ease: "easeInOut", delay: 1.5,  duration: 0.5 }} 
                  whileInView={{ opacity: 1, y: 0}} 
                  viewport={{ once: true }} 
              >
              <NavLink className='link' to="/About">About</NavLink>
              </motion.li>   
          </ul>

          </div>
        
      </div> 
      
  )
}

export default Navigation




//REACT ROUTER BASIC NAVBAR
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }





