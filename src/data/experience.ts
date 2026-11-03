import type { Contribution, ProjectImage, ProjectSection } from '../types/project'

export interface IndustryExperience {
  slug: string
  organization: string
  shortName?: string
  role: string
  period: string
  summary: string
  overview?: string[]
  contribution?: Contribution
  tags: string[]
  sections?: ProjectSection[]
  heroImage?: ProjectImage
}

// EDIT INDUSTRY EXPERIENCE TEXT HERE. mediaFolder connects each chapter to src/assets/.
// Optional mediaOverrides use exact filenames, just like project chapters.
export const experiences: IndustryExperience[] = [
  {
    slug: "agentic-innovations",
    organization: "Agentic Innovations",
    role: "AI Engineering Intern",
    contribution: {
      items: [
        "Used Codex to help build CASE's system architecture and engineering-BOM processing workflow.",
        "Developed supplier-validation test cases and criteria for checking manufacturing capability against BOM requirements.",
        "Worked on evidence-backed supplier validation so engineering recommendations could be traced back to supporting information.",
        "Worked on the patent-analysis workflow used to search, verify and compare technical patent information."
      ]
    },
    period: "May 2026 – August 2026",
    summary: "Co-developed agentic AI applications for patent analysis and engineering BOM sourcing, with supplier validation and evidence-backed reporting.",
    tags: [
      "Codex",
      "CrewAI",
      "RAG",
      "Semantic Search",
      "USPTO API"
    ],
    sections: [
      {
        type: "chapter",
        eyebrow: "01",
        title: "Workflow / Problem",
        mediaFolder: "experience-media/agentic-innovations/01-workflow",
        body: [
          "The patent-analysis tool was built around finding relevant patent information, verifying it, and then comparing technical features and possible overlap.",
          "CASE was a different problem. An engineering BOM can tell you what parts you need, but it does not automatically tell you which suppliers can actually make them."
        ],
        bodyAfterMedia: [
          "The workflow had to turn the BOM into requirements that could be compared against supplier manufacturing capability, material availability, and the evidence we could find for those claims."
        ]
      },
      {
        type: "chapter",
        eyebrow: "02",
        title: "Development & Validation",
        mediaFolder: "experience-media/agentic-innovations/02-development",
        body: [
          "I used Codex to help build out CASE's system architecture and workflow.",
          "The system took BOM information and converted it into a more structured engineering model before comparing those requirements against supplier information."
        ],
        bodyAfterMedia: [
          "I also worked on validation test cases. The point was not just getting CASE to return a supplier; we wanted to check whether the supplier actually had the right capability and whether there was enough evidence to support the recommendation.",
          "That testing helped us refine the sourcing criteria and gave us a way to check the workflow before putting the results in front of an engineer."
        ]
      },
      {
        type: "chapter",
        eyebrow: "03",
        title: "Engineering Review / Outcome",
        mediaFolder: "experience-media/agentic-innovations/03-validation",
        body: [
          "Our team was selected from roughly 10 teams to present CASE to engineers from Toyota, NVIDIA, Apple, and the NSA.",
          "We walked through how the system processed engineering requirements, how supplier capability was checked, and how evidence was carried into the sourcing recommendations."
        ],
        bodyAfterMedia: [
          "For me, the interesting part was working on a software tool where the output still had to make sense to an engineer. A confident answer was not useful if there was no way to verify why the system gave it."
        ]
      }
    ],
    overview: [
      "At Agentic Innovations, I worked on agentic AI tools that were aimed at engineering problems instead of general chatbot-type tasks.",
      "Most of my work was split between patent analysis and CASE, a BOM-sourcing platform that compared engineering requirements against supplier capability and the evidence available for those suppliers."
    ]
  },
  {
    slug: "encotech-engineering-consultants",
    organization: "Encotech Engineering Consultants, Inc.",
    shortName: "Encotech Engineering Consultants",
    role: "MEP Intern",
    contribution: {
      items: [
        "Created electrical outlet layouts and interior floor-plan updates in Autodesk Revit.",
        "Compared proposed layouts against existing engineering drawings and reviewed plumbing BOM information."
      ]
    },
    period: "June 2022 – August 2022",
    summary: "Early MEP internship supporting building layouts and engineering drawing review.",
    tags: [
      "Autodesk Revit",
      "Electrical Layouts",
      "Engineering Drawings",
      "Plumbing BOMs",
      "HVAC Exposure"
    ],
    sections: [
      {
        type: "chapter",
        title: "Building Layouts & Drawing Review",
        mediaFolder: "experience-media/encotech",
        body: [
          "Encotech was my first real look at how engineering work moves through a professional building-design environment.",
          "I worked in Autodesk Revit on electrical outlet layouts and interior floor plans, then checked those layouts against existing engineering drawings."
        ],
        bodyAfterMedia: [
          "I also reviewed plumbing BOMs and spent time shadowing engineers as they worked through HVAC system design. I was still early in engineering school at the time, so a lot of the value for me was seeing how drawings, BOMs, and different building systems fit together on an actual project."
        ]
      }
    ]
  }
]

export const experienceHref = (experience: IndustryExperience) => experience.sections?.length
  ? `/experience/${experience.slug}`
  : `/experience#${experience.slug}`
