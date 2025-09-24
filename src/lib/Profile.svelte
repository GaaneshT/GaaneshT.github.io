<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  const name = "Gaanesh Theivasigamani";
  const title = "InfoSec Undergraduate (NUS) · Security Engineer";
  const summary = "Offensive security, digital forensics, and automating defenses.";
  const aboutMe = `Hey there! I'm Gaanesh, an Information Security undergraduate at the National University of Singapore. \nI live at the intersection of penetration testing, digital forensics, and building CTF challenges. \nWhether I'm automating detection workflows or tearing through binaries, I'm happiest when learning and sharing battle-tested tradecraft.\nFeel free to reach out – I won't byte ;)`;
  const profileImageUrl = `${base}/Me.jpg`;
  const maxVisibleCerts = 6;

  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "testimonials", label: "Testimonials" }
  ];

  const focusAreas = [
    {
      title: "Penetration Testing",
      description: "Hands-on offensive security engagements with a focus on practical exploit paths and impact."
    },
    {
      title: "Digital Forensics",
      description: "Incident response, evidence acquisition, and root-cause analysis across hybrid environments."
    },
    {
      title: "Security Automation",
      description: "Agentic AI, RAG pipelines, and workflow automation to scale cyber operations."
    }
  ];

  const socialLinks = [
    {
      label: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/GaaneshT"
    },
    {
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/gaanesht/"
    },
    {
      label: "X (Twitter)",
      icon: "fa-brands fa-x-twitter",
      url: "https://x.com/PlantSecurity"
    }
  ];

  type ExpStatus = "upcoming" | "current" | "past";
  type Exp = {
    company: string;
    role: string;
    duration: string;
    status: ExpStatus;
    sortKey: number;
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
    {
      name: "OSWE (OffSec Web Expert)",
      logo: `${base}/OSWE_logo.svg`,
      date: "Issued Jul 2024"
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
      date: "Issued Mar 2024"
    }
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

  const stats = [
    { label: "Industry certifications", value: certifications.length.toString() },
    { label: "Security roles & internships", value: experience.length.toString() },
    { label: "Focus areas", value: focusAreas.length.toString() }
  ];

  $: experienceSorted = [...experience].sort((a, b) => (b.sortKey ?? 0) - (a.sortKey ?? 0));

  const yearOf = (job: Exp) => Math.floor((job.sortKey ?? 0) / 100);

  const badgeConfig = {
    latest: {
      label: "Latest",
      classes: "bg-sky-500/10 text-sky-500 ring-1 ring-sky-500/30"
    },
    live: {
      label: "Present",
      classes: "bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/30"
    },
    upcoming: {
      label: "Upcoming",
      classes: "bg-amber-400/10 text-amber-500 ring-1 ring-amber-500/30"
    }
  } as const;

  const primaryBadge = (job: Exp, index: number) =>
    job.status === "current"
      ? "live"
      : job.status === "upcoming"
      ? "upcoming"
      : index === 0
      ? "latest"
      : null;

  const resolveBadge = (job: Exp, index: number) => {
    const key = primaryBadge(job, index);
    return key ? badgeConfig[key] : null;
  };

  let isNavOpen = false;
  let certsCollapsed = true;
  let expanded = new Set<number>();

  const applyTheme = (shouldUseDark: boolean) => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    document.body.classList.toggle("dark", shouldUseDark);
  };

  onMount(() => {
    if (typeof window === "undefined") return;

    const query = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!query) {
      applyTheme(true);
      return;
    }

    const update = (matches: boolean) => applyTheme(matches);

    update(query.matches);

    const listener = (event: MediaQueryListEvent) => update(event.matches);

    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", listener);
      return () => query.removeEventListener("change", listener);
    }

    if (typeof query.addListener === "function") {
      query.addListener(listener);
      return () => query.removeListener(listener);
    }
  });

  function toggleExpanded(idx: number) {
    const next = new Set(expanded);
    if (next.has(idx)) {
      next.delete(idx);
    } else {
      next.add(idx);
    }
    expanded = next;
  }
</script>

