<!-- Open Graph Preview -->

<meta property="og:title" content="CyberNet Detective" />
<meta property="og:description" content="Reverse phone, email, and IP lookup web app focused on speed, clarity, and privacy." />
<meta property="og:image" content="https://ytasheva.github.io/CyberNet-Detective/frontend/src/CyberNet-banner.png" />
<meta property="og:url" content="https://ytasheva.github.io/CyberNet-Detective/index.html#" />
<meta name="twitter:card" content="summary_large_image" />

<p align="center">
  <a href="https://yuliya-tasheva.co.uk/">
    <img src=".images/CyberNet-banner.png" width="900px" alt="CyberNet Detective - Reverse Phone, Email Lookup Service and IP Geolocation">
  </a>
</p>

<h1 align="center">CyberNet Detective</h1>

<h3 align="center">Reverse Phone, Email Lookup Service and IP Geolocation</h3>

<p align="center"><b>Know who is contacting you before you respond.</b></p>

<p align="center">
CyberNet Detective helps you identify unknown callers, investigate suspicious emails, and understand IP address locations in seconds using trusted public data. Built for clarity, speed, and privacy, the app delivers actionable insights without accounts, subscriptions, or hidden tracking.
</p>

<p align="center">
  <a href="https://github.com/ytasheva">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg?style=for-the-badge" alt=""></a>
  <a href="https://github.com/ytasheva/CyberNet-Detective/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/ytasheva/CyberNet-Detective.svg?style=for-the-badge" alt=""></a>
  <a href="https://github.com/ytasheva/CyberNet-Detective/issues">
      <img src="https://img.shields.io/github/issues/ytasheva/CyberNet-Detective.svg?style=for-the-badge" alt=""></a>
  <a href="https://github.com/ytasheva/CyberNet-Detective/network/members">
      <img src="https://img.shields.io/github/forks/ytasheva/CyberNet-Detective.svg?style=for-the-badge" alt=""></a>
  <a href="https://github.com/ytasheva/CyberNet-Detective/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/ytasheva/CyberNet-Detective?style=for-the-badge" alt="License"></a>
  <a href="https://yuliya-tasheva.co.uk/">
    <img src="https://img.shields.io/badge/Website-yuliya--tasheva.co.uk-0066CC?style=for-the-badge" alt="Website"></a>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/yuliya-stella-tasheva" target="_blank">
    <img src="https://img.shields.io/badge/-Follow%20on%20LinkedIn-0077B5?logo=linkedin&style=flat-square" alt="Follow on LinkedIn"></a>
  <img src="https://img.shields.io/github/last-commit/ytasheva/clockwise?style=flat-square&color=green" alt="Last Commit">
</p>

<p align="center">
  <b>🌟 If you find this helpful, please star this repo — it helps others discover these resources!</b>
</p>

<p align="center">
  <a href="https://ytasheva.github.io/CyberNet-Detective/index.html#">
    <img src="https://img.shields.io/badge/Live%20Demo-Online-success?style=for-the-badge" alt="Live Demo"></a>
  <img src="https://img.shields.io/badge/HTML-5-orange?style=for-the-badge" alt="HTML">
  <img src="https://img.shields.io/badge/CSS-3-blue?style=for-the-badge" alt="CSS">
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-5-purple?style=for-the-badge" alt="Bootstrap">
</p>

<hr>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#about">About</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#tools">Tools</a></li>
  <li><a href="#api">API Usage</a></li>
  <li><a href="#architecture">Architecture Overview</a></li>
  <li><a href="#privacy">Privacy and Data Handling</a></li>
  <li><a href="#use-cases">Use Cases</a></li>
  <li><a href="#comparison">How It Compares</a></li>
  <li><a href="#faq">FAQ</a></li>
  <li><a href="#roadmap">Roadmap</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

<hr>

<h2 id="about">About</h2>
<p>
CyberNet Detective is a web application for fast, privacy focused investigation of phone numbers, email addresses, and IP addresses. The product helps individuals and small teams identify unknown callers, analyze suspicious emails, and understand network locations using trusted public data sources. The interface focuses on speed, clarity, and practical results without requiring accounts or subscriptions.
</p>

<h2 id="features">Features</h2>
<ul>
  <li>Reverse phone number lookup with spam and risk indicators</li>
  <li>Reverse email lookup for identity and reputation checks</li>
  <li>IP geolocation with IPv4 and IPv6 detection</li>
  <li>Country, region, ISP, and network metadata</li>
  <li>Interactive map based location results</li>
  <li>Responsive design for desktop and mobile browsers</li>
</ul>

<h2 id="tools">Tools</h2>
<ul>
  <li><b>Call Tracker</b>. Look up unknown phone numbers and assess spam or fraud risk</li>
  <li><b>Email Tracker</b>. Investigate unfamiliar or suspicious email addresses</li>
  <li><b>IP Tracker</b>. Identify IP address location, network type, and hosting details</li>
</ul>

<h2 id="api">API Usage</h2>
<p>
CyberNet Detective integrates multiple third party public data APIs to retrieve investigation results. Requests are made client side and results are normalized before display.
</p>
<ul>
  <li>Reverse phone lookup API for caller metadata and spam signals</li>
  <li>IP intelligence API for geolocation, ISP, ASN, and threat indicators</li>
  <li>Email reputation API for domain and address level checks</li>
</ul>
<p>
No personal user data is stored on the server. All searches are processed in real time.
</p>

<h2 id="architecture">Architecture Overview</h2>
<ul>
  <li>Client side single page interface running fully in the browser</li>
  <li>JavaScript manages validation, API requests, and result rendering</li>
  <li>Bootstrap provides layout, grid system, and responsive components</li>
  <li>Modals enforce terms acceptance before displaying reports</li>
  <li>Client side storage used for temporary session persistence only</li>
</ul>

<h2 id="privacy">Privacy and Data Handling</h2>
<ul>
  <li>No user accounts or authentication required</li>
  <li>No personal search data stored on servers</li>
  <li>All lookups processed in real time using third party public data APIs</li>
  <li>Client side storage used only for session level state</li>
  <li>No tracking cookies or analytics tied to user identity</li>
</ul>
<p>
CyberNet Detective is designed to provide transparency and insight while respecting user privacy at every step.
</p>

<h2 id="tech-stack">Tech Stack</h2>Tech Stack</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Bootstrap</li>
  <li>Public investigation APIs</li>
</ul>

<h2 id="getting-started">Getting Started</h2>
<p>
Clone the repository and open the project locally.
</p>
<pre><code>git clone https://github.com/YTasheva/CyberNet-Detective.git
cd CyberNet-Detective</code></pre>

<h2 id="usage">Usage</h2>
<p>
Enter a phone number, email address, or IP address into the corresponding tool. Accept the terms of use to view the results. Reports display summary data first with expanded details available where supported.
</p>

<ul>
  <li><a href="https://ytasheva.github.io/CyberNet-Detective/">Live site</a></li>
  <li><a href="https://github.com/YTasheva/CyberNet-Detective/">GitHub repository</a></li>
<li><a href="https://docs.google.com/presentation/d/1I_WNV0jQYidl4fSwkvmmIzwbB3qQf8Q1-QmXXNocJ7s/edit?usp=sharing/">Presentation Slides</a></li>
</ul>


<h2 id="use-cases">Use Cases</h2>
<ul>
  <li><b>Individuals</b>. Check unknown callers, suspicious emails, or unfamiliar IP addresses before responding</li>
  <li><b>Small businesses</b>. Screen incoming leads, reduce spam contact, and flag risky network activity</li>
  <li><b>Freelancers</b>. Verify clients and contacts during onboarding</li>
  <li><b>Students</b>. Learn how phone, email, and IP intelligence tools work in practice</li>
  <li><b>Security curious users</b>. Explore basic cyber investigation workflows without complex tools</li>
</ul>

<h2 id="comparison">How CyberNet Detective Compares</h2>
<ul>
  <li>No account creation or login required</li>
  <li>No paywalls for basic lookup results</li>
  <li>Focused on investigation clarity instead of ads</li>
  <li>Transparent use of public data sources</li>
  <li>Runs fully in the browser with no software installation</li>
</ul>

<h2 id="disclaimer">Disclaimer</h2>
<p>
CyberNet Detective provides access to publicly available data and reputation signals for informational purposes only. Results should not be treated as legal, financial, or professional advice. Accuracy depends on third party data sources and availability. Always verify critical information through official channels.
</p>

<h2 id="faq">FAQ</h2>
<ul>
  <li><b>Is CyberNet Detective free to use?</b><br>Yes. All core lookup features are available without payment.</li>
  <li><b>Do I need to create an account?</b><br>No. You can use all tools without signing up.</li>
  <li><b>Is my search data stored?</b><br>No. Searches are processed in real time and not saved.</li>
  <li><b>Where does the data come from?</b><br>Results come from trusted public data and reputation services.</li>
  <li><b>Can I use this on my phone?</b><br>Yes. The interface is responsive and works on mobile browsers.</li>
</ul>

<h2 id="roadmap">Roadmap</h2>
<ul>
  <li>Expanded threat and fraud indicators</li>
  <li>Saved reports and history</li>
  <li>Improved data visualization</li>
</ul>

<h2 id="contributing">Contributing</h2>
<p>
Fork the repository, create a feature branch, and submit a pull request with clear commit messages.
</p>

<h2 id="license">License</h2>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p>
MIT License. See the LICENSE file for details.
</p>

<h2 id="contact">Contact</h2>
<p>
Created by <a href="https://yuliya-tasheva.co.uk/" target="_blank">Yuliya Tasheva</a><br>
  <a href="https://github.com/josh484/" target="_blank">Joshua Mendoza</a><br>
  <a href="https://github.com/enx-code/" target="_blank">Enkhbat Baatar</a><br>
  <a href="https://github.com/KevinDsouza7)/" target="_blank">Kevin Dsouza</a><br>
</p>

