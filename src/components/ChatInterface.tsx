"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const commonPrompts = [
  {
    title: "Write a to-do list for a personal project or task",
    icon: "👋",
  },
  {
    title: "Generate an email to reply to a job offer",
    icon: "📧",
  },
  {
    title: "Summarise this article or text for me in one paragraph",
    icon: "📝",
  },
  {
    title: "How does AI work in a technical capacity",
    icon: "🤖",
  },
];

export function ChatInterface() {
  const [input, setInput] = useState("");

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-8 p-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Hi there, <span className="text-primary">John</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            What would you like to know?
          </p>
          <p className="text-sm text-muted-foreground">
            Use one of the most common prompts below or use your own to begin
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commonPrompts.map((prompt) => (
            <Button
              key={prompt.title}
              variant="outline"
              className="h-auto flex-col items-start gap-2 p-4 text-left"
              onClick={() => setInput(prompt.title)}
            >
              <div className="text-2xl">{prompt.icon}</div>
              <p className="text-sm">{prompt.title}</p>
            </Button>
          ))}
        </div>
      </div>

      <div className="border-t p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle submission
          }}
          className="flex gap-4"
        >
          <Input
            placeholder="Ask whatever you want..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
