const PORTFOLIO_DATA = {

  // ---------------------------------------------------------
  // PROFILE — sidebar identity + status card
  // ---------------------------------------------------------
  profile: {
    name: "Gopika Devi",
    initials: "GD",              
    avatarImage: "assets/Gopika-pp.JPEG",             

    // Rotates automatically in the sidebar under the name
    roles: [
      "Cloud Support Engineer",
      "AWS Solutions Architect — Associate",
      "AWS re/Start Graduate",
      "Python · boto3 · AWS CLI"
    ],

    status: {
      availability: "open to hire",
      location: "Dubai, UAE — GMT+4",
      noticePeriod: "immediate",
      responseTime: "< 24h"
    },

    email: "gopikadeviga@gmail.com",
    linkedin: "https://linkedin.com/in/gopikadevi",
    github: "https://github.com/gopikadeviga",

    resumePath: "assets/Gopika_Devi_CloudSupportEngineer.pdf"
  },

  // ---------------------------------------------------------
  // HERO — top of the page
  // ---------------------------------------------------------
  hero: {
    kicker: "AWS Certified · SAA-C03 · CLF-C02",
    headline: "Cloud infrastructure, built and verified",
    lede: "A software developer background, redirected into AWS. Every project below was deployed with a real AWS account, tested under failure, and torn down responsibly — from a Multi-AZ three-tier web app with a live database failover, to a defense-in-depth secure application with keyless admin access. Looking for a Cloud Support or Junior Cloud Engineer seat to grow into Solutions Architect."
  },
  skills: [
    {
      name: "Networking & Compute",
      proof: "VPC · subnets · NAT Gateway · EC2 · Auto Scaling · ALB · security groups"
    },
    {
      name: "Serverless & Data",
      proof: "Lambda · API Gateway · DynamoDB · RDS (Multi-AZ) · S3 · CloudFront"
    },
    {
      name: "Security & Identity",
      proof: "IAM least-privilege · AWS WAF · SSM Session Manager · Origin Access Control"
    },
    {
      name: "Observability & Ops",
      proof: "CloudWatch · VPC Flow Logs · AWS Config · AWS Backup"
    },
    {
      name: "Languages & Tooling",
      proof: "Python (boto3) · SQL · Git · AWS CLI · JavaScript fundamentals"
    }
  ],
  
  projects: [
    {
      title: "Highly Available Three-Tier Web Application",
      description: "Custom 2-AZ VPC with six subnets, an Auto Scaling EC2 tier behind a multi-AZ ALB, and a live RDS Multi-AZ failover drill — recovery under 2 minutes, zero data loss. ASG self-healing confirmed by terminating a running instance.",
      tags: ["VPC", "EC2 ASG", "ALB", "RDS Multi-AZ", "CloudFront"],
      links: [
        { label: "GitHub", url: "https://github.com/gopikadeviga/aws-ha-3tier-webapp" }
      ]
    },
    {
      title: "SecureCart — Secure Multi-Tier Web Application",
      description: "Internet-isolated architecture with layered security groups, AWS WAF rules against SQL injection and XSS, and keyless admin access via SSM Session Manager. Database isolation verified through live connectivity testing.",
      tags: ["Defense-in-depth", "AWS WAF", "SSM Session Manager", "Encrypted RDS"],
      links: [
        { label: "GitHub", url: "https://github.com/gopikadeviga/securecart-aws-security-pillar" }
      ]
    },
    {
      title: "Serverless Contact Form API",
      description: "Fully serverless backend on API Gateway, Lambda, and DynamoDB — zero server management. Least-privilege IAM roles scoped per function, with request handling validated end to end.",
      tags: ["API Gateway", "Lambda", "DynamoDB"],
      links: [
        { label: "GitHub", url: "https://github.com/gopikadeviga/aws-serverless-contact-form-project" }
      ]
    },
    {
      title: "Image Labels Generator (Amazon Rekognition)",
      description: "Python/boto3 CLI tool that runs Rekognition label detection on S3-stored images, printing confidence scores and drawing bounding boxes. IAM user scoped to only DetectLabels and GetObject on the target bucket.",
      tags: ["Python · boto3", "Rekognition", "S3"],
      links: [
        { label: "GitHub", url: "https://github.com/gopikadeviga/rekognition-image-labels" }
      ]
    },
    {
      title: "Daily Task Scheduler (PartyRock / Bedrock)",
      description: "No-code generative-AI app on Amazon PartyRock that turns a task list into a prioritized, time-blocked schedule with a conversational adjustment chatbot — built through prompt engineering and widget design.",
      tags: ["Amazon Bedrock", "PartyRock", "Prompt engineering"],
      links: [
        { label: "GitHub", url: "https://github.com/gopikadeviga/daily-task-scheduler-partyrock" }
      ]
    }
  ],

  // ---------------------------------------------------------
  // CERTIFICATIONS — filter type "cert"
  // ---------------------------------------------------------
  certifications: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle: "SAA-C03 · Issued February 2026",
      image: "assets/badges/aws-certified-solutions-architect-associate.png",
      tags: ["Architecture", "Well-Architected"],
      links: [ { label: "Verify", url: "https://www.credly.com/badges/df5cae2c-bdc7-4179-9996-db1c07c7a000/public_url" } ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "CLF-C02 · Issued December 2024",
      image: "assets/badges/aws-certified-cloud-practitioner.png",
      tags: ["Foundations", "Billing & Security"],
      links: [ { label: "Verify", url: "https://www.credly.com/badges/76ea7534-a952-4e42-8d40-d25a59c6cd6d/public_url" } ]
    },
    {
      title: "AWS re/Start Graduate",
      subtitle: "Completed July 2024 — intensive, full-time cloud training and job-readiness program.",
      image: "assets/badges/aws-re-start-graduate.png",
      tags: ["Cloud Fundamentals"],
      links: [ { label: "Verify", url: "https://www.credly.com/badges/279c0520-cc2e-4adb-94dd-eb513fdca391/public_url" } ]
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      subtitle: "Badge earned May 2024 — hands-on, gamified cloud practitioner skill track.",
      image: "assets/badges/aws-cloud-quest-cloud-practitioner-training-badge.png",
      tags: ["Hands-on Labs"],
      links: [ { label: "Verify", url: "https://www.credly.com/badges/62a1c21c-6719-4569-b209-471507fa081a/public_url" } ]
    }
  ],

  // ---------------------------------------------------------
  // JOURNEY — free-text paragraphs, rendered in order
  // ---------------------------------------------------------
  journey: {
    kicker: "Background",
    title: "The two-year pivot",
    paragraphs: [
      "I stepped away from a full-stack and SAP ABAP development track for a two-year career break. I used that time deliberately: completing <strong>AWS re/Start</strong>, earning both the <strong>Cloud Practitioner</strong> and <strong>Solutions Architect – Associate</strong> certifications, and building the projects above from a blank AWS account — not tutorials I copied, but architectures I broke, monitored, and fixed myself.",
      "What carried over from development is a comfort with Python, Git, and the command line that most entry-level cloud candidates don't have. What's new is the infrastructure layer: VPCs, IAM boundaries, and the instinct to check CloudWatch before I panic."
    ]
  },

  // ---------------------------------------------------------
  // CONTACT — its own section/page, not just footer links
  // ---------------------------------------------------------
  contact: {
    kicker: "Get in touch",
    title: "Let's talk cloud roles",
    intro: "Open to Cloud Support and Junior Cloud Engineer roles in Dubai and remote-friendly teams. Immediate joiner, UAE residence visa already in hand — no sponsorship delay."
  },

  // ---------------------------------------------------------
  // FOOTER
  // ---------------------------------------------------------
  footer: {
    copyrightLine: "© 2026 Gopika Devi · Dubai, UAE"
  }
};

// IMPORTANT: `const` declarations do not automatically become window
// properties (unlike `var`). main.js reads window.PORTFOLIO_DATA, so
// this line is required — don't remove it.
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
