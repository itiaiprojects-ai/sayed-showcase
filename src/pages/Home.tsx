import { Hero } from "@/components/sections/hero"
import { SkillsGrid } from "@/components/sections/skills-grid"
import { ExperienceTimeline } from "@/components/sections/experience-timeline"
import { ProjectsPreview } from "@/components/sections/projects-preview"

export default function Home() {
  return (
    <div>
      <Hero />
      <SkillsGrid />
      <ExperienceTimeline />
      <ProjectsPreview />
    </div>
  )
}