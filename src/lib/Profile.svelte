<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  // Static content
  const name = "Gaanesh Theivasigamani";
  const title = "InfoSec Undergraduate (NUS) | Security Engineer";
  const summary =
    "Passionate about cybersecurity and breaking (and fixing) things.";
  const about_me = `
Hey there! I'm Gaanesh, an Information Security undergraduate at the National University of Singapore. 
My passion and experiences lie in conducting penetration tests, digital forensics, and developing CTF challenges. 
I'm always eager to stack new knowledge, expand my horizons and exchange insights with others (I got heaps). 
Feel free to reach out for anything - I won't byte ;)
  `;
  const profileImageUrl = `${base}/Me.jpg`;
  const maxVisibleCerts = 6;

  // UI state
  let isNavActive = false;
  let darkMode = true;
  let certsCollapsed = true;
  let expanded = new Set<number>(); // indices of expanded experience cards

  // Experience data
  type ExpStatus = "upcoming" | "current" | "past";
  type Exp = {
    company: string;
    role: string;
    duration: string;
    status: ExpStatus;
    sortKey: number; // YYYYMM
    description: string[];
    logo: string;
  };

  const experience: Exp[] = [
    {
      company: "GIC",
      role:
        "GIC Professionals Programme (GPP) - Technology Track (Cybersecurity)",
      duration: "Mar 2026",
      status: "upcoming",
      sortKey: 202603,
      description: [
        "Returning Full-time Analyst for the 2026 GIC Professionals Programme (GPP) - Technology Track (Cybersecurity).",
        "Starting March 2026."
      ],
      logo: `${base}/GIC_logo.jpg`
    },
    {
      company: "GovTech Singapore",
      role: "Cybersecurity Intern",
      duration: "Jan-Mar 2026 • 3 months",
      status: "upcoming",
      sortKey: 202603,
      description: [
        "Incoming Cybersecurity Intern at the Cyber Security Group (CSG).",
        "Project Title: Agentic AI for Cybersecurity Operations.",
        "Focus on applying agentic AI to enhance SOC efficiency and automate threat detection workflows."
      ],
      logo: `${base}/govtech_logo.gif`
    },
    {
      company: "GIC",
      role: "Cybersecurity Intern",
      duration: "May-Aug 2025 • 4 months",
      status: "past",
      sortKey: 202508,
      description: [
        "Created an internal chatbot using agentic RAG architecture, reducing average response time from ~1 hour to ~20 seconds and improving team productivity by 99%.",
        "Developed automation scripts to replace manual workflows, reducing SLA from 5 days to ~2 minutes for key cloud security processes.",
        "Integrated APIs with CI/CD pipelines to streamline deployment and embed security checks.",
        "Worked with SaaS platforms such as Wiz, Snyk, and F5 to monitor and manage vulnerabilities.",
        "Provisioned infrastructure using AWS and Infrastructure as Code (IaC) practices.",
        "Awarded a return offer to join the GIC Professionals Programme (GPP) - Technology Track (Cybersecurity)."
      ],
      logo: `${base}/GIC_logo.jpg`
    },
    {
      company: "National University of Singapore (NUS)",
      role: "Vulnerability Researcher",
      duration: "Jul 2024 - Present",
      status: "current",
      sortKey: 202509,
      description: [
        "Part of the NUS Vulnerability Disclosure Programme",
        "Conducted in-depth penetration testing on various NUS infrastructures, identifying and reporting security vulnerabilities.",
        "Collaborated with NUS IT teams for secure solution implementation, adhering to confidentiality under NDA.",
        "Part of a year-long contract with the NUS Student Work Scheme (NSWS)."
      ],
      logo: `${base}/NUS_logo.png`
    },
    {
      company: "National University of Singapore (NUS)",
      role: "Undergraduate Teaching Assistant",
      duration: "Aug-Dec 2024 • 3 months",
      status: "past",
      sortKey: 202412,
      description: [
        "Taught CS2107 Introduction to Information Security",
        "Designed and developed hands-on challenges in cryptography, web security, digital forensics, and reverse engineering.",
        "Enhanced student engagement and learning outcomes through interactive sessions."
      ],
      logo: `${base}/NUS_logo.png`
    },
    {
      company: "Home Team Science and Technology Agency (HTX)",
      role: "Cyber AI Analytics Intern",
      duration: "May-Aug 2024 • 4 months",
      status: "past",
      sortKey: 202408,
      description: [
        "Performed vulnerability discovery across multiple applications, uncovering potential security risks.",
        "Configured and deployed an ELK stack for data analysis and visualization.",
        "Utilized Burp Suite for in-depth API analysis, identifying hidden functionalities and vulnerabilities."
      ],
      logo: `${base}/HTX_logo.png`
    },
    {
      company: "Cyber Security Agency of Singapore (CSA)",
      role: "Cybersecurity Specialist",
      duration: "Aug 2021 - Aug 2023 • 2 years",
      status: "past",
      sortKey: 202308,
      description: [
        "Acquired forensic evidence (system artefacts, system logs) to support root-cause analysis during cyber incidents.",
        "Performed digital forensics on files, network activity, system logs, and memory captures to determine attack vectors.",
        "Liaised with CII providers and victim entities to coordinate incident response and mitigation."
      ],
      logo: `${base}/CSA_logo.jpg`
    }
  ];


  $: experienceSorted = [...experience].sort(
    (a, b) => (b.sortKey ?? 0) - (a.sortKey ?? 0)
  );
  const yearOf = (job: Exp) => Math.floor((job.sortKey ?? 0) / 100);
  const primaryBadge = (job: Exp, index: number) =>
    job.status === "current"
      ? "live"
      : job.status === "upcoming"
      ? "upcoming"
      : index === 0
      ? "latest"
      : null;
  const badgeText = (kind: string) =>
    kind === "live" ? "Present" : kind === "upcoming" ? "Upcoming" : "Latest";


  const education = [
    {
      institution: "National University of Singapore (NUS)",
      degree: "Bachelor of Computing in Information Security (Hons*)",
      duration: "2023 - 2025"
    },
    {
      institution: "Singapore Polytechnic",
      degree: "Diploma in Aerospace Electronics && Diploma+ in Aviation Management",
      duration: "2017 - 2020"
    }
  ];
  const certifications = [
    {
      name: "OSED (OffSec Exploit Developer)",
      logo: `${base}/OSED_logo.svg`,
      date: "Enrolled • Expected 2025 ¯\\_(ツ)_/¯"
    },
    {
      name: "GREM (GIAC Reverse Engineering Malware)",
      logo: `${base}/GREM.png`,
      date: "Nov 2024 - Nov 2028"
    },
    { name: "OSWE (OffSec Web Expert)", logo: `${base}/OSWE_logo.svg`, date: "Issued Jul 2024" },
    { name: "GCFA (GIAC Certified Forensic Analyst)", logo: `${base}/GCFA.png`, date: "Jun 2024 - Jun 2028" },
    { name: "CEH (Certified Ethical Hacker)", logo: `${base}/CEH.png`, date: "Apr 2024 - Apr 2027" },
    { name: "OSCP (OffSec Certified Professional)", logo: `${base}/OSCP_logo.svg`, date: "Issued Mar 2024" }
  ];
  const projects = [
    {
      name: "IR Dojo - CTF Training For Everyone",
      duration: "Dec 2021 - Mar 2022",
      description:
        "Created a CTF focusing on Digital Forensics and Malware Analysis. Won the MCI Idea! Award."
    },
    {
      name: "BuildOn Singapore Hackathon",
      duration: "Aug 2020",
      description:
        "Developed a bed sorting algorithm using React and AWS services, reaching the semi-finals."
    },
    {
      name: "Live Smart Singapore Hackathon (ACRA)",
      duration: "Jul 2020 - Aug 2020",
      description:
        "Created an automated form processing flow with React and AWS, securing a Top 5 finalist position."
    }
  ];
  const skills = [
    "Penetration Testing",
    "Vulnerability Assessment",
    "Incident Response",
    "Digital Forensics",
    "Malware Analysis & Reverse Engineering"
  ];
  const testimonials = [
    {
      name: "Lee Jia Quan (Benny)",
      position: "Computer Science undergrad at NUS",
      text:
        "Working alongside Gaanesh has been a truly inspiring experience. His enthusiasm and curiosity have consistently fueled my own motivation to tackle new and challenging projects. Gaanesh is always eager to engage in meaningful discussions, particularly about trending advancements in cybertech and their implications on our work, which adds depth and relevance to our collaborations.\n\nWhat stands out most about Gaanesh is his unwavering dedication and goal-oriented mindset. When he commits to a project, he ensures that it is not only completed on time but also meets his high personal standards. This level of diligence makes collaborating with him an exceptional experience. His openness to exchanging ideas and his focus on achieving results within the set timeline create a productive and enjoyable working environment.",
      imageUrl: `${base}/Benny.jpg`,
      date: "04 Jan 2025",
      relationship: "Worked together in NUS"
    },
    {
      name: "Guo GangQuan",
      position: "Information Security undergrad at NUS",
      text:
        "Gaanesh is an exceptional team player who consistently motivates the team to exceed their potential. His strong communication skills and ability to collaborate effectively with diverse individuals make him a valuable asset in any group setting. With a solid academic background and a keen interest in cybersecurity, Gaanesh brings both knowledge and passion to his work. His problem-solving skills are remarkable, as he is quick to suggest alternative solutions when plans don't unfold as expected, ensuring progress and success in challenging situations.",
      imageUrl: `${base}/GQ.jpg`,
      date: "04 Jan 2025",
      relationship: "Worked together in NUS"
    }
  ];

  // Theme
  onMount(() => {
    const saved = localStorage.getItem("theme");
    darkMode = saved ? saved === "dark" : true;
    document.body.classList.toggle("dark", darkMode);
    if (!saved) localStorage.setItem("theme", "dark");
  });

  function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }
  function toggleExpanded(idx: number) {
  const next = new Set(expanded);
  if (next.has(idx)) next.delete(idx);
  else next.add(idx);
  expanded = next; // <-- assignment triggers re-render
}

