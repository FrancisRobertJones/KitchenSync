'use client'

import { RecipeSection } from '@/components/recipes/RecipeSection'
import HeroSection from '@/components/hero/heroSection'
import { TestimonialSection } from '@/components/testimonials/Testimonials'
import { Features } from '@/components/features/Features'
import Planning from '@/components/planning/Planning'
/* import { SignUp } from '@/components/signup/Signup'
 */

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <Features />
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Interactive Shopping List Demo</h2>
          <RecipeSection />
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <Planning />
        </div>
      </section>
      <TestimonialSection />
    </div>
  )
}