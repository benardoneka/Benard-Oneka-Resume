export const profile = {
  name: 'Benard Oneka',
  title: 'Software Developer | ICT Professional',
  email: 'benardoneka@gmail.com',
  phone: '+256 756 980 838',
  phoneHref: 'tel:+256756980838',
  linkedin: 'www.linkedin.com/in/benard-oneka-9024001a1',
  linkedinHref: 'https://www.linkedin.com/in/benard-oneka-9024001a1',
  resumePath: '/benard-oneka-resume.pdf',
  summary:
    'Software Developer and ICT Professional with over 10 years of experience delivering technology solutions across healthcare, education, and business environments. Proven expertise in software development, ICT support, systems implementation, technical training, sales administration, and stakeholder engagement. Demonstrated success increasing donor funding by 40% through improved ICT capacity building and contributing to 80% sales revenue growth through effective sales administration.
}

export const highlights = [
  { value: '10+', label: 'Years delivering technology solutions' },
  { value: '40%', label: 'Increase in donor funding through ICT initiatives' },
  { value: '80%', label: 'Increase in company sales revenue I contributed to' },
  { value: '79', label: 'Online students mentored' },
]

export const techStack = [
  'Node.js',
  'JavaScript',
  'HTML',
  'Python',
  'CSS',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
]

export const competencies = [
  'Software Development',
  'Technical Support',
  'Systems Implementation',
  'Microsoft Office / Graphic Designs',
  'Database Management',
  'Leadership',
  'Project Coordination',
  'Training & Mentorship',
  'Communication',
  'Problem Solving',
  'Networking',
  'Group Policy',
]

export type Job = {
  role: string
  organization: string
  period: string
  points: string[]
}

export const experience: Job[] = [
  {
    role: 'Missionary Operations & Logistics Coordinator (Contract Vendor)',
    organization: 'The Church of Jesus Christ of Latter-day Saints',
    period: '2023 – To-date',
    points: [
      'Coordinated airport arrivals and departures for missionaries, ensuring seamless travel logistics.',
      'Managed missionary utilities, medical expenses, and operational bills while maintaining accurate financial records.',
      'Processed police clearance documentation and ensured compliance with organizational and local requirements.',
      'Coordinated maintenance and repair services for missionary apartments across Uganda, ensuring safe and well-maintained accommodations.',
    ],
  },
  {
    role: 'Peer Mentor',
    organization: 'Bloom',
    period: 'Sep 2022 – Mar 2024',
    points: [
      'Mentored and supported 79 online students through Zoom, email, WhatsApp, phone, and messaging platforms, improving student engagement and retention.',
      'Resolved technical and academic challenges, enabling students to remain on track toward successful course completion.',
      'Developed individualized success plans that strengthened persistence, matriculation, and program completion.',
      'Maintained accurate documentation of student interactions to support timely follow-up and service quality.',
    ],
  },
  {
    role: 'Volunteer Coordinator',
    organization: 'University Student Centre (Kansanga University Gate)',
    period: '2021 – 2023',
    points: [
      'Oversaw the daily operations of the student center, ensuring effective service delivery, accurate attendance records, and a welcoming environment for students.',
      'Promoted the center by mobilizing university students and the surrounding community, while planning and facilitating educational and spiritual engagement activities, including firesides and leadership visits.',
      "Managed the center's technology resources by installing required software, coordinating computer maintenance, debugging internet connectivity, and ensuring technology was available to support students' academic work.",
      'Designed promotional materials and collaborated with Church leaders to secure printing and other operational support despite limited resources.',
      'Prepared weekly operational reports for the Area Seventy and local Bishop to support planning, decision-making, and continuous improvement.',
      'Worked closely with Church leaders, volunteers, and students to coordinate activities, strengthen center operations, and enhance the overall student experience.',
    ],
  },
  {
    role: 'Sales Administrator',
    organization: 'Africa Power and Equipment Ltd',
    period: 'Jan 2017 – Aug 2019',
    points: [
      'Coordinated customer orders, invoicing, logistics, and sales administration while maintaining high data accuracy.',
      'Contributed to an 80% increase in company sales revenue through efficient sales coordination and customer relationship management.',
      'Prepared monthly sales reports and organized performance review meetings that supported informed business decisions.',
      'Managed customer records and responded promptly to client inquiries, improving customer satisfaction.',
    ],
  },
  {
    role: 'Sub-Contractor',
    organization: 'Vambeco Enterprises Limited',
    period: 'Jan 2015 – Oct 2016',
    points: [
      'Worked on civil and construction activities for two major projects: Jinja Central Market and the Nyarwodho Large Gravity Flow Scheme (GFS) in Nebbi District.',
      'Oversaw finishing works at Jinja Central Market, including plastering, surface preparation and finishing of reinforced concrete columns.',
      'Supervised more than 40 workers at Jinja Central Market, making sure work was done properly, safety requirements were followed and activities stayed on schedule.',
      'Supervised over 60 technicians and labourers on the Nyarwodho GFS project, coordinating trench excavation, pipe bedding and installation of the main water transmission pipeline along the Nebbi–Pakwach route.',
    ],
  },
  {
    role: 'Assistant ICT Officer',
    organization: 'Health Child Uganda',
    period: 'Feb 2008 – Dec 2014',
    points: [
      'Designed and delivered ICT training programs for staff, health workers, and community members, improving digital literacy.',
      'Introduced ICT initiatives that contributed to a 40% increase in donor funding by strengthening reporting quality and data management.',
      'Provided organization-wide technical support and maintained computer systems across multiple offices.',
      'Developed training materials and supported technology integration for health education programs.',
      'Formatted hardware components and prepared them for desktop operating systems.',
      'Installed and configured desktop operating systems, including installation of other software applications.',
      'Troubleshot desktops, hardware, basic network components, printers, VPN, and vendor coordination.',
      'Set up enterprise log in, and supported database entry and research.',
    ],
  },
  {
    role: 'Full-Time Missionary',
    organization: 'Zimbabwe Harare Mission | The Church of Jesus Christ of Latter-day Saints',
    period: 'Sep 2003 – Sep 2005',
    points: [
      'Taught the restored gospel of Jesus Christ across Zimbabwe, Zambia, Malawi, and South Africa.',
      'Led and mentored a team of 30 missionaries, fostering teamwork, accountability, and personal growth.',
      'Coordinated missionary operations, training, and strategic planning to achieve mission objectives.',
      'Collaborated with local church leaders to strengthen community relationships and support church programs.',
      'Prepared and presented weekly performance reports to the Mission President, highlighting progress, achievements, and operational challenges.',
    ],
  },
]

export const education = [
  { credential: 'Bachelor of Science in Applied Technology', type: 'Degree' },
  { credential: 'Associate in Applied Technology', type: 'Degree' },
  { credential: 'Certificate Web Development', type: 'Certificate' },
  { credential: 'Certificate Web Frontend', type: 'Certificate' },
  { credential: 'Certificate Computer Programming', type: 'Certificate' },
  { credential: 'Certificate BYU-Pathway', type: 'Certificate' },
]

export const institution = 'Brigham Young University–Idaho'
