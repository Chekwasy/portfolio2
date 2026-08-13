import Image from "next/image";

const projects = [
  {
    title: "HR Digital Transformation",
    description:
      "Led initiatives to improve HR operations through digital workflows, HR systems, automation, and process optimisation.",
    category: "HR Technology & Operations",
  },
  {
    title: "Employee Appraisal & Performance Management",
    description:
      "Redesigned appraisal processes, developed structured scoring frameworks, and explored automation to improve performance evaluation.",
    category: "Performance Management",
  },
  {
    title: "Company Organogram Redesign",
    description:
      "Led a team to transform a multi-page organisational structure covering 100+ employees into a clear and professionally designed organogram.",
    category: "Organisation Design",
  },
  {
    title: "HR Newsletter & Internal Communication",
    description:
      "Developed and redesigned professional HR communication materials to improve employee awareness and engagement.",
    category: "Employee Engagement",
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "Developed HR dashboards to provide insights into recruitment, workforce data, salaries, departments, and employee trends.",
    category: "HR Analytics",
  },
  {
    title: "HR Policies & Governance",
    description:
      "Developed and reviewed HR policies, SOPs, procedures, and governance frameworks to support consistent workplace practices.",
    category: "HR Governance",
  },
];

const impact = [
  "Led HR digital transformation initiatives.",
  "Developed and implemented HR policies and governance frameworks.",
  "Improved appraisal and performance management processes.",
  "Redesigned internal communication through professional newsletters.",
  "Improved HR operations using digital HR workflows and systems.",
  "Delivered HR analytics dashboards to support decision-making.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              David Uwaga
            </h1>
            <p className="text-xs text-zinc-500">
              HR • People • Operations • Analytics
            </p>
          </div>

          <div className="hidden gap-7 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-zinc-500">
              About
            </a>
            <a href="#impact" className="hover:text-zinc-500">
              Impact
            </a>
            <a href="#projects" className="hover:text-zinc-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-zinc-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Human Resources Professional
          </p>

          <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            People.
            <br />
            Processes.
            <br />
            <span className="text-zinc-500">Purposeful Innovation.</span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">
            I am an HR professional focused on building better employee
            experiences, strengthening HR processes, and using technology,
            analytics, and innovation to solve people-related business
            challenges.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold transition hover:bg-zinc-100"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-zinc-100" />

            <div className="relative overflow-hidden rounded-[2rem] bg-zinc-100">
              <Image
                src="/profile.jpg"
                alt="David Uwaga"
                width={500}
                height={600}
                priority
                className="h-[500px] w-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-2xl font-medium leading-relaxed md:text-3xl">
            “I believe that great HR is not measured by the policies we write,
            but by the positive impact we create through people, processes,
            and purposeful innovation.”
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              About Me
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              HR with a practical mindset.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              I am a Human Resources professional with experience across
              employee management, HR operations, recruitment, performance
              management, policy development, employee engagement and
              workplace administration.
            </p>

            <p>
              My approach combines traditional HR practice with technology,
              data and process improvement. I enjoy identifying inefficient
              processes and transforming them into simpler, more structured
              and measurable systems.
            </p>

            <p>
              This portfolio highlights selected projects and initiatives I
              have contributed to or led, demonstrating how I approach HR
              challenges and create practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="bg-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              My Impact
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              What I bring to HR.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {impact.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="font-medium leading-7 text-zinc-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Projects & Initiatives
            </h2>
          </div>

          <p className="max-w-md text-zinc-500">
            A selection of HR projects demonstrating my experience in
            operations, analytics, technology, performance and employee
            engagement.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group rounded-3xl border border-zinc-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="rounded-full bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-600">
                  {project.category}
                </span>

                <span className="text-sm text-zinc-400">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="mt-4 leading-7 text-zinc-600">
                {project.description}
              </p>

              <a
                href="#contact"
                className="mt-7 inline-block text-sm font-semibold text-zinc-900 underline underline-offset-4"
              >
                View Project →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE / SKILLS */}
      <section className="bg-zinc-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Areas of Expertise
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Where people and business meet.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-zinc-300">
              <p>HR Operations</p>
              <p>Employee Relations</p>
              <p>Performance Management</p>
              <p>HR Analytics</p>
              <p>Policy Development</p>
              <p>Recruitment</p>
              <p>People Management</p>
              <p>Process Improvement</p>
              <p>HR Technology</p>
              <p>Employee Engagement</p>
              <p>Workforce Administration</p>
              <p>Training & Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Let's Connect
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Interested in working together?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          Whether you are looking for an HR professional, discussing a people
          challenge, or exploring opportunities for collaboration, I would be
          happy to connect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your@email.com"
            className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white hover:bg-zinc-700"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold hover:bg-zinc-100"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-zinc-500 md:flex-row">
          <p>© 2026 David Uwaga. All rights reserved.</p>

          <p>HR • People • Operations • Analytics</p>
        </div>
      </footer>
    </main>
  );
}