<div class="relative min-h-screen overflow-hidden bg-slate-50 text-slate-800 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
  <div class="pointer-events-none absolute inset-x-0 top-[-200px] h-[420px] bg-[radial-gradient(circle,_rgba(56,189,248,0.35)_0%,_rgba(15,23,42,0)_60%)] dark:bg-[radial-gradient(circle,_rgba(59,130,246,0.18)_0%,_rgba(15,23,42,0)_60%)]"></div>
  <div class="pointer-events-none absolute inset-y-0 right-0 hidden w-[480px] translate-x-1/3 bg-[radial-gradient(circle,_rgba(124,58,237,0.18)_0%,_rgba(15,23,42,0)_65%)] blur-3xl lg:block"></div>

  <nav
    class={`fixed left-1/2 top-6 z-40 w-[min(92%,960px)] -translate-x-1/2 border border-slate-200/60 bg-white/80 px-5 shadow-xl backdrop-blur-md transition-all transition-colors dark:border-slate-700/60 dark:bg-slate-900/70 ${
      isNavOpen ? "rounded-3xl py-4" : "rounded-full py-3"
    } md:rounded-full md:py-3`}
  >
    <div class="flex items-center justify-between gap-4">
      <a href="#top" class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Gaanesh</a>

      <button
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-600 shadow-sm transition hover:bg-white hover:text-slate-900 md:hidden dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-white"
        aria-label="Toggle navigation"
        aria-expanded={isNavOpen}
        on:click={() => (isNavOpen = !isNavOpen)}
      >
        <span class="text-lg">{isNavOpen ? "✕" : "☰"}</span>
      </button>
    </div>

    <div
      class={`${isNavOpen ? "mt-4 flex" : "hidden"} flex-col gap-3 md:mt-0 md:flex md:flex-row md:items-center md:justify-center md:gap-6 lg:gap-8`}
    >
      {#each navLinks as link}
        <a
          href={`#${link.id}`}
          on:click={() => (isNavOpen = false)}
          class="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200/60 hover:text-slate-900 md:px-3 md:text-xs md:uppercase md:tracking-[0.2em] dark:text-slate-300 dark:hover:bg-slate-700/60 dark:hover:text-white"
        >
          {link.label}
        </a>
      {/each}

    </div>
  </nav>

  <main id="top" class="relative mx-auto flex max-w-5xl flex-col gap-16 px-4 pb-24 pt-32 sm:px-6 md:pt-36 lg:px-0">
    <section id="hero" class="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-2xl backdrop-blur transition-colors dark:border-slate-800/70 dark:bg-slate-900/70 md:p-12">
      <div class="absolute inset-0 bg-gradient-to-br from-sky-200/30 via-transparent to-purple-200/30 dark:from-sky-500/10 dark:to-purple-500/10"></div>
      <div class="absolute -right-20 top-20 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl dark:bg-sky-500/20"></div>
      <div class="relative z-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_280px] md:items-center">
        <div class="order-2 space-y-8 md:order-1">
          <div class="space-y-4">
            <span class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:border-sky-500/20 dark:bg-sky-500/15 dark:text-sky-300">
              Security Engineer · Builder · Researcher
            </span>
            <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">{name}</h1>
            <p class="text-lg text-slate-600 dark:text-slate-300">{title}</p>
            <p class="max-w-2xl text-base text-slate-600 dark:text-slate-300 md:text-lg">{summary}</p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            {#each socialLinks as social}
              <a
                class="group inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:border-slate-900/30 hover:text-slate-900 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:text-white"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <i class={`${social.icon} text-base`}></i>
                {social.label}
              </a>
            {/each}
            <a
              class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900"
              href="https://blog.gaanesh.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              📓 Visit my blog
            </a>
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            {#each stats as stat}
              <div class="rounded-2xl border border-slate-200/70 bg-white/90 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700/70 dark:bg-slate-900/70">
                <p class="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                <p class="text-[0.65rem] uppercase tracking-[0.1em] text-slate-500 break-words leading-4 dark:text-slate-400 sm:text-xs sm:tracking-[0.25em]">{stat.label}</p>
              </div>
            {/each}
          </div>
        </div>

        <div class="order-1 flex justify-center md:order-2 md:justify-end">
          <div class="relative h-64 w-64 max-w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-100 to-slate-200 p-2 shadow-xl transition hover:-translate-y-1 dark:border-slate-800/70 dark:from-slate-800 dark:to-slate-900 sm:h-72 sm:w-72">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10"></div>
            <img src={profileImageUrl} alt="Portrait of {name}" class="relative h-full w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="grid gap-8 rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">About me</h2>
        <p class="whitespace-pre-line text-base leading-relaxed text-slate-600 dark:text-slate-300">{aboutMe}</p>
      </div>
      <div class="grid gap-4">
        {#each focusAreas as focus}
          <article class="rounded-2xl border border-slate-200/60 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/70">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{focus.title}</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{focus.description}</p>
          </article>
        {/each}
      </div>
    </section>

    <section id="experience" class="space-y-6">
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">Experience</h2>
        <span class="hidden text-xs uppercase tracking-[0.3em] text-slate-400 md:inline">Timeline</span>
      </div>

      <div class="relative space-y-10">
        <div class="absolute left-3 top-0 hidden h-full w-px bg-slate-200/70 md:block dark:bg-slate-800/70"></div>

        {#each experienceSorted as job, i}
          {@const badge = resolveBadge(job, i)}
          <div class="relative md:pl-12">
            {#if i === 0 || yearOf(experienceSorted[i - 1]) !== yearOf(job)}
              <div class="mb-4 inline-flex rounded-full border border-slate-200/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-500">
                {yearOf(job)}
              </div>
            {/if}

            <div class="flex flex-col gap-4 md:flex-row md:items-start">
              <div class="relative hidden md:block">
                <span class="absolute left-[-39px] top-2 block h-3 w-3 rounded-full border border-white bg-sky-500 shadow-[0_0_0_6px_rgba(56,189,248,0.18)] dark:border-slate-950 dark:bg-sky-400 dark:shadow-[0_0_0_6px_rgba(56,189,248,0.12)]"></span>
              </div>

              <article class="relative flex w-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/70 dark:bg-slate-900/70">
                <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div class="space-y-2">
                    <div class="flex flex-wrap items-center gap-2">
                      <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                      {#if badge}
                        <span class={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${badge.classes}`}>
                          {badge.label}
                        </span>
                      {/if}
                    </div>
                    <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{job.company}</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400">{job.duration}</p>
                  </div>
                  <div class="flex shrink-0 items-center justify-center">
                    <img src={job.logo} alt={`${job.company} logo`} class="h-24 w-24 rounded-2xl border border-slate-200/60 bg-white/80 object-contain p-4 shadow-md sm:h-28 sm:w-28 sm:p-5 dark:border-slate-800/70 dark:bg-slate-900/60" />
                  </div>
                </div>

                <ul class="space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {#each (expanded.has(i) ? job.description : job.description.slice(0, 3)) as detail}
                    <li class="flex items-start gap-2">
                      <span class="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400"></span>
                      <span>{detail}</span>
                    </li>
                  {/each}
                </ul>

                {#if job.description.length > 3}
                  <button
                    class="self-start text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                    on:click={() => toggleExpanded(i)}
                  >
                    {expanded.has(i) ? "Show less" : "Show more"}
                  </button>
                {/if}
              </article>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section id="certifications" class="space-y-6">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">Certifications</h2>
      <div class="grid gap-4 md:grid-cols-2">
        {#each (certsCollapsed ? certifications.slice(0, maxVisibleCerts) : certifications) as cert}
          <article class="flex items-center gap-4 rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/70 dark:bg-slate-900/70">
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/60 bg-white/90 p-2 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60">
              <img src={cert.logo} alt={`${cert.name} logo`} class="h-full w-full object-contain" loading="lazy" />
            </div>
            <div>
              <h3 class="text-base font-semibold text-slate-900 dark:text-white">{cert.name}</h3>
              {#if cert.date}<p class="text-sm text-slate-500 dark:text-slate-400">{cert.date}</p>{/if}
            </div>
          </article>
        {/each}
      </div>

      {#if certifications.length > maxVisibleCerts}
        <button
          class="rounded-full border border-slate-200/70 bg-white/90 px-5 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-900/20 hover:text-slate-900 dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-white"
          on:click={() => (certsCollapsed = !certsCollapsed)}
        >
          {certsCollapsed ? `Show ${certifications.length - maxVisibleCerts} more` : "Show less"}
        </button>
      {/if}
    </section>

    <section id="projects" class="space-y-6">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">Projects</h2>
      <div class="grid gap-6 md:grid-cols-2">
        {#each projects as project}
          <article class="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/70 dark:bg-slate-900/70">
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400"></div>
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
            <p class="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{project.duration}</p>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
          </article>
        {/each}
      </div>
    </section>

    <section id="education" class="space-y-6">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">Education</h2>
      <div class="grid gap-6 md:grid-cols-2">
        {#each education as edu}
          <article class="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/70 dark:bg-slate-900/70">
            <div class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-400 via-sky-400 to-blue-500"></div>
            <div class="pl-4">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{edu.institution}</h3>
              <p class="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{edu.degree}</p>
              <p class="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-300">{edu.duration}</p>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section id="testimonials" class="space-y-6">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">Testimonials</h2>
      <div class="grid gap-6 md:grid-cols-2">
        {#each testimonials as testimonial}
          <article class="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/70 dark:bg-slate-900/70">
            <div class="flex items-center gap-3">
              {#if testimonial.imageUrl}
                <img src={testimonial.imageUrl} alt={testimonial.name} class="h-14 w-14 rounded-full border border-slate-200/60 object-cover dark:border-slate-800/70" />
              {/if}
              <div>
                <h3 class="text-base font-semibold text-slate-900 dark:text-white">{testimonial.name}</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">{testimonial.position}</p>
              </div>
            </div>
            <p class="flex-1 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-300">"{testimonial.text}"</p>
            <div class="space-y-1 text-xs text-slate-500 dark:text-slate-400">
              {#if testimonial.relationship}<p>{testimonial.relationship}</p>{/if}
              {#if testimonial.date}<p><em>{testimonial.date}</em></p>{/if}
            </div>
          </article>
        {/each}
      </div>
    </section>

    <footer class="rounded-3xl border border-slate-200/70 bg-white/90 p-8 text-center shadow-xl dark:border-slate-800/70 dark:bg-slate-900/70">
      <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Let's build together!</h2>
      <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
        I'm always up for collaborating on security research, challenge design, or automation ideas.
        Reach out on any platform above, I respond fast! :D
      </p>
    </footer>
  </main>
</div>
