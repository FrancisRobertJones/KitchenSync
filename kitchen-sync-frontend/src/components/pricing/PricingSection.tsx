import { Switch } from "@radix-ui/react-switch"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

export const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false)
    const plans = [
      { name: 'Basic', price: isYearly ? 99 : 9.99, features: ['Real-time collaboration', 'Smart meal planning', 'Multi-device sync'] },
      { name: 'Pro', price: isYearly ? 199 : 19.99, features: ['All Basic features', 'AI recipe generation', 'Advanced analytics', 'Priority support'] },
      { name: 'Enterprise', price: 'Custom', features: ['All Pro features', 'Custom integrations', 'Dedicated account manager', 'On-premise deployment option'] },
    ]
  
    return (
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="flex justify-center items-center mb-8">
            <span className={`mr-2 ${isYearly ? 'text-muted-foreground' : ''}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`ml-2 ${isYearly ? '' : 'text-muted-foreground'}`}>Yearly</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`flex flex-col ${index === 1 ? 'border-primary' : ''}`}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    {typeof plan.price === 'number' ? (
                      <span className="text-3xl font-bold">${plan.price}{isYearly ? '/year' : '/month'}</span>
                    ) : (
                      <span className="text-3xl font-bold">{plan.price}</span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{index === 2 ? 'Contact Sales' : 'Get Started'}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }