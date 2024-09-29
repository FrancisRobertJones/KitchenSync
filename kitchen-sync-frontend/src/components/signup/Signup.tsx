import { Button } from "../ui/button"

export const SignUp = ({ onSignUp }: { onSignUp: () => void }) => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Meal Planning?</h2>
        <p className="mb-8">Join 10,000+ users planning meals together</p>
        <Button onClick={onSignUp}  size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
          Sign Up with Auth0
        </Button>
      </div>
    </section>
  )
}