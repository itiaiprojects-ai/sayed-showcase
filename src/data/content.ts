export const personalInfo = {
  name: "Ahmed Sayed",
  headline: "Cloud & Systems Engineer | Azure • AWS • Windows Server • Linux | Virtualization & Containers | Instructor",
  bio: "I'm Ahmed Sayed, an IT professional specializing in Cloud technologies (Azure & AWS), Windows Server administration (Active Directory, DNS, DHCP, File Services), and Linux systems (Red Hat, Ubuntu, Kali). With extensive experience in virtualization platforms such as VMware, Hyper-V, and Proxmox, as well as containerization with Docker, I design and manage secure, scalable, and efficient IT infrastructures.\n\nAlongside my technical expertise, I'm passionate about teaching and mentoring. As a freelancing instructor, I guide students and professionals on how to leverage their skills to succeed in today's digital economy. My approach combines hands-on training with real-world applications, empowering learners to build careers with confidence.",
  email: "ahmed.sayed@example.com",
  linkedin: "https://linkedin.com/in/ahmed-sayed",
  github: "https://github.com/ahmed-sayed",
  twitter: "https://x.com/ahmed_sayed"
}

export const skills = {
  "Cloud Platforms": [
    { name: "Microsoft Azure", level: "Expert" },
    { name: "Amazon AWS", level: "Advanced" },
    { name: "Azure Active Directory", level: "Expert" },
    { name: "AWS IAM", level: "Advanced" }
  ],
  "Windows Server": [
    { name: "Active Directory Domain Services", level: "Expert" },
    { name: "DNS & DHCP", level: "Expert" },
    { name: "Group Policy Management", level: "Expert" },
    { name: "File Services & Storage", level: "Advanced" },
    { name: "Windows Server Core", level: "Advanced" }
  ],
  "Linux Systems": [
    { name: "Red Hat Enterprise Linux", level: "Advanced" },
    { name: "Ubuntu Server", level: "Advanced" },
    { name: "Kali Linux", level: "Intermediate" },
    { name: "Shell Scripting (Bash)", level: "Advanced" },
    { name: "System Administration", level: "Expert" }
  ],
  "Virtualization": [
    { name: "VMware vSphere", level: "Expert" },
    { name: "Microsoft Hyper-V", level: "Expert" },
    { name: "Proxmox VE", level: "Advanced" },
    { name: "VirtualBox", level: "Advanced" }
  ],
  "Containers & DevOps": [
    { name: "Docker", level: "Advanced" },
    { name: "Docker Compose", level: "Advanced" },
    { name: "PowerShell", level: "Expert" },
    { name: "Git", level: "Advanced" }
  ],
  "Networking & Security": [
    { name: "VLANs & Network Segmentation", level: "Advanced" },
    { name: "VPN Configuration", level: "Advanced" },
    { name: "Firewall Management", level: "Advanced" },
    { name: "Identity & Access Management", level: "Expert" },
    { name: "Network Troubleshooting", level: "Expert" }
  ]
}

export const experience = [
  {
    title: "Cloud & Systems Engineer",
    company: "Freelance / Contract",
    period: "2022 - Present",
    location: "Remote",
    description: "Specialized cloud infrastructure consulting and systems engineering services for various clients.",
    achievements: [
      "Designed and implemented hybrid Azure/AWS environments with secure VNET/VPC architectures for 15+ clients",
      "Successfully migrated 50+ on-premises workloads to cloud platforms, improving reliability by 99.9% uptime",
      "Automated server provisioning and patching processes for Windows/Linux fleets, reducing deployment time by 75%",
      "Implemented Infrastructure as Code (IaC) solutions using ARM templates and CloudFormation",
      "Established disaster recovery procedures with RTO < 4 hours and RPO < 1 hour"
    ]
  },
  {
    title: "Systems Administrator",
    company: "TechCorp Solutions",
    period: "2020 - 2022",
    location: "Cairo, Egypt",
    description: "Senior systems administrator responsible for enterprise Windows and Linux infrastructure.",
    achievements: [
      "Managed Active Directory environment for 500+ users across multiple domains and forests",
      "Implemented centralized DNS and DHCP services with 99.95% availability",
      "Deployed Group Policy framework reducing security incidents by 60%",
      "Established automated backup strategy with 100% recovery success rate",
      "Led VMware vSphere cluster deployment improving resource utilization by 40%"
    ]
  },
  {
    title: "IT Infrastructure Specialist",
    company: "Digital Innovations Ltd",
    period: "2018 - 2020",
    location: "Cairo, Egypt", 
    description: "Infrastructure specialist focusing on virtualization and cloud adoption.",
    achievements: [
      "Designed and deployed Hyper-V failover clusters for critical business applications",
      "Implemented Proxmox-based private cloud reducing hardware costs by 30%",
      "Established monitoring and alerting systems using open-source tools",
      "Provided Tier 3 support for complex infrastructure issues with 95% first-call resolution",
      "Mentored junior administrators and created comprehensive documentation"
    ]
  }
]

