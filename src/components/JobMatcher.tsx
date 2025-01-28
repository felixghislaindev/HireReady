"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const commonJobTitles = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "UX Designer",
];

export function JobMatcher() {
  const [jobDescription, setJobDescription] = useState("");

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-8 p-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Job Matcher</h1>
          <p className="text-xl text-muted-foreground">
            Paste a job description to compare with your profile
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commonJobTitles.map((title) => (
            <Button
              key={title}
              variant="outline"
              className="h-auto flex-col items-start gap-2 p-4 text-left"
              onClick={() => setJobDescription(`${title} job description...`)}
            >
              <p className="text-sm">{title}</p>
            </Button>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Skill Gap Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              After submitting a job description, your skill gaps and
              recommendations will appear here.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="border-t p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle job description analysis
          }}
          className="flex flex-col gap-4"
        >
          <Textarea
            placeholder="Paste job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="min-h-[100px]"
          />
          <Button type="submit" className="self-end">
            <Send className="mr-2 h-4 w-4" />
            Analyze Job Description
          </Button>
        </form>
      </div>
    </div>
  );
}
