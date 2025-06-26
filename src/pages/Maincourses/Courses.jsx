
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react';
import CourseCard from '../../components/CourseCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// Course routes mapping
const courseRoutes = {
  'full stack development': '/fullstack',
  'digital marketing': '/Digital',
  'cybersecurity': '/cybersecurity',
  'blockchain development': '/Blockchaindevelopment',
  'programming fundamentals': '/ProgrammingFundamentals',
  'data science': '/DataScience',
  'mobile app development': '/Mobileappdevelopment',
  'ui/ux design': '/Uiux',
  'cloud computing': '/Cloud',
  'devops engineering': '/Devops',
  'artificial intelligence': '/AIDeepLearning',
  'game development': '/GameDevelopment',
  'advanced python': '/Advancedpython',
  'social media marketing': '/Socialmediamarketing',
  'cloud security': '/CloudSecurity',
  'graphic design': '/Graphicdesign',
  'linux administration': '/Linuxadministration',
  'ios development': '/IOSdevelopment',
  'git version control': '/Gitversioncontrol',
  'web3 development': '/Web3development',
  'ethical hacking': '/EthicalHacking',
  'business intelligence': '/Businessintelligence',
  'content creation': '/Contentcreation',
  'java programming': '/JavaProgramming',
};

export default function Courses() {
  // const [activeFilter, setActiveFilter] = useState('All');
  // const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();


  const [courseData1, setCourseData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:8000/api/courses/')
      .then(res => setCourseData(res.data))
      .catch(err => console.error("Failed to fetch courses", err));
  }, []);


  

  const courseData = [
    {
      id: 1,
      title: "Full Stack Development",
      desc: "Master React, Node.js, Express, and MongoDB to build modern web applications with 10 real-world projects.",
      icon: "💻",
      bgColor: "#e3f2fd",
      price: 99,
      duration: "12 Weeks",
      level: "Intermediate",
      category: "Development"
    },
    {
      id: 2,
      title: "Data Science",
      desc: "Learn Python, Pandas, NumPy, and Machine Learning algorithms with Kaggle competitions.",
      icon: "📊",
      bgColor: "#e8f5e9",
      price: 129,
      duration: "16 Weeks",
      level: "Advanced",
      category: "Data"
    },
    {
      id: 3,
      title: "Digital Marketing",
      desc: "SEO, Google Ads, Facebook Marketing, and Content Strategy with Google Analytics certification.",
      icon: "📈",
      bgColor: "#fff3e0",
      price: 79,
      duration: "8 Weeks",
      level: "Beginner",
      category: "Marketing"
    },
    {
      id: 4,
      title: "Cybersecurity",
      desc: "Ethical hacking, network security, and penetration testing with Capture The Flag challenges.",
      icon: "🔐",
      bgColor: "#fce4ec",
      price: 149,
      duration: "14 Weeks",
      level: "Advanced",
      category: "Security"
    },
    {
      id: 5,
      title: "Mobile App Development",
      desc: "Build cross-platform apps with React Native and publish to App Store and Google Play.",
      icon: "📱",
      bgColor: "#e0f7fa",
      price: 89,
      duration: "10 Weeks",
      level: "Intermediate",
      category: "Development"
    },
    {
      id: 6,
      title: "UI/UX Design",
      desc: "Master Figma, Adobe XD, and user research methodologies to build a professional portfolio.",
      icon: "🎨",
      bgColor: "#f3e5f5",
      price: 69,
      duration: "6 Weeks",
      level: "Beginner",
      category: "Design"
    },
    {
      id: 7,
      title: "Cloud Computing",
      desc: "AWS, Azure, and Google Cloud certification preparation with real deployment projects.",
      icon: "☁️",
      bgColor: "#e0f2f1",
      price: 119,
      duration: "12 Weeks",
      level: "Intermediate",
      category: "DevOps"
    },
    {
      id: 8,
      title: "Blockchain Development",
      desc: "Solidity, Smart Contracts, and DApps development on Ethereum and Polygon networks.",
      icon: "⛓️",
      bgColor: "#fff8e1",
      price: 159,
      duration: "16 Weeks",
      level: "Advanced",
      category: "Development"
    },
    {
      id: 9,
      title: "Programming Fundamentals",
      desc: "Python basics for absolute beginners - the perfect starting point for coding newbies.",
      icon: "🐍",
      bgColor: "#e8eaf6",
      price: "Free",
      duration: "4 Weeks",
      level: "Beginner",
      category: "Development"
    },
    {
      id: 10,
      title: "DevOps Engineering",
      desc: "Docker, Kubernetes, CI/CD pipelines and infrastructure as code with Terraform.",
      icon: "🛠️",
      bgColor: "#f1f8e9",
      price: 139,
      duration: "14 Weeks",
      level: "Advanced",
      category: "DevOps"
    },
    {
      id: 11,
      title: "Artificial Intelligence",
      desc: "Deep learning, neural networks, and AI model development with TensorFlow and PyTorch.",
      icon: "🧠",
      bgColor: "#ffebee",
      price: 149,
      duration: "16 Weeks",
      level: "Advanced",
      category: "Data"
    },
    {
      id: 12,
      title: "Game Development",
      desc: "Create 2D and 3D games using Unity and Unreal Engine with C# and C++ programming.",
      icon: "🎮",
      bgColor: "#e8f5e9",
      price: 119,
      duration: "14 Weeks",
      level: "Intermediate",
      category: "Development"
    },
    {
      id: 13,
      title: "Advanced Python",
      desc: "Master advanced Python concepts including decorators, generators, and async programming.",
      icon: "🐍",
      bgColor: "#e3f2fd",
      price: 89,
      duration: "8 Weeks",
      level: "Advanced",
      category: "Development"
    },
    {
      id: 14,
      title: "Social Media Marketing",
      desc: "Strategies for Instagram, TikTok, YouTube, and LinkedIn to grow your brand online.",
      icon: "📱",
      bgColor: "#f3e5f5",
      price: 69,
      duration: "6 Weeks",
      level: "Beginner",
      category: "Marketing"
    },
    {
      id: 15,
      title: "Cloud Security",
      desc: "Secure cloud infrastructure and applications on AWS, Azure, and Google Cloud.",
      icon: "🔒",
      bgColor: "#e0f7fa",
      price: 129,
      duration: "10 Weeks",
      level: "Advanced",
      category: "Security"
    },
    {
      id: 16,
      title: "Graphic Design",
      desc: "Master Adobe Photoshop, Illustrator, and InDesign for professional design work.",
      icon: "🎨",
      bgColor: "#fff3e0",
      price: 79,
      duration: "8 Weeks",
      level: "Beginner",
      category: "Design"
    },
    {
      id: 17,
      title: "Linux Administration",
      desc: "Become a Linux system administrator with shell scripting and server management.",
      icon: "🐧",
      bgColor: "#f5f5f5",
      price: 99,
      duration: "10 Weeks",
      level: "Intermediate",
      category: "DevOps"
    },
    {
      id: 18,
      title: "iOS Development",
      desc: "Build native iOS apps with Swift and SwiftUI for iPhone and iPad devices.",
      icon: "🍏",
      bgColor: "#fce4ec",
      price: 119,
      duration: "12 Weeks",
      level: "Intermediate",
      category: "Development"
    },
    {
      id: 19,
      title: "Git Version Control",
      desc: "Master Git, GitHub, and GitLab for professional version control workflows.",
      icon: "🔄",
      bgColor: "#e0f2f1",
      price: "Free",
      duration: "4 Weeks",
      level: "Beginner",
      category: "Development"
    },
    {
      id: 20,
      title: "Web3 Development",
      desc: "Build decentralized applications (dApps) with Ethereum, Solidity, and Web3.js.",
      icon: "🌐",
      bgColor: "#fff8e1",
      price: 149,
      duration: "14 Weeks",
      level: "Advanced",
      category: "Development"
    },
    {
      id: 21,
      title: "Ethical Hacking",
      desc: "Learn penetration testing and ethical hacking techniques with Kali Linux.",
      icon: "👨‍💻",
      bgColor: "#ffebee",
      price: 139,
      duration: "12 Weeks",
      level: "Advanced",
      category: "Security"
    },
    {
      id: 22,
      title: "Business Intelligence",
      desc: "Data visualization and analytics with Power BI, Tableau, and SQL.",
      icon: "📊",
      bgColor: "#e8eaf6",
      price: 109,
      duration: "10 Weeks",
      level: "Intermediate",
      category: "Data"
    },
    {
      id: 23,
      title: "Content Creation",
      desc: "Create engaging content for blogs, videos, and social media platforms.",
      icon: "✍️",
      bgColor: "#f1f8e9",
      price: 59,
      duration: "6 Weeks",
      level: "Beginner",
      category: "Marketing"
    },
    {
      id: 24,
      title: "Java Programming",
      desc: "Learn Java fundamentals and build applications with Spring Boot framework.",
      icon: "☕",
      bgColor: "#e3f2fd",
      price: 99,
      duration: "12 Weeks",
      level: "Intermediate",
      category: "Development"
    },
    {
      id: 25,
      title: "Advanced Cloud Computing",
      desc: "Master serverless architectures, containers, and advanced cloud patterns.",
      icon: "☁️",
      bgColor: "#e0f7fa",
      price: 149,
      duration: "14 Weeks",
      level: "Advanced",
      category: "DevOps"
    }
  ];

