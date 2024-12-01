<template>
  <section id="services" class="py-16 bg-background bg-muted">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">My expertise</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title"
          class="rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div class="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <component :is="service.icon" class="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p class="text-muted-foreground mb-4">{{ service.description }}</p>
          <ul class="space-y-2">
            <li v-for="(feature, index) in service.features" :key="index" class="flex items-start">
              <CheckIcon class="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  CheckIcon, LightbulbIcon, CodeIcon, TestTubeIcon, 
  RefreshCwIcon, WrenchIcon, ServerIcon, GitBranchIcon, 
  ActivityIcon, GraduationCapIcon, PackageIcon
} from 'lucide-vue-next';

const services = ref([
  {
    title: 'Idea Consultation',
    description: 'Discuss and refine your digital solution ideas.',
    icon: LightbulbIcon,
    features: [
      'Concept evaluation',
      'Feasibility analysis',
      'Technology stack recommendations',
      'Initial project scoping'
    ]
  },
  {
    title: 'Software Design',
    description: 'Create robust and scalable software architectures.',
    icon: PackageIcon,
    features: [
      'System architecture design',
      'Database schema design',
      'API design',
      'Software architecture'
    ]
  },
  {
    title: 'Software Development',
    description: 'Build high-quality, efficient software solutions.',
    icon: CodeIcon,
    features: [
      'Full-stack development',
      'Custom software development',
      'Integration with third-party services',
      'Code reviews and best practices'
    ]
  },
  {
    title: 'Software Testing',
    description: 'Ensure software quality and reliability.',
    icon: TestTubeIcon,
    features: [
      'Unit testing',
      'Integration testing',
      'Performance testing',
      'Automated testing setup'
    ]
  },
  {
    title: 'Software Enhancement',
    description: 'Improve and optimize existing software.',
    icon: RefreshCwIcon,
    features: [
      'Performance optimization',
      'Feature additions',
      'Code refactoring',
      'Scalability improvements'
    ]
  },
  {
    title: 'Legacy System Upgrades',
    description: 'Modernize and upgrade existing software systems.',
    icon: WrenchIcon,
    features: [
      'Technology stack modernization',
      'Code migration',
      'Database upgrades',
      'System integration'
    ]
  },
  {
    title: 'Software Maintenance',
    description: 'Provide ongoing support and maintenance for software systems.',
    icon: WrenchIcon,
    features: [
      'Bug fixing',
      'Security updates',
      'Performance monitoring',
      'Regular system health checks'
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Set up and manage production environments and CI/CD pipelines.',
    icon: ServerIcon,
    features: [
      'Cloud infrastructure setup',
      'Containerization with Docker',
      'Infrastructure as a Code',
      'CI/CD pipeline implementation'
    ]
  },
  {
    title: 'Version Control & Collaboration',
    description: 'Implement effective version control and team collaboration practices.',
    icon: GitBranchIcon,
    features: [
      'Git workflow setup',
      'Branching strategy implementation',
      'Code review processes',
      'Collaboration tool integration'
    ]
  },
  {
    title: 'Performance Benchmarking',
    description: 'Evaluate and optimize software and tool performance.',
    icon: ActivityIcon,
    features: [
      'Performance metrics definition',
      'Load testing',
      'Tool comparison and selection',
      'Performance optimization recommendations'
    ]
  },
  {
    title: 'Team Training & Support',
    description: 'Provide training and ongoing support for development teams.',
    icon: GraduationCapIcon,
    features: [
      'Technical skill workshops',
      'Best practices training',
      'Code quality guidelines',
      'Mentoring and knowledge transfer'
    ]
  }
]);
</script>