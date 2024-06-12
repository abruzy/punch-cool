export const steps = [
  {
    step: 'Step 1',
    title: 'Resume Screening',
    description:
      'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
  },
  {
    step: 'Step 2',
    title: 'Video Interview',
    description:
      'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
  },
  {
    step: 'Step 3',
    title: 'Technical Evaluation',
    description:
      'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
  },
  {
    step: 'Step 4',
    title: 'Application Review',
    description:
      'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
  },
  {
    step: 'Step 5',
    title: 'Lets get to work',
    description:
      'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
  }
]

export const journeySteps = [
  {
    imgSrc: '/assets/one.svg',
    imgAlt: 'one',
    title: 'Find your next star performer.',
    description:
      'Explore the vast Zwilt marketplace to find the candidate that meets your needs.',
    bgColor: 'bg-pewter',
    imgProfileSrc: '/assets/team-profile.svg',
    imgProfileAlt: 'team-profile'
  },
  {
    imgSrc: '/assets/two.svg',
    imgAlt: 'two',
    title: 'Evaluate to your heart’s content.',
    description:
      'Assess the candidate through work history, transparent tests and video interviews.',
    bgColor: 'bg-orange-2',
    imgProfileSrc: '/assets/team2.jpeg',
    imgProfileAlt: 'team2'
  },
  {
    imgSrc: '/assets/three.svg',
    imgAlt: 'three',
    title: 'Start building your team.',
    description:
      'Onboard your candidate right away and start creating the next big thing.',
    bgColor: 'bg-white-2',
    imgProfileSrc: '/assets/team3.svg',
    imgProfileAlt: 'team3'
  }
]

export const whyChooseData = [
  {
    imgSrc: '/assets/onboard.svg',
    imgAlt: 'onboarding',
    title: (
      <>
        Onboard without <br className='md:block hidden' /> the risk.
      </>
    ),
    details: [
      'We pick the best for you to select.',
      'Thousands of vetted candidates in dozens of categories.',
      'Risk-free resource swapping for the best fit.'
    ]
  },
  {
    imgSrc: '/assets/image2.svg',
    imgAlt: 'image2',
    title: (
      <>
        An open <br className='md:block hidden' /> book.
      </>
    ),
    details: [
      'Easy and transparent one-to-one chat with candidates.',
      'Simple and convenient payment methods.',
      'Review past ratings.'
    ]
  },
  {
    imgSrc: '/assets/image3.svg',
    imgAlt: 'image3',
    title: (
      <>
        Stay in the <br className='md:block hidden' /> loop.
      </>
    ),
    details: [
      'Track your staff activity down to every minute with screenshots.',
      'Comprehensive timesheet data to process payments.',
      'Create projects to organize and assign tasks more effectively.'
    ]
  }
]

export const sections = [
  {
    description: 'Find Dev and IT professionals to scale your business.',
    stats: [
      { icon: '/assets/medal.svg', alt: 'medals', text: '989 Skills' },
      { icon: '/assets/box.svg', alt: 'box', text: '45 Sub-Categories' },
      { icon: '/assets/avatar.svg', alt: 'avatar', text: '1011 Profiles' }
    ],
    categoryTitle: 'IT & Development',
    items: [
      {
        icon: '/assets/shopify.svg',
        alt: 'shopify',
        text: 'Shopify Developer'
      },
      {
        icon: '/assets/magneto.svg',
        alt: 'magneto',
        text: 'Magento Developer'
      },
      {
        icon: '/assets/data.svg',
        alt: 'data scientist',
        text: 'Data Scientist'
      },
      {
        icon: '/assets/webflow.svg',
        alt: 'webflow',
        text: 'Webflow Developer'
      },
      { icon: '/assets/dotnet.svg', alt: 'dotnet', text: 'Dot Net Developer' }
    ],
    arrow: { icon: '/assets/forward.svg', alt: 'forward-arrow' }
  },
  {
    description: 'Explore Creative individuals with a keen eye for detail.',
    stats: [
      { icon: '/assets/medal.svg', alt: 'medals', text: '989 Skills' },
      { icon: '/assets/box.svg', alt: 'box', text: '45 Sub-Categories' },
      { icon: '/assets/avatar.svg', alt: 'avatar', text: '1011 Profiles' }
    ],
    categoryTitle: 'Design & Creative',
    items: [
      {
        icon: '/assets/ux.svg',
        alt: 'UX',
        text: (
          <>
            UX <br /> Designer
          </>
        )
      },
      { icon: '/assets/adobe.svg', alt: 'adobe', text: 'Graphics Designer' },
      {
        icon: '/assets/illusai.svg',
        alt: 'illusai',
        text: 'Illustration Artist'
      },
      { icon: '/assets/unreal.svg', alt: 'unreal', text: 'Unreal Engine' },
      {
        icon: '/assets/cinema.svg',
        alt: 'cinema',
        text: (
          <>
            Cinema <br /> 4D
          </>
        )
      }
    ],
    arrowLast: { icon: '/assets/backward.svg', alt: 'backward' }
  }
]

export const tabs = ['IT & Development', 'Design and Creative']

export const jobData = [
  {
    category: 'IT & Development',
    jobs: [
      [
        { title: 'Python Developer' },
        { title: 'Shopify Developer' },
        { title: 'MERN Stack Developer', highlight: true },
        { title: 'Full Stack Developer' }
      ],
      [
        { title: 'Data Scientist' },
        { title: 'Front End Developer' },
        { title: 'Shopify Developer' },
        { title: 'Python Developer' }
      ],
      [
        { title: 'Shopify Developer' },
        { title: 'Python Developer' },
        { title: 'Full Stack Developer' },
        { title: 'Explore More', highlight: true }
      ]
    ]
  },
  {
    category: 'Design and Creative',
    jobs: [
      [
        { title: 'Graphic Designer' },
        { title: 'UI/UX Designer' },
        { title: 'Illustrator', highlight: true },
        { title: 'Video Editor' }
      ],
      [
        { title: 'Motion Graphics Designer' },
        { title: '3D Animator' },
        { title: 'UI/UX Designer' },
        { title: 'Graphic Designer' }
      ],
      [
        { title: 'UI/UX Designer' },
        { title: 'Graphic Designer' },
        { title: 'Video Editor' },
        { title: 'Explore More', highlight: true }
      ]
    ]
  }
]
