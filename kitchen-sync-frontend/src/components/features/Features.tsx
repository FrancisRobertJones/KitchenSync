import { Brain, Calendar, Smartphone, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export const Features = () => {
    const features = [
      { icon: <Users className="h-10 w-10" />, title: 'Real-Time Collaboration', description: 'Interact with shopping lists and meal plans simultaneously' },
      { icon: <Calendar className="h-10 w-10" />, title: 'Smart Meal Plans', description: 'Plan your weeks meals together' },
      { icon: <Brain className="h-10 w-10" />, title: 'AI Recipe Generator', description: 'Generate recipes based on available ingredients' },
      { icon: <Smartphone className="h-10 w-10" />, title: 'Multi-Device Sync', description: 'Keep your lists and plans up-to-date across all devices' },
    ]
  
    return (
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground p-3 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }