import type { ProjectImage, ProjectSection } from '../types/project'

export interface IndustryExperience {
  slug: string
  organization: string
  shortName?: string
  role: string
  period: string
  summary: string
  tags: string[]
  sections?: ProjectSection[]
  heroImage?: ProjectImage
}

// EDIT INDUSTRY EXPERIENCE TEXT HERE. mediaFolder connects each chapter to src/assets/.
// Optional mediaOverrides use exact filenames, just like project chapters.
export const experiences: IndustryExperience[] = [
  {
    slug: 'agentic-innovations',
    organization: 'Agentic Innovations',
    role: 'AI Engineering Intern',
    period: 'May 2026 – August 2026',
    summary: 'Co-developed agentic AI applications for patent analysis and engineering BOM sourcing, with supplier validation and evidence-backed reporting.',
    tags: ['Codex', 'CrewAI', 'RAG', 'Semantic Search', 'USPTO API'],
    sections: [
      {
        type: 'chapter',
        eyebrow: '01',
        title: 'Workflow / Problem',
        mediaFolder: 'experience-media/agentic-innovations/01-workflow',
        body: ['Co-developed AI workflows for patent analysis and engineering BOM sourcing. Patent analysis used Codex, CrewAI, retrieval-augmented generation and semantic search to retrieve and verify USPTO information. CASE evaluated supplier manufacturing capabilities and material availability against engineering BOM requirements.'],
      },
      {
        type: 'chapter',
        eyebrow: '02',
        title: 'Development & Validation',
        mediaFolder: 'experience-media/agentic-innovations/02-development',
        body: ['Used Codex to develop CASE’s system architecture within the collaborative sourcing-platform work. Developed validation test cases to check supplier capabilities against BOM requirements and refine sourcing criteria, connecting engineering-data processing to evidence-backed sourcing reports.'],
      },
      {
        type: 'chapter',
        eyebrow: '03',
        title: 'Engineering Review / Outcome',
        mediaFolder: 'experience-media/agentic-innovations/03-validation',
        body: ['Patent reports identified novel technical features and potential overlaps; CASE reports connected sourcing recommendations to supporting evidence. The team was selected from approximately 10 teams to pitch CASE to engineers from Toyota, NVIDIA, Apple and the NSA.'],
      },
    ],
  },
  {
    slug: 'encotech-engineering-consultants',
    organization: 'Encotech Engineering Consultants, Inc.',
    shortName: 'Encotech Engineering Consultants',
    role: 'MEP Intern',
    period: 'June 2022 – August 2022',
    summary: 'Early MEP internship supporting building layouts and engineering drawing review.',
    tags: ['Autodesk Revit', 'Electrical Layouts', 'Engineering Drawings', 'Plumbing BOMs', 'HVAC Exposure'],
    sections: [{
      type: 'chapter',
      title: 'Building Layouts & Drawing Review',
      mediaFolder: 'experience-media/encotech',
      body: ['Developed electrical outlet layouts and interior floor plans in Autodesk Revit, compared layouts against existing engineering drawings, reviewed plumbing BOMs and gained exposure to HVAC system design.'],
    }],
  },
]

export const experienceHref = (experience: IndustryExperience) => experience.sections?.length
  ? `/experience/${experience.slug}`
  : `/experience#${experience.slug}`
