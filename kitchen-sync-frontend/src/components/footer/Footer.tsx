export const Footer = () => {
    return (
      <footer className="bg-background text-foreground py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">MealPlanner</h3>
            <p className="text-sm">Simplify meal planning with real-time collaboration</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Connect</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-md font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">Email: support@mealplanner.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-4 border-t border-muted-foreground/10 text-center text-sm">
          © 2024 MealPlanner. All rights reserved.
        </div>
      </footer>
    )
  }