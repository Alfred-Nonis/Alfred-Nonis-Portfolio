import type { Project } from '../types/project'

export const projectLibrary = {
  eyebrow: 'Project library',
  title: 'Engineering work with context.',
  intro: 'Each project summarizes its objective, key decisions, process, and supporting evidence.',
}

const img = (folder: string, file: string, alt: string, caption?: string) => ({ src: `images/${folder}/${file}`, alt, caption })

// EDIT PROJECT TEXT HERE. Each chapter has a matching drop-in image folder.
// Optional mediaOverrides: { '01-sketch.jpg': { caption: 'Your caption', alt: 'Description', mediaFit: 'contain' } }
export const projects: Project[] = [
  {
    slug: 'baja-sae-chassis',
    title: 'Longhorn Baja SAE — Chassis Design & Fabrication',
    shortTitle: 'Baja SAE Chassis',
    organization: 'Longhorn Baja SAE',
    role: 'Chassis Co-Lead & Founding Member',
    category: 'Vehicle Design',
    subtitle: 'Parametric roll-cage design, structural analysis and fabrication for an off-road vehicle.',
    summary: 'Reduced roll-cage mass by approximately 31%, from about 96 lb to 65 lb, through structural analysis and design revisions.',
    tags: ['SolidWorks', 'ANSYS FEA', 'Vehicle Integration', 'Fabrication'],
    featured: true,
    heroImage: img('baja', 'chassis-isometric-cad.png', 'Isometric SolidWorks CAD view of the Longhorn Baja SAE chassis', 'Isometric chassis CAD showing frame geometry and subsystem packaging.'),
    sections: [
      {
        type: 'chapter',
        mediaFolder: 'project-media/baja/01-design',
        eyebrow: '01',
        title: 'Design Requirements',
        body: [
          'Co-designed a parametric SolidWorks roll cage through 12 iterations around SAE rules, suspension hardpoints, steering and driver packaging, and powertrain serviceability. Selected tube sizes by member function and simplified joints for single-plane notching around the manual notcher’s roughly 40° limit.',
          'Tubing: primary 1.25 in OD × 0.065 in wall; secondary 1.00 in OD × 0.035 in wall; tertiary 1.00 in OD × 0.065 in wall.',
        ],
      },
      {
        type: 'chapter',
        mediaFolder: 'project-media/baja/02-cad-analysis',
        eyebrow: '02',
        title: 'CAD & Structural Analysis',
        body: ['Used ANSYS to evaluate approximately 10,000 lbf frontal/rear loading, 1,400 lbf suspension loading and engine-mount loads. Structural results guided tube selection, member removal and downsizing to reduce roll-cage mass while retaining the required load paths.'],
        metrics: [
          { value: '~96 → ~65 lb', label: 'Roll-cage mass' },
          { value: '~31%', label: 'Mass reduction' },
          { value: '~1.3 / ~1.5', label: 'Front / rear factor of safety' },
        ],
        mediaFit: 'contain',
        images: [
          img('baja', 'chassis-isometric-cad.png', 'Isometric SolidWorks CAD view of the Longhorn Baja SAE chassis', 'Isometric chassis CAD showing frame geometry and subsystem packaging.'),
          img('baja', 'chassis-side-view-cad.png', 'Side-view SolidWorks CAD profile of the Longhorn Baja SAE chassis', 'Side-view chassis CAD showing the frame and packaging envelope.'),
          // Add documented FEA plots here when available; CAD views are not analysis results.
        ],
      },
      {
        type: 'chapter',
        mediaFolder: 'project-media/baja/03-integration',
        eyebrow: '03',
        title: 'Subsystem Integration',
        body: ['Developed chassis geometry around front suspension hardpoints, seat supports, powertrain packaging and service access. Kept shared interfaces in the parametric model to check chassis changes against surrounding systems. A secondary-tube engine hoop supported the powertrain while keeping the engine and CVT accessible for removal.'],
      },
      {
        type: 'chapter',
        mediaFolder: 'project-media/baja/04-fabrication',
        eyebrow: '04',
        title: 'Fabrication',
        body: ['Planned fabrication around uncertain access to a permanent shop. Portable jigging and CAD-derived fixture locations allowed sectioned setups on available welding tables. Simplified joints for single-plane notching, cut and notched straight members in-house, and sourced complex bends from VR3 Engineering. Manually fitted primary tubes and used TIG tack welds to hold fit-up during assembly.'],
      },
    ],
  },
  {
    slug: 'react-mission',
    title: 'REACT - Texas Spacecraft Laboratory',
    shortTitle: 'REACT - Texas Spacecraft Laboratory',
    organization: 'Texas Spacecraft Laboratory',
    role: 'Internal Hardware Lead',
    category: 'Aerospace',
    subtitle: 'Mechanical hardware for CubeSat magnetic-interference research.',
    summary: 'Lead a three-person hardware team developing CubeSat sensor mounts, fasteners and prototype test hardware for REACT research.',
    tags: ['SolidWorks', 'CubeSat Hardware', 'Magnetic Compatibility', 'Prototyping'],
    featured: true,
    heroImage: img('react', 'damping-leg-prototypes-test-board.jpg', 'Prototype liquid damping legs supporting the Texas Spacecraft Laboratory test board', 'Physical damping-leg prototypes supporting the experimental test board.'),
    sections: [
      {
        type: 'chapter',
        mediaFolder: 'project-media/react/01-experimental-hardware',
        eyebrow: '01',
        title: 'Experimental Hardware',
        body: ['Lead a three-person internal hardware team for REACT, coordinating mechanical requirements with physics and electronics teams studying CubeSat reaction-flywheel magnetic disturbances. Hardware work includes sensor mounts, test-board interfaces and mechanical packaging for the experimental setup.'],
      },
      {
        type: 'chapter',
        mediaFolder: 'project-media/react/02-magnetic-packaging',
        eyebrow: '02',
        title: 'Magnetic Compatibility & Packaging',
        body: [
          'Designed 3D-printed sensor mounts and snap-fit hardware in SolidWorks around fit tolerance, magnetometer support and assembly access. Non-ferromagnetic material choices and reduced steel hardware near instrumentation limit additional magnetic disturbance from the mechanical setup.',
          'Current work includes a non-ferromagnetic cooling solution for electronics testing.',
        ],
      },
      {
        type: 'chapter',
        mediaFolder: 'project-media/react/03-damping',
        eyebrow: '03',
        title: 'Liquid Damping Prototype',
        body: ['Developed the viscous damping-leg concept through four design iterations. Internal geometry uses fluid shear to dissipate vibration transmitted through the test board, progressing from CAD and section views to physical prototypes within the experiment’s magnetic constraints.'],
        mediaFit: 'contain',
        images: [
          img('react', 'damping-leg-cad.png', 'External CAD model of the liquid damping support leg developed for Texas Spacecraft Laboratory testing', 'External CAD model of the viscous damping support leg.'),
          img('react', 'damping-leg-cross-section.png', 'Cross-sectional CAD view of the viscous liquid damping leg designed for prototype test-board isolation', 'Cross section showing the internal geometry for viscous fluid shear.'),
          img('react', 'damping-leg-prototypes-test-board.jpg', 'Prototype liquid damping legs supporting the Texas Spacecraft Laboratory test board', 'Physical damping-leg prototypes supporting the experimental test board.'),
        ],
      },
    ],
  },
  {
    slug: 'engine-rebuild',
    title: '2-Stroke Engine Model Build',
    role: 'Collaborative Model Assembly',
    category: 'Engines',
    subtitle: 'Commercial engine-kit assembly from crankshaft to completed model.',
    summary: 'Assembled a commercial 2-stroke engine kit to study crankshaft motion, internal mechanisms and component relationships.',
    tags: ['Engines', 'Mechanical Assembly', 'Engine Architecture', 'Teamwork'],
    featured: true,
    heroImage: img('engine-rebuild', 'completed-model-engine.jpg', 'Completed assembled model internal combustion engine', 'Completed 2-stroke engine model with casing and external components installed.'),
    sections: [
      {
        type: 'chapter',
        mediaFolder: 'project-media/engine-model/01-mechanisms',
        eyebrow: '01',
        title: 'Mechanical Breakdown',
        body: ['Assembled the crankshaft, connecting components and reciprocating mechanism to understand how the internal parts interact through the engine cycle.'],
        images: [img('engine-rebuild', 'crankshaft-assembly.jpg', 'Exposed crankshaft and connecting components during assembly of the model engine', 'Crankshaft and connecting components before final assembly.')],
      },
      {
        type: 'chapter',
        mediaFolder: 'project-media/engine-model/02-assembly',
        eyebrow: '02',
        title: 'Internal Assembly',
        body: ['Built the internal engine assembly in sequence, checking component orientation and mechanical movement before installing the remaining casing.'],
        images: [img('engine-rebuild', 'internal-engine-assembly.jpg', 'Partially assembled model engine showing the internal crankshaft and reciprocating components', 'Internal crank mechanism before the remaining casing was installed.')],
      },
      {
        type: 'chapter',
        mediaFolder: 'project-media/engine-model/03-completed',
        eyebrow: '03',
        title: 'Completed Build',
        body: ['Completed the commercial 2-stroke engine model with the internal mechanism, casing and external components assembled.'],
        images: [img('engine-rebuild', 'completed-model-engine.jpg', 'Completed assembled model internal combustion engine', 'Completed 2-stroke engine model with casing and external components installed.')],
      },
    ],
  },
  {
    slug: 'velocity-stack',
    title: 'Engine Intake Velocity Stack',
    shortTitle: 'Engine Intake Velocity Stack',
    role: 'Independent Designer & Fabricator',
    category: 'Engines',
    subtitle: 'Helmholtz-tuned, 3D-printed intake for a Predator 79 cc engine.',
    summary: 'Independently designed and 3D-printed an intake velocity stack that achieved a 7.2% average torque increase during testing.',
    tags: ['CAD', 'Intake Tuning', '3D Printing', 'Prototype Testing'],
    featured: true,
    heroImage: img('velocity-stack', 'velocity-stack-installed.jpg', '3D-printed intake velocity stack installed on a Predator 79 cc engine', 'Velocity-stack prototype installed on the Predator 79 cc engine for testing.'),
    sections: [
      {
        type: 'chapter',
        mediaFolder: 'project-media/velocity-stack/01-concept',
        eyebrow: '01',
        title: 'Intake Concept',
        body: ['Designed a 3D-printed intake velocity stack for a Predator 79 cc engine with a 5% performance target. Used a bellmouth to reduce inlet losses while considering inertial charging, intake pressure-wave tuning and Helmholtz resonance to improve cylinder filling.'],
        metrics: [{ value: '5%', label: 'Target improvement' }],
      },
      {
        type: 'chapter',
        mediaFolder: 'project-media/velocity-stack/02-cad',
        eyebrow: '02',
        title: 'CAD & Prototype Iteration',
        body: ['Modeled two intake prototypes in SolidWorks around engine packaging and an approximately 16-hour print limit. Manufacturing difficulty with the first prototype led to a shorter second iteration that was easier to print and test.'],
        mediaFit: 'contain',
        images: [img('velocity-stack', 'velocity-stack-cad.png', 'CAD model of the intake velocity stack designed for the Predator 79 cc engine', 'Intake CAD developed around engine-packaging and manufacturing constraints.')],
      },
      {
        type: 'chapter',
        mediaFolder: 'project-media/velocity-stack/03-testing',
        eyebrow: '03',
        title: 'Testing & Result',
        body: ['Validated the prototype using a Hall-effect sensor to track engine speed during testing up to approximately 2,000 RPM. The final design produced a 7.2% average torque increase across the measured range, exceeding the original 5% target.'],
        metrics: [
          { value: '5%', label: 'Target improvement' },
          { value: '7.2%', label: 'Average torque increase', note: 'Across the tested RPM range' },
          { value: '~2,000 RPM', label: 'Tested range' },
        ],
        images: [img('velocity-stack', 'velocity-stack-installed.jpg', '3D-printed intake velocity stack installed on a Predator 79 cc engine', 'Velocity-stack prototype installed on the Predator 79 cc engine for testing.')],
      },
    ],
  },
  {
    slug: 'go-kart',
    title: 'Go-Kart',
    role: 'Role to be documented',
    category: 'Personal Projects',
    subtitle: 'Technical documentation in progress.',
    summary: 'Project goal, role, design details and build/test documentation are still to be added.',
    tags: ['Vehicle Systems', 'Fabrication', 'CAD', 'Testing'],
    sections: [
      { type: 'chapter', mediaFolder: 'project-media/go-kart/01-concept', eyebrow: '01', title: 'Concept' },
      { type: 'chapter', mediaFolder: 'project-media/go-kart/02-design', eyebrow: '02', title: 'Design' },
      { type: 'chapter', mediaFolder: 'project-media/go-kart/03-build-test', eyebrow: '03', title: 'Build / Test' },
    ],
  },
]

export const findProject = (slug: string) => projects.find((project) => project.slug === slug)
