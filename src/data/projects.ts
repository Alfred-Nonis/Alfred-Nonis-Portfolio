import type { Project } from '../types/project'

export const projectLibrary = {
  eyebrow: 'Project library',
  title: 'Engineering work with context.',
  intro: 'Each project summarizes its objective, key decisions, process, and supporting evidence.',
}

// EDIT PROJECT TEXT HERE. Chapter/story mediaFolder paths connect to drop-in folders.
// mediaOverrides accept exact filenames or basenames without extensions.
export const projects: Project[] = [
  {
    slug: "baja-sae-chassis",
    title: "Longhorn Baja SAE — Chassis Design & Fabrication",
    shortTitle: "Baja SAE Chassis",
    organization: "Longhorn Baja SAE",
    role: "Chassis Co-Lead & Founding Member",
    contribution: {
      role: "Chassis Co-Lead & Founding Member",
      items: [
        "Built and maintained the parametric SolidWorks roll-cage model through the chassis design iterations.",
        "Ran chassis FEA for frontal/rear loading, suspension-mount loads and engine-support cases to guide tube removal and downsizing.",
        "Worked through chassis DFM around the ~40° manual tube-notcher limit, tube sizing, outsourced VR3 bends and portable jigging.",
        "Worked on tube fit-up and chassis fabrication using the notcher, angle grinder and TIG tack welding, then coordinated final chassis integration with powertrain, suspension and ergonomics."
      ]
    },
    keyMetrics: [
      { value: "12", label: "Major chassis iterations" },
      { value: "~96 → ~65 lb", label: "Roll-cage mass" },
      { value: "~31%", label: "Mass reduction" },
      { value: "10,000 lbf", label: "Major frontal / rear analysis load" }
    ],
    category: "Vehicle Design",
    subtitle: "Parametric roll-cage design, structural analysis and fabrication for an off-road vehicle.",
    summary: "Reduced roll-cage mass by approximately 31%, from about 96 lb to 65 lb, through structural analysis and design revisions.",
    tags: [
      "SolidWorks",
      "ANSYS FEA",
      "Vehicle Integration",
      "Fabrication"
    ],
    featured: true,
    heroImage: {
      src: "images/baja/chassis-isometric-cad.png",
      alt: "Isometric SolidWorks CAD view of the Longhorn Baja SAE chassis",
      caption: "Isometric chassis CAD showing frame geometry and subsystem packaging."
    },
    heroMediaFolder: "project-media/baja/hero",
    heroPreferredBasename: "me in the baja car lol",
    sections: [
      {
        type: "chapter",
        mediaFolder: "project-media/baja/01-design",
        eyebrow: "01",
        title: "Initial Design",
        body: [
          "When we first started laying out the chassis, there was no previous Longhorn Baja car to build off of, so a lot of the first few designs came down to intuition and seeing what different ways of bracing the car would actually look like.",
          "I spent some time looking at a front-braced rear roll hoop and also drew a floor with a lot of cross-bracing. At that point I was trying to get good load paths without solving everything by adding another tube and making the chassis heavier."
        ],
        bodyAfterMedia: [
          "For the roll-hoop concept, I was looking at bringing the rear bracing forward while still leaving enough space for the seat. I also wanted the seat and driver weight to stay as low as we could reasonably get them.",
          "The floor was a team process. Three of us each came up with our own layouts. Mine had a lot of cross-bracing, another design had very little, and my lead eventually combined parts of the ideas into something much simpler. As the rest of the chassis developed, we kept removing tubing until the floor looked much more like a ladder frame with two lateral support tubes."
        ],
        engineeringStories: [
          {
            title: "Tube Selection",
            featureEyebrow: "Weight vs. bending strength",
            featurePriority: "secondary",
            featureResult: "~30% less material for approximately the same bending strength",
            mediaFolder: "project-media/baja/01-design/tube-selection",
            mediaFit: "contain",
            replaceCalculationsWhenMediaPresent: true,
            mediaOverrides: {
              "01-tube-selection-hand-calculations": {
                caption: "Tube Selection Hand Calculations",
                description: "Hand calculation comparing tube section modulus and material usage for the chassis tubing selection.",
                alt: "Hand calculation comparing tube section modulus and material usage for the chassis tubing selection.",
                mediaFit: "contain"
              }
            },
            body: [
              "Weight was a major consideration from the beginning. One of the things we looked at was how to get the bending strength we needed without putting more steel into the frame than we had to.",
              "For bending, moving material farther away from the neutral axis is more efficient than just making the wall thicker. The rules required at least a 0.062 in wall, so using that minimum wall with a 1.25 in OD tube made a lot of sense.",
              "For comparison, a 1.25 in OD × 0.062 in wall tube has a section modulus of about 0.0655 in³. A 1.00 in OD tube would need roughly a 0.120 in wall to get to the same section modulus.",
              "That works out to about 0.786 lb/ft for the larger thin-wall tube compared with about 1.13 lb/ft for the smaller tube with the thicker wall. For roughly the same bending strength, the smaller tube would use about 30% more material.",
              "That became part of how we thought about the rest of the frame: use the larger OD where it made sense, then keep the wall as thin as the rules and loading allowed instead of getting strength by adding wall thickness."
            ],
            calculations: [
              "I = π/64 (D⁴ - d⁴)\n\nS = I / (D/2)\n\nd = D - 2t",
              "D = 1.25 in\nt = 0.062 in",
              "I ≈ 0.0409 in⁴\nS ≈ 0.0655 in³",
              "Equivalent approximate 1.00 in OD wall:\nt ≈ 0.120 in",
              "1.25 × 0.062:\nA ≈ 0.231 in²\n\n1.00 × 0.120:\nA ≈ 0.332 in²"
            ]
          }
        ],
        mediaOverrides: {
          "01-floor-concept": {
            caption: "Early floor-bracing concept",
            description: "My first floor concept used much heavier cross-bracing. Three of us explored separate layouts before parts of the designs were combined and simplified into the ladder-style floor used later in the chassis.",
            alt: "Early floor-bracing concept",
            mediaFit: "contain"
          },
          "02-roll-hoop-concept": {
            caption: "Early roll hoop concept research",
            description: "Early front-braced rear roll-hoop concept looking at rear bracing, load transfer, seat position, and keeping the driver's weight low in the chassis.",
            alt: "Early roll hoop concept research",
            mediaFit: "contain"
          },
          "03-first-complete-chassis-iteration": {
            caption: "First complete chassis design iteration before the later weight-reduction and integration changes.",
            alt: "First complete chassis design iteration before the later weight-reduction and integration changes."
          }
        }
      },
      {
        type: "chapter",
        mediaFolder: "project-media/baja/02-cad-analysis",
        eyebrow: "02",
        title: "CAD & Analysis",
        body: [
          "Once we had a layout that made sense, most of the chassis development moved into SolidWorks. I built the frame parametrically so we could move tubes and change dimensions without having to rebuild the entire chassis every time something else on the car changed.",
          "The chassis ended up going through 12 major iterations. As it changed, I used ANSYS to look at the major load cases and figure out where tubing was actually doing useful work and where we were just carrying extra weight."
        ],
        metrics: [
          {
            value: "~1.3 / ~1.5",
            label: "Front / rear factor of safety"
          }
        ],
        mediaFit: "contain",
        images: [
          {
            src: "images/baja/chassis-isometric-cad.png",
            alt: "Isometric SolidWorks CAD view of the Longhorn Baja SAE chassis",
            caption: "Isometric chassis CAD showing frame geometry and subsystem packaging."
          },
          {
            src: "images/baja/chassis-side-view-cad.png",
            alt: "Side-view SolidWorks CAD profile of the Longhorn Baja SAE chassis",
            caption: "Side-view chassis CAD showing the frame and packaging envelope."
          }
        ],
        bodyAfterMedia: [
          "The main cases included roughly 10,000 lbf frontal and rear loading, about 1,400 lbf at the suspension mounts, and loading around the engine support. The analysis helped us remove members and downsize tubing where it made sense.",
          "By the later iterations, the chassis had gone from roughly 96 lb to about 65 lb, which was around a 31% reduction."
        ],
        mediaOverrides: {
          "01-first-complete-chassis-iteration": {
            caption: "First complete chassis design iteration before the later weight-reduction and integration changes.",
            alt: "First complete chassis design iteration before the later weight-reduction and integration changes."
          }
        }
      },
      {
        type: "chapter",
        mediaFolder: "project-media/baja/03-integration",
        eyebrow: "03",
        title: "System Integration",
        body: [
          "The chassis could not really be designed on its own because almost every other mechanical system eventually had to touch it.",
          "The suspension mounting points had to land in places where the chassis could actually support them. The seat had to sit at the right angle without putting the driver too high, and the rear of the frame had to leave room for the engine and CVT while still letting us get them back out of the car."
        ],
        bodyAfterMedia: [
          "That was one of the reasons keeping the chassis parametric helped so much. If powertrain, suspension, or ergo needed something moved, we could update the frame and check what else that change affected before anybody started cutting tubing.",
          "Toward the end of the build, a lot of the work became making sure the finished chassis actually worked with the people designing the systems around it, not just making sure the frame looked good by itself."
        ],
        mediaOverrides: {
          "01-working-with-subsystems": {
            caption: "Working with powertrain, ergonomics, and suspension members around the completed chassis during vehicle integration.",
            alt: "Working with powertrain, ergonomics, and suspension members around the completed chassis during vehicle integration."
          },
          "02-painted-rear-integration": {
            caption: "Rear of the painted chassis with powertrain and suspension components installed.",
            alt: "Rear of the painted chassis with powertrain and suspension components installed."
          }
        }
      },
      {
        type: "chapter",
        mediaFolder: "project-media/baja/04-fabrication",
        eyebrow: "04",
        title: "Fabrication",
        body: [
          "Fabrication changed the way we looked at a lot of the CAD. A joint could look completely fine on the computer and still be a pain to actually make with the tools we had.",
          "We also did not know if we were going to have a permanent garage, so the jigging could not depend on one table staying set up for months. We made the fixtures portable and used locations from the CAD so the setup could be recreated on whatever welding table we had access to."
        ],
        engineeringStories: [
          {
            title: "Designing Around the Tube Notcher",
            featureEyebrow: "Manufacturing changed the CAD",
            body: [
              "The tube notcher became one of those constraints that sounds small until you actually start making the car.",
              "Ours could only rotate to roughly 40°, and it worked best when the notch stayed in one plane. A lot of joints that were easy to model became much harder once the cut started wrapping around multiple axes.",
              "As the chassis changed, we started designing more of the joints around what the notcher could actually make. Wherever we could, we kept the cuts in one plane instead of relying on complicated compound notches.",
              "It was one of the first times on the project where manufacturing stopped being something that happened after the CAD and started becoming part of how I thought about the CAD itself."
            ]
          },
          {
            title: "Chassis Support Stands",
            body: [
              "We also needed a way to get the chassis off the ground while we worked underneath and around the car, so I designed a pair of A-frame stands using the same 1.00 in OD × 0.035 in wall secondary tubing used on the chassis.",
              "Realistically, the weight of the car should be split across two stands. I still analyzed one stand with the full 300 lb load by itself so I knew one stand could handle much more than the load we expected it to see.",
              "I modeled the stand in SolidWorks and ran a beam FEA before we committed to building it. The 300 lb case gave about 152 MPa maximum upper-bound axial and bending stress compared with the displayed 460 MPa yield strength, which works out to an approximate factor of safety of 3.0.",
              "Maximum displacement was about 1.1 mm. The first design passed the analysis, so I did not change it just for the sake of changing it. The stands are ready to be fabricated once we have garage space again."
            ],
            mediaFolder: "project-media/baja/05-support-stands",
            mediaFit: "contain",
            mediaOverrides: {
              "01-stand-fea-exaggerated": {
                caption: "SolidWorks beam FEA of one chassis support stand under the full 300 lb load. Deformation is exaggerated approximately 68.9× so the deflected shape is visible.",
                alt: "SolidWorks beam FEA of one chassis support stand under the full 300 lb load. Deformation is exaggerated approximately 68.9× so the deflected shape is visible."
              },
              "02-stand-fea-1to1": {
                caption: "The same 300 lb stand study shown at a 1:1 deformation scale.",
                alt: "The same 300 lb stand study shown at a 1:1 deformation scale."
              }
            }
          }
        ],
        bodyAfterMedia: [
          "Straight tubes were cut and notched in-house. The more complicated bent members were sent to VR3 Engineering, so we had to make drawings and a primary-tube BOM that they could use for bending.",
          "A lot of the final fit-up still came down to physically working with the tubes. I used the notcher, cleaned up fits with an angle grinder when needed, and TIG tack welded members once everything was sitting correctly in the jig."
        ],
        mediaOverrides: {
          "01-finished-tube-notch": {
            caption: "Finished tube notch after fitting the member to its mating tube.",
            alt: "Finished tube notch after fitting the member to its mating tube."
          },
          "02-tig-welding-chassis": {
            caption: "TIG tack welding during chassis fabrication.",
            alt: "TIG tack welding during chassis fabrication."
          },
          "03-primary-roll-cage-progress": {
            caption: "Primary roll-cage structure during fabrication before the remaining chassis members were added.",
            alt: "Primary roll-cage structure during fabrication before the remaining chassis members were added."
          },
          "04-angle-grinding-fitup": {
            caption: "Cleaning up a notched tube with an angle grinder to improve the fit before welding.",
            alt: "Cleaning up a notched tube with an angle grinder to improve the fit before welding."
          },
          "05-using-tube-notcher": {
            caption: "Using the manual tube notcher that drove many of the single-plane joint decisions in the chassis.",
            alt: "Using the manual tube notcher that drove many of the single-plane joint decisions in the chassis."
          },
          "06-welded-lbr-chris-gift": {
            caption: "TIG-welded LBR and Chris lettering made as a farewell gift during the build season.",
            alt: "TIG-welded LBR and Chris lettering made as a farewell gift during the build season."
          },
          "07-vr3-primary-bom-drawing": {
            caption: "Primary-tube BOM and bending drawing prepared for VR3 Engineering.",
            alt: "Primary-tube BOM and bending drawing prepared for VR3 Engineering."
          }
        }
      }
    ],
    overview: [
      "When we started the chassis, we did not have an older Longhorn Baja car to build from, so a lot of the early work came from trying different layouts and seeing what actually made sense for the rules, weight, packaging, and how we were going to manufacture it.",
      "The roll cage went through 12 major iterations before the design was finalized. The final chassis dropped from about 96 lb to 65 lb while still accounting for the suspension, powertrain, seat, service access, and the equipment we had available to fabricate it."
    ]
  },
  {
    slug: "dragster",
    title: "Dragster Design",
    cardMediaFolder: "project-media/dragster/01-gallery",
    cardPreferredBasename: "01-dragster-cad",
    category: "Vehicle Design",
    subtitle: "CAD and engineering drawing from a dragster design project.",
    summary: "CAD and engineering drawing from a dragster design project.",
    overview: [],
    tags: [
      "CAD",
      "Engineering Drawing",
      "Vehicle Design"
    ],
    gallery: {
      mediaFolder: "project-media/dragster/01-gallery",
      mediaFit: "contain",
      mediaOverrides: {
        "01-dragster-cad": {
          caption: "Dragster CAD — View 1",
          alt: "Dragster CAD — View 1"
        },
        "02-dragster-cad": {
          caption: "Dragster CAD — View 2",
          alt: "Dragster CAD — View 2"
        },
        "03-dragster-engineering-drawing": {
          caption: "Dragster Engineering Drawing",
          alt: "Dragster Engineering Drawing"
        }
      }
    },
    sections: []
  },
  {
    slug: "react-mission",
    title: "REACT - Texas Spacecraft Laboratory",
    shortTitle: "REACT - Texas Spacecraft Laboratory",
    organization: "Texas Spacecraft Laboratory",
    role: "Internal Hardware Lead",
    contribution: {
      role: "Internal Hardware Lead",
      items: [
        "Lead the mechanical development of internal experimental hardware including sensor supports, test-board hardware and magnetometer-related mechanical components.",
        "Developed non-ferromagnetic / 3D-printed fastening concepts to reduce unnecessary steel hardware near magnetically sensitive parts of the experiment.",
        "Developed the viscous damping-leg concept through four mechanical iterations, including the fluid-holder geometry, mounting method and revised tapered snap-fit pins.",
        "Coordinate mechanical packaging changes with the physics and electronics teams as the experimental setup evolves."
      ]
    },
    keyMetrics: [
      { value: "4", label: "Damping-leg design iterations" },
      { value: "Internal Hardware Lead", label: "Role" },
      { value: "Non-ferromagnetic constraints", label: "Mechanical design requirement" }
    ],
    category: "Aerospace",
    subtitle: "Mechanical hardware for CubeSat magnetic-interference research.",
    summary: "Lead a three-person hardware team developing CubeSat sensor mounts, fasteners and prototype test hardware for REACT research.",
    tags: [
      "SolidWorks",
      "CubeSat Hardware",
      "Magnetic Compatibility",
      "Prototyping"
    ],
    featured: true,
    heroImage: {
      src: "images/react/damping-leg-prototypes-test-board.jpg",
      alt: "Prototype liquid damping legs supporting the Texas Spacecraft Laboratory test board",
      caption: "Physical damping-leg prototypes supporting the experimental test board."
    },
    sections: [
      {
        type: "chapter",
        mediaFolder: "project-media/react/01-experimental-hardware",
        eyebrow: "01",
        title: "Experimental Hardware",
        body: [
          "My role is mostly on the mechanical side of the experiment. I work on sensor supports, test-board hardware, electronics packaging, and whatever else needs to physically hold the setup together.",
          "A lot of the parts are small, but their position still matters. The hardware has to keep the experiment where the physics and electronics teams expect it to be while also being easy enough to print, assemble, remove, and change when the setup evolves."
        ],
        bodyAfterMedia: [
          "That has made REACT a little different from Baja for me. Instead of designing around large structural loads, a lot more of the work comes down to packaging, tolerances, material choice, and making sure a mechanical part does not interfere with what the experiment is actually trying to measure."
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/react/02-magnetic-packaging",
        eyebrow: "02",
        title: "Magnetic Compatibility & Packaging",
        body: [
          "Because the experiment is studying magnetic interference, we also have to pay attention to what the hardware itself is made from.",
          "Putting unnecessary steel close to the magnetometer would make the mechanical setup part of the problem. Because of that, I have worked on 3D-printed sensor mounts and snap-fit fastening ideas that let us hold parts in place without automatically reaching for another steel screw."
        ],
        bodyAfterMedia: [
          "That does not mean every piece of metal disappears. It just means material choice has to be something I think about earlier than I normally would on a mechanical project."
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/react/03-damping",
        eyebrow: "03",
        title: "Damping Development",
        body: [
          "The damping legs started from a really simple idea: put the table leg into a container of viscous fluid and let the fluid absorb some of the vibration.",
          "The first version was basically just that. The problem was that the leg still had too much room to move around inside the container, so the table could still wiggle and potentially tip."
        ],
        mediaFit: "contain",
        images: [
          {
            src: "images/react/damping-leg-cad.png",
            alt: "External CAD model of the liquid damping support leg developed for Texas Spacecraft Laboratory testing",
            caption: "External CAD model of the viscous damping support leg."
          },
          {
            src: "images/react/damping-leg-cross-section.png",
            alt: "Cross-sectional CAD view of the viscous liquid damping leg designed for prototype test-board isolation",
            caption: "Cross section showing the internal geometry for viscous fluid shear."
          },
          {
            src: "images/react/damping-leg-prototypes-test-board.jpg",
            alt: "Prototype liquid damping legs supporting the Texas Spacecraft Laboratory test board",
            caption: "Physical damping-leg prototypes supporting the experimental test board."
          }
        ],
        bodyAfterMedia: [
          "For the second iteration, I made the fluid holder much taller. The idea was to increase the fluid column height and the pressure around the leg while still using the viscous fluid to help dissipate vibration.",
          "The third iteration focused more on actually securing the damper to the test setup. I added snap-fit pins so the damping leg could attach to the wooden base plate instead of just sitting on top of it.",
          "Those pins ended up being too brittle and kept breaking. For the fourth iteration, I changed the pins to a more tapered shape so the geometry did not create such a sharp local stress concentration and the load could spread more gradually through the pin."
        ],
        mediaOverrides: {
          "01-iteration-1-fluid-cup": {
            caption: "Iteration 1 — simple viscous-fluid cup. The leg still had too much lateral freedom.",
            alt: "Iteration 1 — simple viscous-fluid cup. The leg still had too much lateral freedom."
          },
          "02-iteration-2-increased-pressure": {
            caption: "Iteration 2 — taller fluid holder used to increase the fluid column height and pressure around the table leg.",
            alt: "Iteration 2 — taller fluid holder used to increase the fluid column height and pressure around the table leg."
          },
          "03-iteration-3-snap-fit": {
            caption: "Iteration 3 — snap-fit pins added so the damping leg could attach directly to the test-board base.",
            alt: "Iteration 3 — snap-fit pins added so the damping leg could attach directly to the test-board base."
          },
          "04-iteration-3-snap-fit-with-base": {
            caption: "Iteration 3 snap-fit concept shown together with the wooden base-plate interface.",
            alt: "Iteration 3 snap-fit concept shown together with the wooden base-plate interface."
          },
          "05-iteration-4-tapered-snap-pins": {
            caption: "Iteration 4 — tapered snap-fit pins developed after the earlier pins proved too brittle and repeatedly broke.",
            alt: "Iteration 4 — tapered snap-fit pins developed after the earlier pins proved too brittle and repeatedly broke."
          }
        }
      }
    ],
    overview: [
      "For REACT, I lead a small internal hardware team and work with the physics and electronics teams on the mechanical side of the experiment.",
      "A lot of the project is making hardware that holds the experiment together without the hardware itself becoming another variable we have to worry about."
    ]
  },
  {
    slug: "engine-rebuild",
    title: "2-Stroke Engine Model Build",
    role: "Collaborative Model Assembly",
    category: "Engines",
    subtitle: "Commercial engine-kit assembly from crankshaft to completed model.",
    summary: "Assembled a commercial 2-stroke engine kit to study crankshaft motion, internal mechanisms and component relationships.",
    tags: [
      "Engines",
      "Mechanical Assembly",
      "Engine Architecture",
      "Teamwork"
    ],
    featured: true,
    heroImage: {
      src: "images/engine-rebuild/completed-model-engine.jpg",
      alt: "Completed assembled model internal combustion engine",
      caption: "Completed 2-stroke engine model with casing and external components installed."
    },
    sections: [
      {
        type: "chapter",
        mediaFolder: "project-media/engine-model/01-mechanisms",
        eyebrow: "01",
        title: "Crankshaft & Mechanism",
        body: [
          "We started with the crankshaft and the parts directly connected to it before hiding everything behind the casing.",
          "That was probably the most useful part of the build for me because we could rotate the mechanism by hand and actually watch the motion transfer through the engine instead of looking at each component by itself."
        ],
        images: [
          {
            src: "images/engine-rebuild/crankshaft-assembly.jpg",
            alt: "Exposed crankshaft and connecting components during assembly of the model engine",
            caption: "Crankshaft and connecting components before final assembly."
          }
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/engine-model/02-assembly",
        eyebrow: "02",
        title: "Internal Assembly",
        body: [
          "As more parts went on, the individual mechanisms started looking like an actual engine.",
          "With the crankshaft, pistons, and flywheel all installed, we could check the movement through the assembly before closing it up. Building it in that order made it much easier to understand which parts were driving the motion and which parts were there to support or contain the mechanism."
        ],
        images: [
          {
            src: "images/engine-rebuild/internal-engine-assembly.jpg",
            alt: "Partially assembled model engine showing the internal crankshaft and reciprocating components",
            caption: "Internal crank mechanism before the remaining casing was installed."
          }
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/engine-model/03-completed",
        eyebrow: "03",
        title: "Completed Model",
        body: [
          "Once the internal mechanism was working correctly, we installed the remaining casing and external parts.",
          "The finished model was not something we designed from scratch, but assembling it gave me a much better physical understanding of how a small engine goes together and how the internal components interact once everything is packaged into the final housing."
        ],
        images: [
          {
            src: "images/engine-rebuild/completed-model-engine.jpg",
            alt: "Completed assembled model internal combustion engine",
            caption: "Completed 2-stroke engine model with casing and external components installed."
          }
        ],
        mediaOverrides: {
          "02-engine-model-fan": {
            caption: "Fan component from the 2-stroke engine model build.",
            alt: "Fan component from the 2-stroke engine model build."
          }
        }
      }
    ],
    overview: [
      "I built the 2-stroke engine model with a group of friends because I wanted to see how the pieces I normally looked at in diagrams actually moved together as a mechanism.",
      "It was a much simpler project than Baja or REACT, but physically assembling it made the relationship between the crankshaft, pistons, flywheel, and the rest of the engine much easier to visualize."
    ]
  },
  {
    slug: "velocity-stack",
    title: "Engine Intake Velocity Stack",
    shortTitle: "Engine Intake Velocity Stack",
    role: "Intake Design & Prototyping",
    contribution: {
      items: [
        "Worked through the intake theory and initial hand calculations used to size the velocity-stack concept before CAD.",
        "Designed the intake geometry in CAD and iterated through two 3D-printed prototypes after identifying fit and tolerance problems on the first version.",
        "Worked through the intake-interface issue and used the second prototype to evaluate the effect of tighter tolerances and thermal expansion during engine testing.",
        "Used Hall-effect RPM measurement during testing that showed a 7.2% average torque increase across the measured range up to roughly 2,000 RPM."
      ]
    },
    keyMetrics: [
      { value: "5%", label: "Original target" },
      { value: "7.2%", label: "Average torque increase" },
      { value: "~2,000 RPM", label: "Tested range" },
      { value: "2", label: "Printed prototypes" }
    ],
    category: "Engines",
    subtitle: "Helmholtz-tuned, 3D-printed intake for a Predator 79 cc engine.",
    summary: "Designed and 3D-printed an intake velocity stack as part of a team project that achieved a 7.2% average torque increase during testing.",
    tags: [
      "CAD",
      "Intake Tuning",
      "3D Printing",
      "Prototype Testing"
    ],
    featured: true,
    heroImage: {
      src: "images/velocity-stack/velocity-stack-installed.jpg",
      alt: "3D-printed intake velocity stack installed on a Predator 79 cc engine",
      caption: "Velocity-stack prototype installed on the Predator 79 cc engine for testing."
    },
    sections: [
      {
        type: "chapter",
        mediaFolder: "project-media/velocity-stack/01-concept",
        eyebrow: "01",
        title: "Intake Concept",
        body: [
          "The idea was not just to make a smoother funnel for the intake. I wanted the shape and length of the stack to actually help get more air into the engine.",
          "The bellmouth was there to reduce the losses as air entered the intake. From there, I looked at the intake as a pressure-wave problem too. Inertial charging helps keep the air moving into the cylinder, while Helmholtz-type resonance can create a positive pressure wave near the intake event if the runner length is in the right range."
        ],
        bodyAfterMedia: [
          "The target we set was a 5% improvement. I worked through the initial geometry and hand calculations before moving into CAD, then used those numbers as the starting point instead of just guessing at the runner length."
        ],
        mediaOverrides: {
          "01-initial-intake-hand-calculations": {
            caption: "Initial Intake Hand Calculations",
            description: "Initial hand calculations used to size the velocity-stack concept before moving into CAD.",
            alt: "Initial Intake Hand Calculations"
          }
        }
      },
      {
        type: "chapter",
        mediaFolder: "project-media/velocity-stack/02-cad",
        eyebrow: "02",
        title: "Prototype Development",
        body: [
          "The first prototype took about 18 hours to print and the print itself came out successfully. The problem showed up when we tried to put it on the engine.",
          "The intake side was too large, so the fit was loose even after we tried using a makeshift O-ring to help seal it. The stack was also physically larger than it needed to be."
        ],
        mediaFit: "contain",
        images: [
          {
            src: "images/velocity-stack/velocity-stack-cad.png",
            alt: "CAD model of the intake velocity stack designed for the Predator 79 cc engine",
            caption: "Intake CAD developed around engine-packaging and manufacturing constraints."
          }
        ],
        bodyAfterMedia: [
          "For the second version, I shortened the design and tightened the tolerance around the engine intake. That version fit much better and was easier to manufacture.",
          "The second prototype also taught me that tighter is not automatically better. After running the engine, the metal intake heated up and expanded slightly. The dimensional change was tiny, but it was enough that the velocity stack took noticeably more effort to remove after testing than it did when the engine was cold.",
          "If I made another version, I would leave a little more intentional clearance and design around a compliant O-ring instead of relying on a very tight plastic-to-metal fit."
        ]
      },
      {
        type: "chapter",
        mediaFolder: "project-media/velocity-stack/03-testing",
        eyebrow: "03",
        title: "Testing & Result",
        body: [
          "Once the second prototype fit correctly, we mounted it to the Predator engine and used a Hall-effect sensor to keep track of RPM during testing.",
          "We tested the engine up to roughly 2,000 RPM. Across the measured range, the final intake produced a 7.2% average torque increase."
        ],
        images: [
          {
            src: "images/velocity-stack/velocity-stack-installed.jpg",
            alt: "3D-printed intake velocity stack installed on a Predator 79 cc engine",
            caption: "Velocity-stack prototype installed on the Predator 79 cc engine for testing."
          }
        ],
        bodyAfterMedia: [
          "Our original target was 5%, so the prototype beat the goal. Just as important for me, the project went from calculations, to CAD, to a physical part, and then to an actual measured result instead of stopping once the part looked good on the engine."
        ],
        mediaOverrides: {
          "01-installed-velocity-stack": {
            caption: "Final velocity-stack prototype installed on the Predator 79 cc engine for testing.",
            alt: "Final velocity-stack prototype installed on the Predator 79 cc engine for testing."
          },
          "02-engine-project-presentation-group": {
            caption: "Presenting the completed engine-intake project in the engineering building.",
            alt: "Presenting the completed engine-intake project in the engineering building."
          },
          "03-engine-project-presentation-group": {
            caption: "Project group with the completed engine-intake presentation.",
            alt: "Project group with the completed engine-intake presentation."
          },
          "velocity stack presentation solo pic": {
            caption: "Presenting the completed engine-intake project in the engineering building.",
            alt: "Presenting the completed engine-intake project in the engineering building."
          },
          "velocity stack presentation group pic": {
            caption: "Project group with the completed engine-intake presentation.",
            alt: "Project group with the completed engine-intake presentation."
          }
        }
      }
    ],
    overview: [
      "The goal of the intake project was pretty simple: get at least a 5% improvement out of the Predator 79 cc engine without changing the engine itself.",
      "The final velocity stack ended up producing a 7.2% average torque increase across the RPM range we tested."
    ]
  },
  {
    slug: "go-kart",
    title: "Go-Kart",
    cardMediaFolder: "project-media/go-kart/01-concept",
    cardPreferredBasename: "01-original-kart-concept",
    role: "Personal Project",
    category: "Personal Projects",
    subtitle: "The go-kart is still in the early concept stage.",
    summary: "I currently have two retired H-E-B shopping carts that I plan to cut apart and use as the starting structure for the chassis.",
    tags: [
      "Chassis Concept",
      "CAD"
    ],
    sections: [
      {
        type: "chapter",
        mediaFolder: "project-media/go-kart/01-concept",
        eyebrow: "01",
        title: "Concept",
        body: [
          "The go-kart is still very early in development, so I do not want to make the page look more finished than the project actually is.",
          "Right now I have two retired H-E-B shopping carts that I plan to cut apart and use as the starting point for the chassis. The current idea is to bolt usable sections together instead of welding the cart frames."
        ],
        bodyAfterMedia: [
          "The cart geometry makes weld preparation difficult, and I still do not have verified material information for the carts, so I am not making claims about the exact alloy or how well it would weld.",
          "For now I am working through the overall kart layout and how the two carts could become one usable frame. I have some early full-kart concepts, but the drivetrain, steering, braking, and final chassis design are not finished yet."
        ],
        mediaOverrides: {
          "01-original-kart-concept": {
            caption: "Original Go-Kart Concept",
            description: "This was the first design I came up with after talking with my friends. We originally assumed we would weld the chassis and buy the engine, braking system, and wheel kit.\n\nCost became a problem pretty quickly, especially once we looked at what welding the chassis would actually take. After I wrote this first concept and talked through it with the group, we also decided to include suspension and move toward a smaller engine.",
            alt: "Original Go-Kart Concept"
          },
          "02-kart-concept": {
            caption: "Alternative Go-Kart Concept",
            alt: "Alternative Go-Kart Concept"
          },
          "03-kart-concept": {
            caption: "Alternative Go-Kart Concept",
            alt: "Alternative Go-Kart Concept"
          },
          "04-kart-concept": {
            caption: "Alternative Go-Kart Concept",
            alt: "Alternative Go-Kart Concept"
          },
          "01-overall-kart-concept": {
            caption: "Early overall go-kart concept.",
            alt: "Early overall go-kart concept."
          },
          "02-overall-kart-concept": {
            caption: "Alternative early overall go-kart concept.",
            alt: "Alternative early overall go-kart concept."
          }
        }
      }
    ],
    status: "In Development"
  }
]

const projectPriority = ['baja-sae-chassis', 'react-mission', 'velocity-stack', 'dragster', 'go-kart', 'engine-rebuild']
projects.sort((a, b) => {
  const aIndex = projectPriority.indexOf(a.slug)
  const bIndex = projectPriority.indexOf(b.slug)
  return (aIndex < 0 ? projectPriority.length : aIndex) - (bIndex < 0 ? projectPriority.length : bIndex)
})

export const findProject = (slug: string) => projects.find((project) => project.slug === slug)
