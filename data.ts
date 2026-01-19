import { AppData } from './types';

export const courseData: AppData = {
  title: "Frameworks for thinking about online course development",
  author: "Dominik Lukeš",
  website: "https://dominiklukes.net",
  lastUpdated: "Nov 2025",
  sections: [
    {
      id: "about",
      title: "About",
      shortDescription: "Introduction to the frameworks and their purpose.",
      icon: "Info",
      type: "text",
      data: [
        { type: "p", content: "These checklists bring together most relevant and practical suggestions from a number or frameworks for online education. The aim is to make it easier for faculty to quickly evaluate their existing course design and identify the most practicable ways of modifying to make it as effective as possible in the fully-online context." },
        { type: "p", content: "This document contains an introductory checklist and a course activity planner as well as engagement planner. The three appendices aim to provide more context." },
        { type: "image", content: "https://picsum.photos/800/200", alt: "Creative Commons Licence", url: "https://creativecommons.org/licenses/by-sa/4.0/" }
      ]
    },
    {
      id: "qa-checklist",
      title: "Quality Assurance Checklist",
      shortDescription: "Evaluate your course design against established standards.",
      icon: "CheckSquare",
      type: "checklist",
      data: [
        {
          title: "Overall goal",
          items: [
            { id: "og-1", text: "The overall objective of the course is described in a few sentences" }
          ]
        },
        {
          title: "Learning objectives",
          items: [
            { id: "lo-1", text: "The course describes a limited number of learning objectives" },
            { id: "lo-2", text: "A clear statement of learning outcomes for both knowledge and skills is provided" },
            { id: "lo-3", text: "There is reasoned coherence between learning outcomes, course content, teaching and learning strategy (including use of media), and assessment methods" },
            { id: "lo-4", text: "The prior knowledge of each learning objective is described and related to characteristics of target groups" }
          ]
        },
        {
          title: "Course content delivery",
          items: [
            { id: "ccd-1", text: "Course content is delivered through a variety of appropriate methods – live video lectures, pre-recorded videos, readings, peer instruction." },
            { id: "ccd-2", text: "Students can attend live lectures via an online platform at an appropriate time." },
            { id: "ccd-3", text: "Course content (text, video) is in a format that allows access and navigation in a variety of conditions (online, offline, course)" }
          ]
        },
        {
          title: "Learning activities",
          items: [
            { id: "la-1", text: "Activities aid participants to construct their own learning and to communicate it to others" },
            { id: "la-2", text: "Various activities are proposed with different formats. For example: quizzes, peer-to peer evaluation, video conferences, activities in the forums and platform social networks or external social networks." },
            { id: "la-3", text: "The course contains sufficient interactivity (learner-to-content, learner-to-learner or learner-to-teacher) to encourage active engagement." }
          ]
        },
        {
          title: "Feedback mechanism",
          items: [
            { id: "fm-1", text: "The course provides learners with regular feedback through self-assessment activities, tests or peer feedback." },
            { id: "fm-2", text: "The frequency of monitoring has been planned (forum, group, post)" },
            { id: "fm-3", text: "A weekly announcements or mailing with orientations for the following week is planned." },
            { id: "fm-4", text: "In each weekly session, the pedagogical team makes a synthesis of the previous week’s activity." },
            { id: "fm-5", text: "Some live-events are scheduled to provide feedback" }
          ]
        },
        {
          title: "Study-time",
          items: [
            { id: "st-1", text: "The total study time of all learning activities (including contact time, reading, watching, self-study, group work) is specified (the ECTS can be used to specify total workload)" }
          ]
        },
        {
          title: "Workload",
          items: [
            { id: "wl-1", text: "The schedule of the course is such that the workload per week is feasible for typical learners from the specified target group" },
            { id: "wl-2", text: "The online course is realistic in its pacing for the participant, accommodating to the overall expected workload of the student" },
            { id: "wl-3", text: "Expected average (typical) workload is clearly communicated to students" }
          ]
        },
        {
          title: "Assessment",
          items: [
            { id: "as-1", text: "Formative assessment activities are available in various formats to enable the student to prepare for summative assessment" }
          ]
        },
        {
          title: "Support for students",
          items: [
            { id: "ss-1", text: "Students are provided with clear and up-to-date information about courses including aims/objectives, learning and assessment methods, workload and prerequisite knowledge" },
            { id: "ss-2", text: "Students have tools to help them keep track of their progression, tasks, completion" },
            { id: "ss-3", text: "Students have clear routes to academic, technical and administrative support" },
            { id: "ss-4", text: "In addition, a FAQ is in place to support student navigation of the course" },
            { id: "ss-5", text: "Students are assisted by pedagogical guidelines for academic study" },
            { id: "ss-6", text: "A list of criteria for the learning activities, specifically for peer to peer evaluations, is available" }
          ]
        },
        {
          title: "Course navigation",
          items: [
            { id: "cn-1", text: "Course is organised in clearly delineated units (most commonly weeks)" },
            { id: "cn-2", text: "The course platform is structured to allow progression as well as random access (any conditionality of access is clearly marked)" }
          ]
        }
      ]
    },
    {
      id: "engagement-matrix",
      title: "Online Engagement Matrix",
      shortDescription: "Map engagement types across different communication channels.",
      icon: "Grid",
      type: "matrix",
      data: {
        columns: [
          { header: "", key: "type", width: "20%" },
          { header: "Zoom", key: "zoom" },
          { header: "Canvas", key: "canvas" },
          { header: "Other", key: "other" }
        ],
        rows: [
          {
            type: "Emotional (Need to address individual feelings about the isolation and remoteness in online study.)",
            zoom: ["Check in at start of session", "Student support groups on Zoom", "Regular Zoom office hour"],
            canvas: ["Regular schedule for forum response", "Use of Calendar for events and milestones", "Forum for sharing of personal achievements"],
            other: ["Student peer support network", "Informal student WhatsApp (or similar group)", "Teacher supported WhatsApp group", "YellowDig"]
          },
          {
            type: "Social (Need to build a sense of community and joint purpose in the group.)",
            zoom: ["Schedule Zoom socials (time zone appropriate)"],
            canvas: ["Require everyone complete profile with picture", "Forum for personal introductions"],
            other: ["Separate student WhatsApp group for social distinct from study", "YellowDig"]
          },
          {
            type: "Collaborative (Need to establish environment where students can learn with and from others in the process of achieving course learning goals.)",
            zoom: ["Use Breakout rooms 1x during all sessions", "Assignments where students meet on Zoom to work together"],
            canvas: ["Set up groups and assign tasks to work together on", "Collaborative documents", "Peer assessed assignments"],
            other: ["Encourage use of shared documents (Office 365 or Google Docs)", "Hypothes.is", "Tweetchats"]
          },
          {
            type: "Cognitive (Need to develop knowledge and skills necessary in to meet learning outcomes in an environment with less implicit structure.)",
            zoom: ["Zoom lectures / sessions", "Study skills sessions / drop in for students"],
            canvas: ["Quizzes for formative assessment", "Pre-recorded videos using Panopto", "PDF course manual"],
            other: ["Links to digital texts in the library", "Study skills group"]
          },
          {
            type: "Behavioural (Need to monitor and provide space for behaviours that become both more visible and less automatic in an online environment.)",
            zoom: ["Session assistants monitor chat", "Clear rules on communication"],
            canvas: ["Forum moderators", "Forums with required participation", "Student access monitoring", "Structured forums"],
            other: ["Use Hypothes.is to annotate web", "Badges for non-curricular achievement", "YellowDig participation scores"]
          }
        ]
      }
    },
    {
      id: "icap-framework",
      title: "ICAP Framework",
      shortDescription: "Interactive, Constructive, Active, Passive modes of cognitive engagement.",
      icon: "Brain",
      type: "matrix",
      data: {
        columns: [
          { header: "Cognitive mode", key: "mode", width: "25%" },
          { header: "Learner activities", key: "activities" },
          { header: "Tools to facilitate online / digital learning", key: "tools" }
        ],
        rows: [
          {
            mode: "Passive (Receiving) - Students are 'consuming' content without any other activity.",
            activities: ["Reading assigned articles or books", "Attending live lectures", "Reviewing lecture slides", "Watching recorded lectures", "Watching other instructional videos", "Listening to podcasts"],
            tools: ["eBooks delivered via Kortext", "Articles and case studies made available as PDFs", "Videos presented via Panopto", "Making video transcripts available in Panopto", "Videos on YouTube or LinkedIn Learning", "Podcasts listened to via podcast app"]
          },
          {
            mode: "Active (Manipulating) - Students are engaged in direct manipulation of the content.",
            activities: ["Taking verbatim notes", "Highlighting and underlining in readings", "Copying excerpts from readings", "Bookmarking parts of videos", "Taking screenshots of images on screen", "Pausing, rewinding parts of videos"],
            tools: ["Using PDF apps to highlight", "Using Zotfile + Zotero to extract highlights", "Saving highlights in online libraries", "Using Onenote or Notion to take notes", "Using notetaking in Panopto", "Taking a quiz in Canvas or H5P"]
          },
          {
            mode: "Constructive (Generating) - Students engage with content in a way that generates new content.",
            activities: ["Writing summaries of readings", "Taking notes in own words", "Drawing mind maps or concept maps", "Tagging or categorising excerpts", "Verbally rephrasing information", "Formulating questions"],
            tools: ["Mind mapping software (XMind, Mindomo)", "Outlining features in Word or Google Docs", "Tagging readings in Zotero", "Creating database of concepts in Notion", "Creating infographics", "Annotating websites using Hypothes.is"]
          },
          {
            mode: "Interactive (Dialoguing) - Students are engaged in a constructive dialog.",
            activities: ["Defending position in pairs or small groups", "Answering questions while working with a partner", "Discussing similarities or differences", "Explaining or teaching mini lessons to others", "Recording instructional videos for others"],
            tools: ["Working in small groups in Zoom", "Working in groups in Canvas", "Collaborating on a live Word document", "Recording videos in Panopto", "Giving peer feedback in Canvas", "Running Zoom tutorials for each other"]
          }
        ]
      }
    },
    {
      id: "activity-planner",
      title: "Course Activity Planner",
      shortDescription: "Plan weekly activities balanced between Acquisition, Collaboration, and Practice.",
      icon: "Calendar",
      type: "planner",
      data: {
        columns: [
          { header: "Week / topic / aim", key: "week", width: "20%" },
          { header: "Acquisition / Investigation", key: "acquisition" },
          { header: "Collaboration / Discussion", key: "collaboration" },
          { header: "Practice / Production", key: "practice" }
        ],
        rows: Array.from({ length: 10 }, (_, i) => ({
          week: `${i + 1}`,
          acquisition: "",
          collaboration: "",
          practice: ""
        }))
      }
    },
    {
      id: "learning-matrix",
      title: "Learning Activity Matrix",
      shortDescription: "Compare offline vs online methods for various learning types.",
      icon: "Shuffle",
      type: "matrix",
      data: {
        columns: [
          { header: "Learning type", key: "type", width: "20%" },
          { header: "Offline methods", key: "offline" },
          { header: "Online methods", key: "online" }
        ],
        rows: [
          {
            type: "Acquisition",
            offline: ["reading books, papers", "listening to teacher presentations", "watching demonstrations", "master classes"],
            online: ["attending Zoom lectures", "watching videos", "reading digital documents", "listening to podcasts, webcasts"]
          },
          {
            type: "Collaboration",
            offline: ["small group projects", "discussing others’ outputs", "building joint output"],
            online: ["small group projects using Canvas groups", "collaborating on a live Office 365 document"]
          },
          {
            type: "Investigation",
            offline: ["analysing ideas in materials", "collecting and analysing data", "comparing texts"],
            online: ["analysing digital resources", "joint annotation using hypothes.is", "using collaborative online tools", "Wikipedia editathons"]
          },
          {
            type: "Discussion",
            offline: ["tutorials", "seminars", "discussion groups", "class discussions"],
            online: ["Zoom break out rooms", "student group study sessions", "peer assessment in Canvas", "group live editing of documents"]
          },
          {
            type: "Practice",
            offline: ["practising exercises", "doing practice-based projects", "labs", "field trips", "role-play"],
            online: ["using models", "quizzes", "simulations", "virtual labs", "online role-play activities"]
          },
          {
            type: "Production",
            offline: ["student-produced videos", "models", "artefacts", "performances", "reports", "essays", "physical portfolios"],
            online: ["producing digital documents", "representations of designs", "digital artefacts", "slideshows", "blogs", "e-portfolios"]
          }
        ]
      }
    },
    {
      id: "modular-planner",
      title: "Modular Course Building",
      shortDescription: "Plan content and interactions for VLE modules.",
      icon: "Layers",
      type: "planner",
      data: {
        columns: [
          { header: "Module / Week", key: "module", width: "20%" },
          { header: "Content", key: "content" },
          { header: "Interactions", key: "interactions" }
        ],
        rows: [
          { module: "Introductory matter", content: "Course expectations page\nCourse manual PDF\nAbout lecturers page\nWelcome to the course video", interactions: "Agree to rules and conditions quiz\nIntroduce yourself discussion\nUpload a photo assignment\nSubmit a statement assignment" },
          { module: "Week 1 / Module 1", content: "", interactions: "" },
          { module: "Week 2 / Module 2", content: "", interactions: "" },
          { module: "Week ... / Module ...", content: "", interactions: "" },
          { module: "Concluding matter", content: "", interactions: "" }
        ]
      }
    },
    {
      id: "building-checklist",
      title: "Course Building Checklist",
      shortDescription: "Final checks before launching.",
      icon: "ClipboardCheck",
      type: "checklist",
      data: [
        {
          title: "Readiness",
          items: [
            { id: "bc-1", text: "All content is organised into modules" },
            { id: "bc-2", text: "Learning outcomes and course expectations are written" },
            { id: "bc-3", text: "Office hours and/or contact details have been posted" },
            { id: "bc-4", text: "Each module has at least 2 interactive activities" },
            { id: "bc-5", text: "Space for students to learn about the platform is built into timetable" }
          ]
        }
      ]
    },
    {
      id: "appendices",
      title: "Appendices & Theory",
      shortDescription: "In-depth background on Instructional Design, Online Teaching, and Support.",
      icon: "BookOpen",
      type: "text",
      data: [
        { type: "h2", content: "Appendix 1: What is instructional design or learning design" },
        { type: "p", content: "Instructional design originated in the military and corporate settings where the need for training large numbers of people in an efficient and replicable ways gave rise to various frameworks. Due of these roots, instructional design frameworks often resemble project management approaches than pedagogical theory." },
        { type: "h3", content: "Four Pillars of Instructional Design" },
        { type: "list", content: [
          "Social constructivist theory of learning: Learning is a process involving interactions with others.",
          "Focus on the principles of adult learning: Adults learn best when learning is relevant.",
          "Competency-based approach to learning objectives: The object of learning is to acquire real competence.",
          "Project management approach to development: Consistent and high-quality learning experiences require collaborative project approach."
        ]},
        { type: "h2", content: "Appendix 2: Specifics of fully online teaching" },
        { type: "p", content: "Characteristics that set learning online apart from learning in a traditional space can be summarised by two NOs: No back row (all activity is visible) and No corridor (no natural informal spaces)." },
        { type: "h3", content: "Mitigation Strategies" },
        { type: "list", content: [
          "Design online activities that require student participation.",
          "Build a complex support relationship combining pastoral, learning and technical support.",
          "Use peer assessment and project-based assessment.",
          "Set up regular individual touchpoints for each student."
        ]},
        { type: "h2", content: "Appendix 3: Developing a support relationship" },
        { type: "p", content: "Students learning digitally often report feelings of isolation and confusion. A successful digital program will provide sufficient support to give them a feeling of connectedness. This can only be done by building relationships." },
        { type: "h3", content: "Support Roles" },
        { type: "list", content: [
          "Course convener / instructor: Sets learning outcomes, delivers lectures.",
          "Tutor / teaching assistant: Leads online discussions, provides feedback.",
          "Programme administrator: Keeps track of timings, posts announcements.",
          "IT support: Monitors the platform, answers technical questions."
        ]}
      ]
    }
  ]
};
