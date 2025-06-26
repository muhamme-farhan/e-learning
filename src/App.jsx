// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import About from './components/About';
// import Courses from './pages/Maincourses/Courses';
// import Navbar from './components/Navbar';
// import ContactUs from './pages/ContactUs';
// import FullStack from './pages/Maincourses/Fullstack';
// import Digital from './pages/Maincourses/Digital';
// import CyberSecurity from './pages/Maincourses/Cybersecurity';
// import AllCourseCard from './pages/Maincourses/Allcoursecard';
// import BlockchainDevelopment from './pages/Maincourses/Blockchaindevelopment';






// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About/ >} />
//         <Route path="/courses" element={<Courses/>} />
//         <Route path="/contactus" element={<ContactUs />} />
//         <Route path="/fullstack" element={<FullStack />} />
//         <Route path="/digital" element={<Digital />} />
//         <Route path="/cybersecurity" element={<CyberSecurity />} />
//        <Route path="/pages/Maincourses/blockchaindevelopment" element={<BlockchainDevelopment />} />
//         <Route path="pages/maincourses/allcoursecard" element={<AllCourseCard />} />
       
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './components/About';
import Courses from './pages/Maincourses/Courses';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import FullStack from './pages/Maincourses/Fullstack';
import Digital from './pages/Maincourses/Digital';
import CyberSecurity from './pages/Maincourses/Cybersecurity';
import AllCourseCard from './components/Allcoursecard';
import BlockchainDevelopment from './pages/Maincourses/Blockchaindevelopment';
import ProgrammingFundamentals from './pages/Maincourses/ProgrammingFundamentals';
import DataScience from './pages/Maincourses/DataScience'; 
import Mobileappdevelopment from './pages/Maincourses/Mobileappdevelopment'; // Assuming you have a MobileApp component
import Uiux from './pages/Maincourses/Uiux'; // Assuming you have a Uiux component
import Cloud from './pages/Maincourses/Cloud'; // Assuming you have a Cloud component
import Devops from './pages/Maincourses/Devops';
import AIDeepLearning from './pages/Maincourses/AIDeepLearning';
import Frontenddevelopment from './pages/Maincourses/Frontenddevelopment'; 
import GameDevelopment from './pages/Maincourses/Game Development';
import Advancedpython from './pages/Maincourses/Advancedpython';   // Assuming you have an Advancedpython component   
import Socialmediamarketing from  './pages/Maincourses/Socialmediamarketing';
import CloudSecurity from './pages/Maincourses/CloudSecurity' ;// Assuming you have a CloudSecurity component
import Graphicdesign from './pages/Maincourses/Graphicdesign';
import Linuxadministration from './pages/Maincourses/Linuxadministration';
import IOSdevelopment from './pages/Maincourses/IOSdevelopment'; // Assuming you have an IOSDevelopment component
import Gitversioncontrol from './pages/Maincourses/Gitversioncontrol'; // Assuming you have a GitVersionControl component
import Web3development from './pages/Maincourses/Web3development'; // Assuming you have a Web3Development component
import EthicalHacking from './pages/Maincourses/EthicalHacking'; // Assuming you have an EthicalHacking component
import Businessintelligence from './pages/Maincourses/Businessintelligence'; // Assuming you have a BusinessIntelligence component
import Contentcreation from './pages/Maincourses/Contentcreation';
import JavaProgramming from './pages/Maincourses/Javaprogramming'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Hackingenroll from './pages/enrollpages/Hackingenroll'; // Assuming you have a Hacking component
import { FaArrowRight } from 'react-icons/fa';
import Datascienceenroll from './pages/enrollpages/Datascienceenroll';
import Fullstackenroll from './pages/enrollpages/Fullstackenroll';
import Datasciensepayment from './pages/payment/Datasciensepayment';
import Digitalenroll from './pages/enrollpages/Digitalenroll';
    


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  return localStorage.getItem("isLoggedIn") === "true";
});



  return (
    <BrowserRouter>
      <Navbar /> {/* Optional: add your Navbar here */}
      <Routes>
        
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Course Pages */}
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/blockchaindevelopment" element={<BlockchainDevelopment />} />
        <Route path="/allcoursecard" element={<AllCourseCard />} />
        <Route path="/programmingfundamentals" element={<ProgrammingFundamentals />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/mobileappdevelopment" element={<Mobileappdevelopment />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/devops" element={<Devops />} />
        <Route path="/aideeplearning" element={<AIDeepLearning />} />
        <Route path="/frontenddevelopment" element={<Frontenddevelopment/>} />
        <Route path="/gamedevelopment" element={<GameDevelopment />} />
        <Route path="/advancedpython" element={<Advancedpython />} />
        <Route path="/socialmediamarketing"element={<Socialmediamarketing />} />
        <Route path="/cloudsecurity" element={<CloudSecurity />} />
        <Route path="/graphicdesign" element={<Graphicdesign />} />
        <Route path="/linuxadministration" element={<Linuxadministration />} />
        <Route path="/iosdevelopment" element={<IOSdevelopment />} />
        <Route path="/gitversioncontrol" element={<Gitversioncontrol />} />
        <Route path="/web3development" element={<Web3development />} />
        <Route path="/ethicalhacking" element={<EthicalHacking />} />
        <Route path="/businessintelligence" element={<Businessintelligence />} />
        <Route path="/contentcreation" element={<Contentcreation />} />
        <Route path="/javaprogramming" element={<JavaProgramming />} />
        <Route path="/Hackingenroll" element={<Hackingenroll />} />
        <Route path="/Datascienceenroll" element={<Datascienceenroll />} />   
        <Route path="/Fullstackenroll" element={<Fullstackenroll />} />
        <Route path="/Datasciensepayment" element={<Datasciensepayment />} />
        <Route path="/Digitalenroll" element={<Digitalenroll />}  />


        {/* enroll pages*/}
        
        
        
        {/* Redirect to Home if no match */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
