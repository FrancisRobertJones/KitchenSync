'use client'


import { useAuth0 } from '@auth0/auth0-react'
import { RecipeSection } from '@/components/recipes/RecipeSection'
import HeroSection from '@/components/hero/heroSection'
import { TestimonialSection } from '@/components/testimonials/Testimonials'
import { PricingSection } from '@/components/pricing/PricingSection'
import { Features } from '@/components/features/Features'
import Planning from '@/components/planning/Planning'
import { SignUp } from '@/components/signup/Signup'


export default function LandingPage() {
  const { loginWithRedirect } = useAuth0()

  const handleGetStarted = () => {
    loginWithRedirect()
  }

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
      <PricingSection />
      <SignUp onSignUp={handleGetStarted} />
    </div>
  )
}