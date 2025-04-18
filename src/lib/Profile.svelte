<script>
    import { base } from "$app/paths";

    let name = "Gaanesh Theivasigamani";
    let title = "InfoSec Undergraduate (NUS) | Security Engineer";
    let summary = "Passionate about cybersecurity and breaking things." 

    let about_me = `
        Hey there! I'm Gaanesh, an Information Security undergraduate at the National University of Singapore. 
        My passion and experiences lie in conducting penetration tests, digital forensics, and developing CTF challenges. 
        I'm always eager to stack new knowledge, expand my horizons and exchange insights with others (I got heaps). 
        Feel free to reach out for anything - I won't byte ;)
    `;
    let profileImageUrl = `${base}/Me.jpg`;
    let isNavActive = false;
    let darkMode = true; // Default to dark mode

    

// Check and apply the theme on page load
if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        // Apply the saved theme
        darkMode = savedTheme === "dark";
    } else {
        // Default to dark mode if no preference is stored
        darkMode = true;
        localStorage.setItem("theme", "dark");
    }

    // Apply the theme class to the body
    document.body.classList.toggle("dark", darkMode);
}

// Toggle Dark Mode
function toggleDarkMode() {
    darkMode = !darkMode; // Toggle the dark mode value
    document.body.classList.toggle("dark", darkMode); // Apply the class
    localStorage.setItem("theme", darkMode ? "dark" : "light"); // Save preference
}


    let experience = [
        {
            company: "GIC",
            role: "GIC Internship Programme (GIP) - Cyber Security Track",
            duration: "May 2025 - Aug 2025 - 4 Months",
            description: [
                "Incomming Summer Intern for the GIC Internship Programme (GIP) - Cyber Security Track.",
            ],
            logo: `${base}/GIC_logo.jpg`,
        },
        {
            company: "National University of Singapore (NUS)",
            role: "Vulnerability Researcher - NUS Vulnerability Disclosure Programme",
            duration: "Jul 2024 - Present",
            description: [
                "Conducted in-depth penetration testing on various NUS infrastructures, identifying and reporting security vulnerabilities.",
                "Collaborated with NUS IT teams for secure solution implementation, adhering to confidentiality under NDA.",
                "Part of a year-long contract with the NUS Student Work Scheme (NSWS).",
            ],
            logo: `${base}/NUS_logo.png`,
        },
        {
            company: "National University of Singapore (NUS)",
            role: "Undergraduate Teaching Assistant - CS2107 Introduction to Information Security",
            duration: "Aug 2024 - Dec 2024 - 3 Months",
            description: [
                "Designed and developed hands-on challenges in cryptography, web security, digital forensics, and reverse engineering.",
                "Enhanced student engagement and learning outcomes through interactive sessions.",
            ],
            logo: `${base}/NUS_logo.png`,
        },
        {
            company: "Home Team Science and Technology Agency (HTX)",
            role: "Cyber AI Analytics Intern",
            duration: "May 2024 - Aug 2024 - 4 Months",
            description: [
                "Performed vulnerability discovery across multiple applications, uncovering potential security risks.",
                "Configured and deployed an ELK stack for data analysis and visualization.",
                "Utilized Burp Suite for in-depth API analysis, identifying hidden functionalities and vulnerabilities.",
            ],
            logo: `${base}/HTX_logo.png`,
        },
        {
            company: "Cyber Security Agency of Singapore (CSA)",
            role: "Cyber Security Specialist",
            duration: "Aug 2021 - Aug 2023 - 2 Years",
            description: [
                "Acquiring Forensic Evidence: I work with victim entities to acquire forensic evidence, including system artifacts and system logs, that can be used to determine the root cause of a cyber incident.",
                "Digital Forensics Analysis: Utilizing various forensic tools and techniques, I examine the digital evidence obtained from victim entities to determine the underlying cause of a cyber attack. This involves scrutinizing system artifacts like files, network activity logs, system logs, and memory captures.",
                "Liaising with CIIs and Victims: I act as a liaison between Critical Information Infrastructure providers (CIIs) and victim entities, communicating information about the incident and facilitating a coordinated response to aid in mitigationSpecialising",
            ],
            logo: `${base}/CSA_logo.jpg`,
        },
    ];

    let education = [
        {
            institution: "National University of Singapore (NUS)",
            degree: "Bachelor of Computing in Information Security (Hons*)",
            duration: "2023 - 2025",
        },
        {
            institution: "Singapore Polytechnic",
            degree: "Diploma in Aerospace Electronics && Diploma+ in Aviation Management",
            duration: "2017 - 2020",
        },
    ];
    let certifications = [
        {
        name: "OSED (OffSec Exploit Developer)",
        logo: `${base}/OSED_logo.svg`,
        date: "Enrolled, expected completion in 2025 ¯\\_(ツ)_/¯"
        },
    {
        name: "GREM (GIAC Reverse Engineering Malware)",
        logo: `${base}/GREM.png`,
        date: "Nov 2024 - Nov 2028"
    },
    {
        name: "OSWE (OffSec Web Expert)",
        logo: `${base}/OSWE_logo.svg`,
        date: "Jul 2024"
    },
    {
        name: "GCFA (GIAC Certified Forensic Analyst)",
        logo: `${base}/GCFA.png`,
        date: "Jun 2024 - Jun 2028"
    },
    {
        name: "CEH (Certified Ethical Hacker)",
        logo: `${base}/CEH.png`,
        date: "Apr 2024 - Apr 2027"
    },
    {
        name: "OSCP (OffSec Certified Professional)",
        logo: `${base}/OSCP_logo.svg`,
        date: "Mar 2024"
    }
];

    let projects = [
        {
            name: "IR Dojo - CTF Training For Everyone",
            duration: "Dec 2021 - Mar 2022",
            description:
                "Created a CTF focusing on Digital Forensics and Malware Analysis. Won the MCI Idea! Award.",
        },
        {
            name: "BuildOn Singapore Hackathon",
            duration: "Aug 2020",
            description:
                "Developed a bed sorting algorithm using React and AWS services, reaching the semi-finals.",
        },
        {
            name: "Live Smart Singapore Hackathon (ACRA)",
            duration: "Jul 2020 - Aug 2020",
            description:
                "Created an automated form processing flow with React and AWS, securing a Top 5 finalist position.",
        },
    ];
    let skills = [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Incident Response",
        "Digital Forensics",
        "Malware Analysis & Reverse Engineering",
    ];

    // Testimonials Data
    let testimonials = [
        {
            name: "Lee Jia Quan (Benny)",
            position: "Computer Science undergrad at NUS",
            text: "Working alongside Gaanesh has been a truly inspiring experience. His enthusiasm and curiosity have consistently fueled my own motivation to tackle new and challenging projects. Gaanesh is always eager to engage in meaningful discussions, particularly about trending advancements in cybertech and their implications on our work, which adds depth and relevance to our collaborations.\n\nWhat stands out most about Gaanesh is his unwavering dedication and goal-oriented mindset. When he commits to a project, he ensures that it is not only completed on time but also meets his high personal standards. This level of diligence makes collaborating with him an exceptional experience. His openness to exchanging ideas and his focus on achieving results within the set timeline create a productive and enjoyable working environment.",
            imageUrl: `${base}/Benny.jpg`,
            date: "04 Jan 2025",
            relationship: "Worked together in NUS",
        },
        {
            name: "Guo GangQuan",
            position: "Information Security undergrad at NUS",
            text: "Gaanesh is an exceptional team player who consistently motivates the team to exceed their potential. \
His strong communication skills and ability to collaborate effectively with diverse individuals make him a valuable asset in any group setting. \
With a solid academic background and a keen interest in cybersecurity, Gaanesh brings both knowledge and passion to his work. \
His problem-solving skills are remarkable, as he is quick to suggest alternative solutions when plans don't unfold as expected, \
ensuring progress and success in challenging situations.",
            imageUrl: `${base}/GQ.jpg`,
            date: "04 Jan 2025",
            relationship: "Worked together in NUS",
        },
    ];
