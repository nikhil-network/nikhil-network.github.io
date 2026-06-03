import React from "react";

function App() {
  return (
    <div className="page">
      <div className="card">

        <img src="/profile.jpg" alt="Nikhil Basapurapu" className="profile-img" />

        <h1>Nikhil Reddy Basapurapu</h1>
        <h2>Senior Network Engineer</h2>

        <p className="summary">
          Strategic Senior Network Engineer with 8+ years of experience leading enterprise network deployments,
          Cisco ISE architecture, Aruba/Silver Peak SD-WAN migrations, Fortinet firewall segmentation,
          wireless, data center networking, and infrastructure modernization.
        </p>

        <div className="buttons">
          <a href="mailto:nikhil14307@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/nikhil-basapurapu/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/nikhil-network" target="_blank" rel="noreferrer">GitHub</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>

        <section>
          <h3>About Me</h3>
          <p>
            Senior Network Engineer experienced in designing, deploying, and supporting large-scale enterprise
            networks across campuses, warehouses, and global sites. Skilled in routing, switching, SD-WAN,
            Cisco ISE, Fortinet firewalls, wireless LAN controllers, Opengear OOB, and data center networking.
          </p>
        </section>

        <section>
          <h3>Key Achievements</h3>
          <ul>
            <li>8+ years of enterprise networking experience</li>
            <li>Designed and deployed networks across 35+ global sites</li>
            <li>Migrated 35+ sites to Aruba SD-WAN</li>
            <li>Managed Cisco ISE deployments across NA, EU, and AP regions</li>
            <li>Delivered $700,000+ in cost savings through optimized BOM design</li>
            <li>Led ACS to Cisco ISE migration across 1,000+ sites</li>
          </ul>
        </section>

        <section>
          <h3>Technical Skills</h3>

          <h4>Core & Data Center Switching</h4>
          <p>Cisco Catalyst 9500/9800, Nexus 9K/7K/5K, Arista 7050SX3, Dell VEP</p>

          <h4>Routing & SD-WAN</h4>
          <p>Aruba SD-WAN, Silver Peak EdgeConnect, Cisco ASR/ISR, BGP, OSPF, EIGRP</p>

          <h4>Security & Identity</h4>
          <p>Cisco ISE 3.x, NAC, NDA, TACACS+, Cisco ACS, Fortinet FortiGate, Cisco ASA</p>

          <h4>Wireless</h4>
          <p>Cisco WLC 9800/5520, Catalyst 9100/2800/3500 APs</p>

          <h4>Tools</h4>
          <p>Opengear OOB, Cisco ACI, SolarWinds, Wireshark, Microsoft Visio</p>
        </section>

        <section>
          <h3>Professional Experience</h3>

          <div className="job">
            <h4>Network Engineer III | Global Infrastructure</h4>
            <span>Aug 2021 – Present</span>
            <ul>
              <li>Directed end-to-end network architecture for 35+ new and remediated sites.</li>
              <li>Engineered Aruba SD-WAN migrations for 35+ global locations.</li>
              <li>Designed and deployed Cisco ISE across NA, EU, and AP regions.</li>
              <li>Implemented Fortinet firewall segmentation for OT and third-party access.</li>
              <li>Integrated Opengear Out-of-Band management for remote troubleshooting.</li>
            </ul>
          </div>

          <div className="job">
            <h4>Senior Network Engineer | ExxonMobil</h4>
            <span>Oct 2017 – Jul 2021</span>
            <ul>
              <li>Led migration of 1,000+ sites from Cisco ACS to Cisco ISE.</li>
              <li>Implemented MAB and 802.1x authentication for large enterprise environments.</li>
              <li>Executed MPLS to Silver Peak SD-WAN migrations.</li>
              <li>Created standardized templates for 5,000+ switch migrations.</li>
            </ul>
          </div>

          <div className="job">
            <h4>Network Engineer | Comerica Bank</h4>
            <span>Jun 2016 – Sep 2017</span>
            <ul>
              <li>Monitored critical ports and internet circuits for regional banking centers.</li>
              <li>Resolved root-cause network issues and supported service stability.</li>
              <li>Worked with ISPs and vendors to troubleshoot outages and faulty equipment.</li>
            </ul>
          </div>
        </section>

        <section>
          <h3>Education</h3>
          <p><strong>M.S. in Networking and Telecommunications</strong><br />Kent State University</p>
          <p><strong>B.Tech in Electronics & Communications</strong><br />JNTUH</p>
        </section>

        <section>
          <h3>Contact</h3>
          <p>Email: <a href="mailto:nikhil14307@gmail.com">nikhil14307@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/nikhil-network" target="_blank" rel="noreferrer">github.com/nikhil-network</a></p>
        </section>

      </div>
    </div>
  );
}

export default App;