const categories = ['All', ...new Set(courseData.map(course => course.category))];

const filteredCourses = courseData.filter(course => {
  const matchesCategory = activeFilter === 'All' || course.category === activeFilter;
  const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       course.desc.toLowerCase().includes(searchQuery.toLowerCase());
  return matchesCategory && matchesSearch;
});

const handleCourseClick = (courseTitle) => {
  const normalizedTitle = courseTitle.toLowerCase();
   
  const route = courseRoutes[normalizedTitle] || '/courses';
  navigate(route);
};

return (
  <>
    <Navbar />
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 mb-3">Explore Our Courses</h1>
        <p className="lead text-muted">Hands-on learning with industry-relevant projects</p>
      </div>

      <div className="row mb-4 g-3">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="d-flex flex-wrap gap-2">
            <select 
              className="form-select"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {filteredCourses.map(course => (
            <div 
              key={course.id} 
              onClick={() => handleCourseClick(course.title)}
              style={{ cursor: 'pointer' }}
            >
              <CourseCard
                title={course.title}
                desc={course.desc}
                icon={course.icon}
                bgColor={course.bgColor}
                price={course.price}
                duration={course.duration}
                level={course.level}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <div className="display-4 mb-3">🔍</div>
          <h3>No courses found</h3>
          <p className="text-muted">Try adjusting your search or filters</p>
          <button 
            className="btn btn-outline-primary mt-3"
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('All');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      <div className="row mt-5 g-4 text-center">
        <div className="col-md-4">
          <div className="p-4 border rounded-3 bg-light">
            <h2 className="text-primary">100+</h2>
            <p className="mb-0">Hours of Content</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded-3 bg-light">
            <h2 className="text-primary">24/7</h2>
            <p className="mb-0">Mentor Support</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded-3 bg-light">
            <h2 className="text-primary">95%</h2>
            <p className="mb-0">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  </>
);
}


