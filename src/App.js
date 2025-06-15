import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

const Page = ({ bg, children }) => (
  <div className="page" style={{ backgroundImage: `url(${bg})` }}>
    <div className="content">{children}</div>
  </div>
);

const Home = () => (
  <Page bg="/Home.jpg">
    <h1>Welcome to ConsulTax</h1>
    <p>We simplify tax and administrative compliance for businesses in Qatar.</p>
  </Page>
);

const About = () => (
  <Page bg="/about.jpg">
    <h2>Company Overview</h2>
    <p>ConsulTax provides specialized administrative and operational support to businesses in Qatar...</p>
    <h3>Mission</h3>
    <p>To support businesses through reliable, structured administrative services.</p>
    <h3>Vision</h3>
    <p>To be recognized as Qatar’s most dependable admin coordination partner.</p>
  </Page>
);

const Services = () => (
  <Page bg="/services.jpg">
    <h2>Our Services</h2>
    <ul>
      <li>📄 Tax Assessment & Exemption Support</li>
      <li>📑 Document Management & Regulatory Communication</li>
      <li>🧾 Financial Structuring & Reporting</li>
    </ul>
  </Page>
);

const Approach = () => (
  <Page bg="/approach.jpg">
    <h2>Our Approach</h2>
    <ol>
      <li><strong>Assess:</strong> Analyze your current process</li>
      <li><strong>Organize:</strong> Structure records and action plan</li>
      <li><strong>Execute:</strong> Submit and communicate efficiently</li>
      <li><strong>Support:</strong> Provide ongoing follow-up</li>
    </ol>
  </Page>
);

const WhyUs = () => (
  <Page bg="/why.jpg">
    <h2>Why Choose Us</h2>
    <ul>
      <li>✔ Clear regulatory communication</li>
      <li>✔ Professional documentation</li>
      <li>✔ Startup to enterprise support</li>
    </ul>
  </Page>
);

const Clients = () => (
  <Page bg="/clients.jpg">
    <h2>Who We Serve</h2>
    <ul>
      <li>• Businesses under assessment</li>
      <li>• Startups needing structured setup</li>
      <li>• Companies outsourcing admin</li>
    </ul>
  </Page>
);

const Contact = () => (
  <Page bg="/contact.jpg">
    <h2>Contact Us</h2>
    <p>📍 Umm Ghuwailina, Near VIP Hotel, Doha</p>
    <p>📞 +974 33125566 | 📧 info@consultaxqa.com</p>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="text" placeholder="Mobile Number" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message..." rows="4" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </Page>
);

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/approach">Approach</Link>
        <Link to="/why">Why Us</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/why" element={<WhyUs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
