import React from "react";

function App() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #061526;
          color: white;
        }

        .page {
          min-height: 100vh;
          padding: 40px 15px;
        }

        .card {
          max-width: 900px;
          margin: auto;
          padding: 35px;
          border: 1px solid #6f8194;
          border-radius: 8px;
          background: #071a2e;
          text-align: center;
        }

        .profile-img {
          width: 320px;
          max-width: 90%;
          border-radius: 8px;
          margin-bottom: 25px;
        }

        h1, h3, h4 {
          color: #00a3a3;
        }

        h1 {
          font-size: 36px;
          margin-bottom: 5px;
        }

        h2 {
          font-size: 18px;
          font-weight: normal;
        }

        p {
          line-height: 1.7;
        }

        .summary {
          max-width: 780px;
          margin: 20px auto;
        }

        .buttons a {
          display: inline-block;
          background: #008c8c;
          color: white;
          padding: 10px 18px;
          margin: 6px;
          border-radius: 5px;
          text-decoration: none;
        }

        .buttons a:hover {
          background: #00b3b3;
        }

        section {
          margin-top: 38px;
        }

        ul {
          list-style-position: inside;
          padding-left: 0;
          line-height: 1.8;
        }

        .job {
          margin-bottom: 30px;
        }

        .job span {
          color: #cbd5df;
          font-style: italic;
        }

        a {
          color: #00b3b3;
        }
      `}</style>

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
              </ul>
            </div>

            <div className="job">
              <h4>Senior Network Engineer | ExxonMobil</h4>
              <span>Oct 2017 – Jul 2021</span>
              <ul>
                <li>Led migration of 1,000+ sites from Cisco ACS to Cisco ISE.</li>
                <li>Implemented MAB and 802.1x authentication.</li>
                <li>Executed MPLS to Silver Peak SD-WAN migrations.</li>
                <li>Created standardized templates for 5,000+ switch migrations.</li>
              </ul>
            </div>

            <div className="job">
              <h4>Network Engineer | Comerica Bank</h4>
              <span>Jun 2016 – Sep 2017</span>
              <ul>
                <li>Monitored critical ports and internet circuits.</li>
                <li>Resolved root-cause network issues.</li>
                <li>Worked with ISPs and vendors to troubleshoot outages.</li>
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
    </>
  );
}

export default App;
