import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChatBox } from "@/components/ChatBox";
import Link from "next/link";

const features = [
  {
    title: "Analyze Job Description",
    description: "Compare a job posting to your profile and get insights",
    href: "/job-matcher",
    icon: "🔍",
  },
  {
    title: "Company Research",
    description: "Get detailed insights on companies you're interested in",
    href: "/company-insights",
    icon: "🏢",
  },
  {
    title: "Skill Gap Analysis",
    description: "Identify areas for improvement in your skillset",
    href: "/profile",
    icon: "📊",
  },
  {
    title: "Interview Prep",
    description: "Access role-specific interview questions and resources",
    href: "/resources",
    icon: "🎓",
  },
];

export default function Dashboard() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-8 p-8 pb-20">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to <span className="text-purple-600">HireReady</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your AI-powered job hunting assistant
          </p>
          <p className="text-sm text-muted-foreground">
            Choose a feature below to get started
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-secondary">
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                  className="w-full h-full flex flex-col items-start gap-2 p-4 text-left hover:text-purple-600"
                  asChild
                >
                  <Link href={feature.href}>
                    <div className="text-2xl">{feature.icon}</div>
                    <h2 className="font-semibold">{feature.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ChatBox />
    </div>
  );
}