</script>

<!-- Nav -->
<nav class="top-nav">
  <button
    class="menu-toggle"
    aria-label="Toggle Menu"
    aria-expanded={isNavActive}
    on:click={() => (isNavActive = !isNavActive)}
  >
    ☰
  </button>
  <div class="nav-links" class:active={isNavActive}>
    <a href="#AboutMe" on:click={() => (isNavActive = false)}>About Me</a>
    <a href="#experience" on:click={() => (isNavActive = false)}>Experience</a>
    <a href="#certifications" on:click={() => (isNavActive = false)}>Certifications</a>
    <a href="#projects" on:click={() => (isNavActive = false)}>Projects</a>
    <a href="#education" on:click={() => (isNavActive = false)}>Education</a>
    <a href="#skills" on:click={() => (isNavActive = false)}>Skills</a>
    <a href="#testimonials" on:click={() => (isNavActive = false)}>Testimonials</a>
  </div>
</nav>

<div class="container">
  <header>
    <img src={profileImageUrl} alt="" class="profile-pic" />
    <h1>{name}</h1>
    <h2>{title}</h2>
    <p>{summary}</p>

    <div class="social-media">
      <a href="https://github.com/GaaneshT" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/gaanesht/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="https://x.com/PlantSecurity" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
    </div>

    <div class="button-stack">
      <a class="theme-toggle" href="https://blog.gaanesh.com" target="_blank" rel="noopener noreferrer">📓 Visit My Blog</a>
      <button class="theme-toggle" on:click={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  </header>

  <div class="section" id="AboutMe">
    <h2>About me</h2>
    <p>{about_me}</p>
  </div>

  <!-- Experience -->
  <div class="section" id="experience">
    <h2>Experience</h2>
    <div class="experience-grid">
      {#each experienceSorted as job, i }
        {#if i === 0 || yearOf(experienceSorted[i - 1]) !== yearOf(job)}
          <div class="year-divider">{yearOf(job)}</div>
        {/if}

        <div class="experience card">
          {#if primaryBadge(job, i)}
            <span class="badge {primaryBadge(job, i)}">{badgeText(primaryBadge(job, i))}</span>
          {/if}

          <div class="experience-header">
            <div class="experience-details">
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <p><em>{job.duration}</em></p>
            </div>
            <img src={job.logo} alt="{job.company} Logo" class="company-logo" />
          </div>

          <ul>
            {#each (expanded.has(i) ? job.description : job.description.slice(0, 3)) as point}
              <li>{point}</li>
            {/each}
          </ul>

          {#if job.description.length > 3}
            <button class="link-btn" on:click={() => toggleExpanded(i)}>
            {expanded.has(i) ? "Show less" : "Show more"}
            </button>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <!-- Certifications -->
  <div class="section" id="certifications">
    <h2>Certifications</h2>
    <div class="cert-grid">
      {#each (certsCollapsed ? certifications.slice(0, maxVisibleCerts) : certifications) as cert}
        <article class="cert card">
          <div class="cert-meta">
            <div class="cert-text">
              <h3 class="cert-name">{cert.name}</h3>
              {#if cert.date}<p class="cert-date">{cert.date}</p>{/if}
            </div>
            <img src="{cert.logo}" alt="{cert.name} Logo" class="cert-logo" />
          </div>
        </article>
      {/each}
    </div>

    {#if certifications.length > maxVisibleCerts}
      <button class="link-btn" on:click={() => (certsCollapsed = !certsCollapsed)}>
        {certsCollapsed ? `Show ${certifications.length - maxVisibleCerts} more` : "Show less"}
      </button>
    {/if}
  </div>

  <!-- Projects -->
  <div class="section" id="projects">
    <h2>Projects</h2>
    {#each projects as project}
      <div class="projects card">
        <h3>{project.name}</h3>
        <p class="meta"><span class="pill pill--date">{project.duration}</span></p>
        <p>{project.description}</p>
      </div>
    {/each}
  </div>

  <!-- Education -->
  <div class="section" id="education">
    <h2>Education</h2>
    {#each education as edu}
      <div class="education card">
        <h3>{edu.institution}</h3>
        <h4>{edu.degree}</h4>
        <p class="meta"><span class="pill pill--date">{edu.duration}</span></p>
      </div>
    {/each}
  </div>

  <!-- Skills
  <div class="section" id="skills">
    <h2>Skills</h2>
    <ul>{#each skills as skill}<li>{skill}</li>{/each}</ul>
  </div> -->

  <!-- Testimonials -->
  <div class="section" id="testimonials">
    <h2>Testimonials</h2>
    {#each testimonials as t}
      <div class="testimonial card">
        {#if t.imageUrl}<img src={t.imageUrl} alt={t.name} class="testimonial-photo" />{/if}
        <p class="testimonial-text">"{t.text}"</p>
        <h4 class="testimonial-name">{t.name}</h4>
        <p class="testimonial-position">{t.position}</p>
        {#if t.relationship}<p class="testimonial-relationship">{t.relationship}</p>{/if}
        {#if t.date}<p class="testimonial-date"><em>{t.date}</em></p>{/if}
      </div>
    {/each}
  </div>
</div>

<style>
  /* ---------- Vars ---------- */
  :global(:root) {
    --bg-color: #f9fafc;
    --text-color: #333;
    --section-bg: #fff;
    --accent-color: #4a90e2;
    --header-color: #2c3e50;
    --card-bg: #f4f7fa;

    /* badge/layout metrics */
    --logo-size: 100px;
    --logo-gap: 16px;
    --badge-pad: 8px;
    --badge-reserve: 28px;
  }
  :global(body.dark) {
    --bg-color: #121212;
    --text-color: #e0e0e0;
    --section-bg: #1e1e1e;
    --accent-color: #90caf9;
    --header-color: #fff;
    --card-bg: #2e2e2e;
  }

  /* ---------- Base ---------- */
  :global(body) {
    font-family: Arial, sans-serif;
    margin: 0;
    background: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    transition: background-color .3s ease, color .3s ease;
    scroll-behavior: smooth;
  }
  .container {
    max-width: 1300px;
    margin: 20px auto;
    padding: 20px;
    background: var(--section-bg);
    box-shadow: 0 4px 8px rgba(0,0,0,.1);
    border-radius: 8px;
  }

  /* ---------- Header ---------- */
  header {
    padding: 60px 20px;
    background: linear-gradient(135deg, #708399 0%, #b4265136 100%);
    border-radius: 8px;
    color: #fff;
    text-align: center;
    position: relative;
    margin-bottom: 40px;
    box-shadow: 0 4px 8px rgba(0,0,0,.1);
    overflow: hidden;
  }
  header::before, header::after {
    content: "";
    position: absolute;
    width: 100px; height: 100px;
    background: rgba(255,255,255,.1);
    border-radius: 50%;
    z-index: 0;
  }
  header::before { top: -50px; right: -50px; transform: rotate(45deg); }
  header::after  { bottom: -50px; left: -50px; transform: rotate(-45deg); }
  header > * { position: relative; z-index: 1; }

  .profile-pic {
    width: 150px; height: 150px; object-fit: cover; border-radius: 50%;
    margin: 0 auto 20px; border: 4px solid var(--accent-color);
    box-shadow: 0 4px 8px rgba(0,0,0,.2);
    transition: transform .3s ease, box-shadow .3s ease;
  }
  .profile-pic:hover { transform: scale(1.05); box-shadow: 0 6px 12px rgba(0,0,0,.3); }

  header h1 { font-size: 3em; margin: 10px 0; color: var(--header-color); text-shadow: 1px 1px 2px rgba(0,0,0,.2); }
  header h2 {
    font-size: 1.5em; margin-bottom: 15px;
    background: linear-gradient(90deg, #011d06, #ff7e5f);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  :global(body.dark) header h2 {
    background: linear-gradient(90deg, #07ad26, #ff7e5f);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  header p {
    font-size: 1.1em; max-width: 600px; margin: 0 auto 20px; font-weight: 700;
    background: linear-gradient(90deg, #4c4b63, #6a11cb, #3f0d12);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  :global(body.dark) header p {
    background: linear-gradient(90deg, #64dab2, #735dc2, #9954b4);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .social-media { margin-top: 20px; display: flex; justify-content: center; gap: 15px; }
  .social-media a {
    width: 40px; height: 40px; display:flex; align-items:center; justify-content:center;
    border-radius: 50%; color:#fff; background: var(--accent-color); font-size: 1.2em;
    transition: background-color .3s, transform .3s;
  }
  .social-media a:hover { background: #6aa9e9; transform: scale(1.1); }
  .button-stack { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .theme-toggle {
    margin-top: 20px; padding: 10px 16px; min-width: 160px; border: none; border-radius: 4px;
    background: var(--accent-color); color:#fff; cursor: pointer; transition: background-color .3s;
  }
  .theme-toggle:hover { background: #6aa9e9; }

  /* ---------- Sections ---------- */
  .section { margin-block: 32px; padding: 15px; border-radius: 6px; background: var(--card-bg); }
  .section h2 {
    font-size: 1.8em; font-weight: 800; text-align: center; margin: 0 0 20px;
    background: linear-gradient(90deg, #4a90e2, #6a11cb);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    text-transform: uppercase; letter-spacing: 1px;
  }

  .card {
    padding: 15px; margin-bottom: 15px; border-radius: 8px; background: var(--card-bg);
    box-shadow: 0 2px 5px rgba(0,0,0,.1); transition: transform .2s, box-shadow .2s;
  }
  .card:hover { transform: translateY(-5px); box-shadow: 0 4px 8px rgba(0,0,0,.2); }

  /* ---------- Experience ---------- */
  .experience-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 16px; }
  .year-divider {
    grid-column: 1 / -1; margin: 4px 0 0; padding-top: 6px; font-weight: 800; letter-spacing: .06em;
    text-transform: uppercase; color: var(--accent-color); border-top: 1px solid rgba(255,255,255,.06); opacity: .95;
  }
  .experience.card {
    position: relative;
    display: flex; flex-direction: column;
    border-left: 2px solid var(--accent-color); padding-left: 12px;
  }
  .experience-header { display: flex; align-items: center; gap: 16px; margin-bottom: 10px; }
  .experience-details { flex: 1; }
  .experience-details h3 { font-size: 1.2em; color: var(--header-color); margin: 0 0 5px; font-weight: 600; }
  .experience-details h4 { font-size: 1em; font-style: italic; margin: 0 0 .5em; color: var(--text-color); }
  .experience-details p { font-size: .95em; margin: 0 0 1em; line-height: 1.4; }

  /* clamp on mobile only */
  @media (max-width: 899px) {
    .experience-details h3 {
      display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
    }
  }

  .company-logo {
    width: var(--logo-size); height: var(--logo-size); object-fit: contain; border-radius: 8px;
    background: var(--section-bg); box-shadow: 0 2px 4px rgba(0,0,0,.1); padding: 6px; opacity: .95; flex-shrink: 0;
    transition: transform .3s ease;
  }
  .company-logo:hover { transform: scale(1.1); }

  .experience.card ul { margin-top: 10px; padding-left: 20px; list-style-type: disc; }
  .experience.card li { margin-bottom: 5px; font-size: .9em; }
  .experience.card li::marker { content: "➤ "; color: var(--text-color); }

  .link-btn {
    margin-top: 8px; border: 0; background: none; color: var(--accent-color);
    font-weight: 600; cursor: pointer; padding: 4px 0;
  }
  .link-btn:hover { text-decoration: underline; }

  /* Badge: avoid logo overlap + reserve space */
  .experience.card .badge {
    position: absolute;
    top: var(--badge-pad);
    right: calc(var(--logo-size) + var(--logo-gap) + var(--badge-pad));
    padding: 2px 8px; border-radius: 999px; font-size: 12px; font-weight: 700;
    background: var(--section-bg); border: 1px solid rgba(255,255,255,.08); z-index: 3;
  }
  .experience.card:has(.badge) { padding-top: var(--badge-reserve); }
  .badge.latest   { background: #2f80ed1a; border-color: #2f80ed40; color: #9ec4ff; }
  .badge.live     { background: #27ae601a; border-color: #27ae6040; color: #9ee2bd; }
  .badge.upcoming { background: #f2994a1a; border-color: #f2994a40; color: #ffcf9e; }

  /* ---------- Certifications ---------- */
  .cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px; }
  .cert.card { height: 100%; display: flex; flex-direction: column; }
  .cert-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .cert-text { display: flex; flex-direction: column; gap: 4px; }
  .cert-name { margin: 0; font-size: 1rem; color: var(--header-color); font-weight: 600; }
  .cert-date { margin: 0; font-size: .9rem; color: var(--accent-color); font-style: italic; }
  .cert-logo { width: 56px; height: 56px; object-fit: contain; background: var(--section-bg); border-radius: 8px; padding: 6px; box-shadow: 0 1px 3px rgba(0,0,0,.12); }
  @media (max-width: 900px) { .cert-grid { grid-template-columns: 1fr; } }

  /* ---------- Navbar ---------- */
  .top-nav {
    position: sticky; top: 0; background: var(--section-bg); padding: 10px; text-align: center;
    z-index: 999; box-shadow: 0 2px 4px rgba(0,0,0,.1);
  }
  .top-nav a { margin: 0 15px; color: var(--accent-color); text-decoration: none; font-weight: bold; transition: color .3s; }
  .top-nav a:hover { color: #6aa9e9; }
  .menu-toggle { display: none; font-size: 1.5em; background: none; border: none; color: var(--accent-color); cursor: pointer; }

  /* ---------- Testimonials ---------- */
  .testimonial.card {
    display: flex; flex-direction: column; align-items: center; text-align: center;
    border-left: 2px solid var(--accent-color); padding-left: 12px;
  }
  .testimonial-photo { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin-bottom: 10px; border: 2px solid var(--accent-color); }
  .testimonial-text { font-style: italic; margin: 10px 0; }
  .testimonial-name { font-weight: bold; margin: 5px 0; color: var(--header-color); }
  .testimonial-position { font-size: .9em; color: var(--accent-color); }

  /* ---------- Mobile tweaks ---------- */
  @media (max-width: 600px) {
    :global(:root) { --logo-size: 50px; --logo-gap: 12px; --badge-reserve: 26px; }
    .testimonial-photo { width: 60px; height: 60px; }
    .testimonial-text { font-size: .9em; }
    .top-nav .menu-toggle { display: block; z-index: 1001; }
    .nav-links {
      display: none; flex-direction: column; gap: 10px; background: var(--section-bg);
      position: fixed; top: 60px; left: 0; right: 0; z-index: 1000; padding: 15px;
      box-shadow: 0 4px 8px rgba(0,0,0,.1); transform: translateY(-20px); opacity: 0; pointer-events: none;
      transition: transform .3s ease, opacity .3s ease;
    }
    .nav-links.active { display: flex; transform: translateY(0); opacity: 1; pointer-events: auto; }
    .nav-links a { padding: 10px 0; text-align: center; border-bottom: 1px solid #ccc; color: var(--text-color); font-size: 1.2em; }
    .nav-links a:last-child { border-bottom: none; }
    header { padding: 40px 15px; }
    .profile-pic { width: 100px; height: 100px; border-width: 3px; }
    header h1 { font-size: 2em; }
    header h2 { font-size: 1.2em; }
    header p { font-size: 1em; }
  }

  #projects { --dot: 10px; --rail-x: -20px; }

#projects .projects.card{
  position: relative;
  border: 1px solid rgba(255,255,255,.08);
  background:
    linear-gradient(180deg, rgba(255,255,255,.03), transparent 60%),
    var(--card-bg);
  padding: 16px 16px 16px 18px; 
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}

/* timeline dot */
#projects .projects.card::before{
  content:"";
  position:absolute;
  left: var(--rail-x);
  top: 22px;
  width: var(--dot);
  height: var(--dot);
  border-radius: 999px;
  background: var(--accent-color);
  box-shadow: 0 0 0 4px rgba(74,144,226,.18); /* soft glow */
}

/* timeline rail between cards */
#projects .projects.card:not(:last-of-type)::after{
  content:"";
  position:absolute;
  left: calc(var(--rail-x) + (var(--dot) / 2) - 1px);
  top: calc(22px + var(--dot));
  bottom: -16px;              /* extends past the card shadow */
  width: 2px;
  background: linear-gradient(180deg,
    rgba(255,255,255,.25), rgba(255,255,255,.05));
}

/* project heading + meta */
#projects .projects.card h3{
  margin: 0 0 6px;
  font-weight: 700;
  color: var(--header-color);
}
#projects .projects.card p em{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 8px;
  border-radius: 999px;
  font-style: normal;
  font-size: .85rem;
  color: var(--accent-color);
  background: rgba(74,144,226,.14);
  border: 1px solid rgba(74,144,226,.28);
}


/* hover polish */
#projects .projects.card:hover{
  transform: translateY(-3px);
  border-color: rgba(144,202,249,.35);
  box-shadow: 0 10px 24px rgba(0,0,0,.25);
}


/* ================================
   EDUCATION — badge + soft gradient
   ================================ */
#education .education.card{
  position: relative;
  border: 1px solid rgba(255,255,255,.08);
  background:
    radial-gradient(900px 180px at 10% -10%, rgba(74,144,226,.12), transparent 60%),
    var(--card-bg);
  overflow: hidden;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}

/* left accent bar */
#education .education.card::before{
  content:"";
  position:absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: linear-gradient(180deg, #6a11cb, #4a90e2);
  opacity: .85;
}

/* small cap icon badge */
#education .education.card::after{
  content:"🎓";
  position:absolute;
  left: 10px;
  top: 10px;
  font-size: 16px;
  opacity:.9;
}

/* headings + meta */
#education .education.card h3{
  margin: 0 0 6px;
  font-weight: 700;
  color: var(--header-color);
}
#education .education.card h4{
  margin: 0 0 8px;
  font-weight: 600;
  color: rgba(255,255,255,.85);
}
:global(body:not(.dark)) #education .education.card h4{
  color: #4a4a4a;
}


#education .education.card p em{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 8px;
  border-radius: 999px;
  font-style: normal;
  font-size: .85rem;
  color: var(--accent-color);
  background: rgba(74,144,226,.14);
  border: 1px solid rgba(74,144,226,.28);
}


/* hover */
#education .education.card:hover{
  transform: translateY(-3px);
  border-color: rgba(144,202,249,.35);
  box-shadow: 0 10px 24px rgba(0,0,0,.25);
}


@media (min-width: 900px){
  #education { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  #education > h2 { grid-column: 1 / -1; } 
}


@media (max-width: 600px){
  #projects { --rail-x: -18px; --dot: 9px; }
}
#education {
  --edu-icon-size: 18px;   /* font-size for the emoji */
  --edu-icon-gap:  12px;   /* space between emoji and text */
}

/* reserve space on the left equal to icon + gap */
#education .education.card{
  padding-left: calc(16px + var(--edu-icon-size) + var(--edu-icon-gap));
}


#education .education.card::after{
  left: 16px;              /* inside the card, clear of the accent bar */
  top: 14px;
  font-size: var(--edu-icon-size);
  line-height: 1;          /* avoid extra vertical wiggle */
}


@media (max-width: 600px){
  #education {
    --edu-icon-size: 16px;
    --edu-icon-gap: 10px;
  }
}
.pill{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: .85rem;
  font-style: normal;
  color: var(--accent-color);
  background: rgba(74,144,226,.14);
  border: 1px solid rgba(74,144,226,.28);
}

/* CSS calendar icon (consistent across platforms) */
.pill--date::before{
  content:"";
  width: 14px;
  height: 12px;
  border-radius: 3px;
  /* top “binding” bar + body */
  background:
    linear-gradient(0deg, rgba(255,255,255,.85), rgba(255,255,255,.85)) top/100% 3px no-repeat,
    var(--accent-color);
  box-shadow: inset 0 0 0 2px rgba(74,144,226,.15);
}
</style>