export const projects = [
  {
    title: "Secure Hybrid Cloud Landing Zone",
    description: "Enterprise-grade Azure landing zone implementation with advanced security controls and governance frameworks.",
    technologies: ["Azure", "Terraform", "Azure Sentinel", "PowerShell", "Azure Policy"],
    features: [
      "Multi-subscription architecture with hub-spoke topology",
      "Automated security policy enforcement with Azure Sentinel",
      "Identity governance with Privileged Identity Management",
      "Network security with Azure Firewall and NSGs",
      "Compliance reporting and cost management"
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/ahmed-sayed/azure-landing-zone",
    imageUrl: "/api/placeholder/600/400"
  },
  {
    title: "Self-Hosted Lab on Proxmox",
    description: "Complete homelab environment showcasing enterprise technologies in a self-hosted setup.",
    technologies: ["Proxmox VE", "pfSense", "Docker", "VLAN", "FreeNAS", "ELK Stack"],
    features: [
      "Proxmox cluster with high availability configuration",
      "Network segmentation with VLANs and pfSense firewall",
      "Containerized application stack with Docker Swarm",
      "Centralized logging with ELK stack",
      "Automated backup and monitoring solutions"
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/ahmed-sayed/proxmox-homelab",
    imageUrl: "/api/placeholder/600/400"
  },
  {
    title: "Containerized Monitoring Stack",
    description: "Production-ready monitoring and observability platform using modern open-source tools.",
    technologies: ["Docker Compose", "Prometheus", "Grafana", "Loki", "AlertManager", "Nginx"],
    features: [
      "Complete metrics collection with Prometheus",
      "Custom Grafana dashboards for infrastructure monitoring",
      "Log aggregation and analysis with Loki",
      "Intelligent alerting with AlertManager",
      "Reverse proxy with SSL termination"
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/ahmed-sayed/monitoring-stack",
    imageUrl: "/api/placeholder/600/400"
  }
]

export const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    year: "2023",
    logo: "/api/placeholder/100/100"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    issuer: "Amazon Web Services",
    year: "2023",
    logo: "/api/placeholder/100/100"
  },
  {
    name: "Red Hat Certified System Administrator",
    code: "RHCSA",
    issuer: "Red Hat",
    year: "2022",
    logo: "/api/placeholder/100/100"
  },
  {
    name: "CompTIA Security+",
    code: "SY0-601",
    issuer: "CompTIA",
    year: "2021",
    logo: "/api/placeholder/100/100"
  }
]

export const training = {
  topics: [
    "Azure Fundamentals & Administration",
    "AWS Essentials & Best Practices", 
    "Windows Server Administration",
    "Linux for System Administrators",
    "Docker & Containerization",
    "Virtualization with VMware & Hyper-V",
    "Network Security & Infrastructure",
    "Career Development in IT"
  ],
  formats: [
    "One-on-one mentoring sessions",
    "Small group workshops (3-5 participants)", 
    "Corporate training programs",
    "Online technical workshops",
    "Career coaching and resume optimization"
  ],
  outcomes: [
    "Hands-on lab exercises and real-world scenarios",
    "Career guidance and industry insights",
    "LinkedIn and resume optimization",
    "Technical skill assessment and roadmap",
    "Ongoing mentorship and support"
  ]
}

export const blogPosts = [
  {
    title: "Building Resilient Cloud Architectures: Lessons from the Field",
    excerpt: "Exploring best practices for designing fault-tolerant cloud infrastructure based on real-world implementations.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Azure", "AWS", "Architecture", "Best Practices"],
    slug: "building-resilient-cloud-architectures",
    published: true
  },
  {
    title: "The Complete Guide to Active Directory Security Hardening",
    excerpt: "A comprehensive walkthrough of securing your Active Directory environment against modern threats.",
    date: "2024-01-08",
    readTime: "12 min read",
    tags: ["Active Directory", "Security", "Windows Server"],
    slug: "active-directory-security-hardening",
    published: true
  },
  {
    title: "Docker in Production: Performance Optimization Strategies",
    excerpt: "Advanced techniques for optimizing Docker containers in production environments.",
    date: "2024-01-01",
    readTime: "10 min read",
    tags: ["Docker", "Performance", "DevOps"],
    slug: "docker-production-optimization",
    published: false
  }
]