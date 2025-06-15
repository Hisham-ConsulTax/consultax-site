import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="space-y-12 p-4 sm:p-6 md:p-10 lg:p-16 bg-white text-blue-900">
      <section className="text-center space-y-4">
        <img src="/logo.png" alt="ConsulTax Logo" className="mx-auto w-24 h-24" />
        <h1 className="text-3xl sm:text-4xl font-bold">ConsulTax for Administrative Consultations</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Specialized administrative and operational support tailored for companies in Qatar.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Company Overview</h2>
            <p>
              We assist businesses facing tax assessments—supporting documentation, penalty
              exemption requests, and communication with the General Tax Authority (GTA).
              Our services extend to operational setup, financial structuring, and management
              systems implementation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Mission & Vision</h2>
            <p className="mb-2">
              <strong>Mission:</strong> To support businesses with reliable, structured services that
              meet regulatory needs confidently.
            </p>
            <p>
              <strong>Vision:</strong> To be a trusted administrative partner known for integrity and
              efficiency in Qatar.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="p-6 text-blue-900">
      <img src="/about.jpg" alt="About Us" className="w-full max-w-3xl mx-auto mb-6 rounded-xl shadow" />
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p>
        At ConsulTax, our mission is to support businesses through administrative clarity and reliable
        regulatory coordination. Our vision is to become the go-to partner for compliance and operational
        efficiency in Qatar.
      </p>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="p-6 text-blue-900">
      <img src="/services.jpg" alt="Our Services" className="w-full max-w-3xl mx-auto mb-6 rounded-xl shadow" />
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Tax Assessment Support</li>
        <li>Penalty Exemption Requests</li>
        <li>Company Formation & Structuring</li>
        <li>Bookkeeping and Financial Reporting</li>
        <li>PRO Services & Liquidation Support</li>
      </ul>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="p-6 text-blue-900">
      <img src="/contact.jpg" alt="Contact Us" className="w-full max-w-3xl mx-auto mb-6 rounded-xl shadow" />
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>Let us take care of the complexity — so you can focus on growth.</p>
      <div className="mt-4 space-y-2">
        <p><Phone size={18}/> +974 33125566</p>
        <p><Mail size={18}/> info@consultaxqa.com</p>
        <p><Globe size={18}/> www.consultaxqa.com</p>
        <p>📍 Global Business Centre – Doha, Qatar</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav className="flex justify-center gap-4 text-blue-700 font-semibold p-4 border-b">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}