</script>

<!--  NavBar -->
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

<!--  Main Content Container -->
<div class="container">
    <header>
        <img src={profileImageUrl} alt="" class="profile-pic" />
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{summary}</p>
        <!-- Social Media Links -->
        <div class="social-media">
            <a
                href="https://github.com/GaaneshT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub" 
            >
                <i class="fab fa-github"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/gaanesht/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <i class="fab fa-linkedin"></i>
            </a>
            <a
                href="https://x.com/PlantSecurity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
            >
                <i class="fab fa-twitter"></i>
            </a>
        </div>
        <div class="button-stack">
            <a class="theme-toggle" href="https://blog.gaanesh.com" target="_blank" rel="noopener noreferrer">
              📓 Visit My Blog
            </a>
            <button class="theme-toggle" on:click={toggleDarkMode}>
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          
    </header>

    <div class="section" id="AboutMe">
        <h2>About me</h2>
        <p>{about_me}</p>
    </div>

<!-- Experience Section -->
<div class="section" id="experience">
    <h2>Experience</h2>
    {#each experience as job}
        <div class="experience card">
            <div class="experience-header">
                <div class="experience-details">
                    <h3>{job.role}</h3>
                    <h4>{job.company}</h4>
                    <p><em>{job.duration}</em></p>
                </div>
                <img src="{job.logo}" alt="{job.company} Logo" class="company-logo">
            </div>
            <ul>
                {#each job.description as point}
                    <li>{point}</li>
                {/each}
            </ul>
        </div>
    {/each}
</div>

    <!-- Certifications Section -->
    <div class="section" id="certifications">
        <h2>Certifications</h2>
        <ul>
            {#each certifications as cert}
                <li class="certification-item">
                    <div class="cert-info">
                        <span class="cert-name">{cert.name}</span>
                        <span class="cert-date">{cert.date}</span>
                    </div>
                    <img src="{cert.logo}" alt="{cert.name} Logo" class="cert-logo">
                </li>
            {/each}
        </ul>
    </div>

    <!-- Projects Section -->
    <div class="section" id="projects">
        <h2>Projects</h2>
        {#each projects as project}
            <div class="projects card">
                <h3>{project.name}</h3>
                <p><em>{project.duration}</em></p>
                <p>{project.description}</p>
            </div>
        {/each}
    </div>

    <!-- Education Section -->
    <div class="section" id="education">
        <h2>Education</h2>
        {#each education as edu}
            <div class="education card">
                <h3>{edu.institution}</h3>
                <h4>{edu.degree}</h4>
                <p><em>{edu.duration}</em></p>
            </div>
        {/each}
    </div>


    

    <!-- Skills Section -->
    <div class="section" id="skills">
        <h2>Skills</h2>
        <ul>
            {#each skills as skill}
                <li>{skill}</li>
            {/each}
        </ul>
    </div>

    <!-- Testimonials Section -->
    <div class="section" id="testimonials">
        <h2>Testimonials</h2>
        {#each testimonials as testimonial}
            <div class="testimonial card">
                <!-- Profile Photo -->
                {#if testimonial.imageUrl}
                    <img
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        class="testimonial-photo"
                    />
                {/if}
                <p class="testimonial-text">"{testimonial.text}"</p>
                <h4 class="testimonial-name">{testimonial.name}</h4>
                <p class="testimonial-position">{testimonial.position}</p>
                {#if testimonial.relationship}
                    <p class="testimonial-relationship">
                        {testimonial.relationship}
                    </p>
                {/if}
                {#if testimonial.date}
                    <p class="testimonial-date"><em>{testimonial.date}</em></p>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    :global(:root) {
        --bg-color: #f9fafc;
        --text-color: #333;
        --section-bg: #ffffff;
        --accent-color: #4a90e2;
        --header-color: #2c3e50;
        --card-bg: #f4f7fa;
    }

    /*  Dark Mode Variables */
    :global(body.dark) {
        --bg-color: #121212;
        --text-color: #e0e0e0;
        --section-bg: #1e1e1e;
        --accent-color: #90caf9;
        --header-color: #ffffff;
        --card-bg: #2e2e2e;
    }

    /*  General Styling */
    :global(body) {
        font-family: "Arial", sans-serif;
        margin: 0;
        padding: 0;
        background-color: var(--bg-color);
        color: var(--text-color);
        line-height: 1.6;
        transition:
            background-color 0.3s ease,
            color 0.3s ease;
        scroll-behavior: smooth;
    }

    /*  Container Styling */
    .container {
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        background-color: var(--section-bg);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    /*  Enhanced Hero Header Styling */
    header {
        width: 100%;
        padding: 60px 20px;
        background: linear-gradient(135deg, #708399 0%, #b4265136 100%);
        border-radius: 8px;
        color: #fff;
        text-align: center;
        position: relative;
        margin-bottom: 40px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden; /* For decorative elements */
    }

    /* Decorative SVG Circles */
    header::before {
        content: "";
        position: absolute;
        top: -50px;
        right: -50px;
        width: 100px;
        height: 100px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transform: rotate(45deg);
        z-index: 0;
    }

    header::after {
        content: "";
        position: absolute;
        bottom: -50px;
        left: -50px;
        width: 100px;
        height: 100px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transform: rotate(-45deg);
        z-index: 0;
    }

    header > * {
        position: relative;
        z-index: 1;
    }

    /* Profile Picture Styling */
    .profile-pic {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        margin: 0 auto 20px auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border: 4px solid var(--accent-color);
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    .profile-pic:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    /* Header Titles */
    header h1 {
        font-size: 3em;
        margin: 10px 0;
        color: var(--header-color);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        animation: fadeInUp 1s ease-out;
        animation-delay: 0.5s;
        animation-fill-mode: both;
    }

    header h2 {
        font-size: 1.5em;
        background: linear-gradient(
            90deg,
            #011d06,
            #ff7e5f
        ); /* Gradient color */
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 15px;
        animation: fadeInUp 1s ease-out;
        animation-delay: 0.6s;
        animation-fill-mode: both;
    }

    :global(body.dark) header h2 {
        background: linear-gradient(
            90deg,
            #07ad26,
            #ff7e5f
        ); /* Dark mode Gradient color */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /*  Gradient Text for Summary */
    header p {
        font-size: 1.1em;
        max-width: 600px;
        margin: 0 auto 20px auto;
        text-align: center;
        font-weight: 700;
        background: linear-gradient(90deg, #4c4b63, #6a11cb, #3f0d12);

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: fadeInUp 1s ease-out;
        animation-delay: 0.7s;
        animation-fill-mode: both;
    }
    :global(body.dark) header p {
        background: linear-gradient(
            90deg,
            #64dab2,
            #735dc2,
            #9954b4
        ); /*  Change dark mode color gradient */
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Social Media Links Styling */
    .social-media {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        gap: 15px;
        animation: fadeInUp 1s ease-out;
        animation-delay: 0.7s;
        animation-fill-mode: both;
    }

    .social-media a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        background: var(--accent-color);
        font-size: 1.2em;
        transition:
            background-color 0.3s ease,
            transform 0.3s ease;
    }

    .social-media a:hover {
        background: #6aa9e9;
        transform: scale(1.1);
    }

    /* Theme Toggle Button */
    .theme-toggle {
        margin-top: 20px;
        padding: 10px 16px;
        min-width: 160px;
        font-size: 1em;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-color: var(--accent-color);
        color: #fff;
        transition: background-color 0.3s ease;
        animation: fadeInUp 1s ease-out;
        animation-delay: 0.8s;
        animation-fill-mode: both;
    }

    .theme-toggle:hover {
        background-color: #6aa9e9;
    }

    .cta-button {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 24px;
        font-size: 1em;
        color: #fff;
        background-color: var(--accent-color);
        border: none;
        border-radius: 4px;
        text-decoration: none;
        cursor: pointer;
        transition:
            background-color 0.3s ease,
            transform 0.2s ease;
        animation: fadeInUp 1s ease-out;
        animation-delay: 0.9s;
        animation-fill-mode: both;
    }

    .cta-button:hover {
        background-color: #6aa9e9;
        transform: translateY(-2px);
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .section {
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 6px;
        background-color: var(--card-bg);
        color: var(--text-color);
        text-align: left;
    }

    /* Gradient Section Headers */
    .section h2 {
        font-size: 1.8em;
        font-weight: 800;
        text-align: center;
        margin-bottom: 20px;
        background: linear-gradient(90deg, #4a90e2, #6a11cb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 0;
    }

    .card {
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 8px;
        background: var(--card-bg);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition:
            transform 0.2s,
            box-shadow 0.2s;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .experience.card,
    .education.card,
    .projects.card {
        border-left: 2px solid var(--accent-color);
        padding-left: 12px;
    }
/* Start */
    .experience.card {
    display: flex;
    flex-direction: column;
    border-left: 2px solid var(--accent-color);
    padding-left: 12px;
    margin-bottom: 20px;
    background-color: var(--card-bg);
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Experience Header - Flex Layout */
.experience-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 10px;
}

/* Company Logo Styling */
.company-logo {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 8px;
    background: var(--section-bg); 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-shrink: 0; /* Prevent logo from shrinking */
}
.company-logo:hover {
    transform: scale(1.1); /* Slight enlargement on hover */
    transition: transform 0.3s ease;
}

/* Experience Details Styling */
.experience-details {
    flex: 1; /* Takes up remaining space */
}

.experience-details h3 {
    font-size: 1.2em;
    color: var(--header-color);
    margin-bottom: 5px;
    font-weight: 600;
}

.experience-details h4 {
    font-size: 1em;
    font-weight: normal;
    font-style: italic;
    margin-bottom: 0.5em;
    color: var(--text-color);
}

.experience-details p {
    font-size: 0.95em;
    margin-bottom: 1em;
    line-height: 1.4;
}

/* Experience Card List Styling */
.experience.card ul {
    margin-top: 10px;
    padding-left: 20px;
    list-style-type: disc;
}

.experience.card li {
    margin-bottom: 5px;
    font-size: 0.9em;
}

/* End */

.button-stack {
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 10px; 
}


    /* Headers inside cards */
    .experience.card h3,
    .education.card h3,
    .projects.card h3 {
        font-size: 1.2em;
        color: var(--header-color);
        margin-bottom: 5px;
        font-weight: 600;
    }
    .experience.card p {
        font-size: 0.95em;
        margin-bottom: 1em;
        line-height: 1.4;
    }

    .experience.card h4 {
        font-size: 1em;
        font-weight: normal;
        font-style: italic;
        margin-bottom: 0.5em;
        display: block;
    }

    .experience.card ul {
        margin-top: 10px;
        padding-left: 20px;
        list-style-type: disc;
    }
    .experience.card li {
        margin-bottom: 5px;
        list-style-type: disc;
        background: none;
        box-shadow: none;
        border: none;
        padding: 0;
        display: list-item !important;
        font-size: 0.9em;
    }

    .experience.card li::marker {
        content: "➤ ";
        color: var(--text-color);
        font-size: 1em;
    }

    .education.card p,
    .projects.card p {
        margin: 5px 0;
        font-size: 0.95em;
    }

    /*  Certification & Skills List Styling */
    .section ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .section ul li {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 15px;
        border-radius: 8px;
        background: var(--card-bg);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        border-left: 2px solid var(--accent-color);
        padding-left: 12px;
    }

    .section ul li:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    #certifications ul li::before {
        content: "📜"; /* Icon for Certifications */
        font-size: 1.2em;
        color: var(--accent-color);
    }
    /* Start */

    /* Certifications Section Styling */
#certifications ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.certification-item {
    display: flex;
    align-items: center; /* Vertically align items */
    justify-content: space-between; /* Space between text and logo */
    gap: 12px; /* Space between icon, text, and logo */
    padding: 12px 16px;
    margin-bottom: 10px;
    background: var(--card-bg);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.certification-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.cert-logo:hover {
    transform: scale(1.1); /* Slightly enlarge the logo */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
    cursor: pointer; /* Indicate interactivity */
}

/* Certification Icon (e.g., 📜 Emoji) */
.certification-item::before {
    content: "📜";
    font-size: 1.4em;
    flex-shrink: 0;
}

/* Certification Logo Styling */
.cert-logo {
    width: 60px; /* Adjust for better visibility */
    height: 60px;
    object-fit: contain;
    border-radius: 8px;
    background: var(--section-bg);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cert-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    text-align: left;
}

.cert-name {
    font-size: 1em;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 4px;
}

.cert-date {
    font-size: 0.85em;
    color: var(--accent-color);
    font-style: italic;
}


/* Certification Text Styling */
.certification-item span {
    flex: 1; /* Take up remaining space */
    font-size: 1em;
    font-weight: 500;
    color: var(--text-color);
    text-align: left;
    margin-left: 8px; /* Add spacing between icon and text */
}

    /* End */



    /* Specific Icon for Skills */
    #skills ul li::before {
        content: "🛠️"; /* Icon for Skills */
        font-size: 1.2em;
        color: var(--accent-color);
    }

    /*  Navbar Styling */
    .top-nav {
        position: sticky;
        top: 0;
        background: var(--section-bg);
        padding: 10px;
        text-align: center;
        z-index: 999;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .top-nav a {
        margin: 0 15px;
        color: var(--accent-color);
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s;
    }

    .top-nav a:hover {
        color: #6aa9e9;
    }
    /* Mobile Menu Button */
    .menu-toggle {
        display: none;
        font-size: 1.5em;
        background: none;
        border: none;
        color: var(--accent-color);
        cursor: pointer;
    }

    /*  Testimonials Section Styling */
    .testimonial.card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px;
        margin: 15px 0;
        border-radius: 8px;
        background: var(--card-bg);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition:
            transform 0.2s,
            box-shadow 0.2s;
        border-left: 2px solid var(--accent-color);
        padding-left: 12px;
    }

    .testimonial.card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Testimonial Profile Photo */
    .testimonial-photo {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 10px;
        border: 2px solid var(--accent-color);
    }

    /*  Testimonial Text */
    .testimonial-text {
        font-size: 1em;
        font-style: italic;
        margin: 10px 0;
        color: var(--text-color);
    }

    /*  Name and Position */
    .testimonial-name {
        font-size: 1.1em;
        font-weight: bold;
        margin: 5px 0;
        color: var(--header-color);
    }

    .testimonial-position {
        font-size: 0.9em;
        color: var(--accent-color);
    }

    /*  Mobile Responsiveness */
    @media (max-width: 600px) {
        .testimonial-photo {
            width: 60px;
            height: 60px;
        }

        .testimonial-text {
            font-size: 0.9em;
        }

        .testimonial-name {
            font-size: 1em;
        }

        .testimonial-position {
            font-size: 0.85em;
        }

        /* Start */
        .experience-header {
        display: flex;
        flex-direction: row; /* Align horizontally on mobile */
        align-items: center; /* Vertically align logo and text */
        gap: 12px; /* Space between logo and text */
    }

    .company-logo {
        width: 50px; /* Smaller logo for mobile */
        height: 50px;
        object-fit: contain;
        border-radius: 8px;
        background: var(--section-bg);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        flex-shrink: 0; /* Prevent logo resizing */
    }

    .experience-details {
        flex: 1; /* Occupy remaining space */
        text-align: left; /* Align text properly */
    }

    .experience-details h3 {
        font-size: 1em;
        margin: 0;
    }

    .experience-details h4 {
        font-size: 0.9em;
        margin: 2px 0;
    }

    .experience-details p {
        font-size: 0.85em;
        margin: 2px 0;
    }

    .experience.card ul {
        margin-top: 10px;
        padding-left: 20px;
        text-align: left;
    }

    /* END */
    .certification-item {
        flex-direction: row; /* Horizontal layout on mobile */
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
    }

    .cert-logo {
        width: 50px; /* Smaller on mobile */
        height: 50px;
    }

    .certification-item span {
        font-size: 0.9em;
    }


    

        /*  Mobile Menu Toggle */
        .menu-toggle {
            display: block;
            font-size: 1.5em;
            background: none;
            border: none;
            color: var(--accent-color);
            cursor: pointer;
            z-index: 1001; /* Ensures it's above other elements */
            position: relative; /* Ensures stacking context is respected */
        }

        /* Mobile Navbar Links */
        .nav-links {
            display: none; /* Hidden by default */
            flex-direction: column;
            gap: 10px;
            background: var(--section-bg);
            position: fixed; /* Fixed positioning */
            top: 60px; /* Adjust based on .top-nav height */
            left: 0;
            right: 0;
            z-index: 1000; /* Above other content */
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition:
                transform 0.3s ease,
                opacity 0.3s ease;
            transform: translateY(-20px); /* Hidden above */
            opacity: 0; /* Invisible */
            pointer-events: none; /* Prevent interactions when hidden */
        }

        .nav-links.active {
            display: flex; /* Show the menu */
            transform: translateY(0); /* Slide down */
            opacity: 1; /* Fully visible */
            pointer-events: auto; /* Enable interactions */
            background-color: var(--section-bg); /* Ensure visibility */
        }

        .nav-links a {
            padding: 10px 0;
            text-align: center;
            border-bottom: 1px solid #ccc;
            color: var(--text-color);
            text-decoration: none;
            font-size: 1.2em;
        }

        .nav-links a:last-child {
            border-bottom: none;
        }

        .nav-links a:hover {
            background-color: var(--accent-color);
            color: #fff;
        }

        /* Header Adjustments */
        header {
            padding: 40px 15px;
        }

        .profile-pic {
            width: 100px;
            height: 100px;
            border-width: 3px;
        }

        header h1 {
            font-size: 2em;
        }

        header h2 {
            font-size: 1.2em;
        }

        header p {
            font-size: 1em;
        }

        /* Theme Toggle */
        .theme-toggle {
            padding: 6px 10px;
            font-size: 0.9em;
            
            
        }

        /* CTA Button */
        .cta-button {
            padding: 10px 20px;
            font-size: 0.9em;
        }

        /*  Navbar Links (Desktop to Mobile Conversion) */
        .top-nav a {
            margin: 0 10px;
            font-size: 0.9em;
        }

        /* Ensure Navbar Stacking is Correct */
        .top-nav {
            position: sticky;
            top: 0;
            z-index: 1000;
        }
    }
</style>
