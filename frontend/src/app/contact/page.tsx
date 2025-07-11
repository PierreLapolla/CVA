"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Check, Copy, Github, Linkedin, Mail} from "lucide-react";
import {ContactInfoCard} from "@/components/common/contact-info-card";
import {ContactForm} from "@/components/common/contact-form";
import {SocialLink} from "@/components/common/social-link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText("pro@pierrelapolla.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Call to action */}
      <div className="flex items-center pt-16 pb-8">
        <div className="container mx-auto px-4 w-full">
          <Card className="w-full flex flex-col items-center justify-center p-10">
            <CardHeader className="w-full flex flex-col items-center">
              <CardTitle>
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-center">Get in touch</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center">
              <p className="text-xl text-muted-foreground text-center">
                I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column: stacked cards */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Email card */}
            <ContactInfoCard
              title="Contact me at"
              contentClassName="relative"
            >
              <div className="flex items-center">
                <SocialLink
                  href="mailto:pro@pierrelapolla.com"
                  icon={Mail}
                  label="pro@pierrelapolla.com"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={copyToClipboard}
                  aria-label="Copy email to clipboard"
                  className="w-9 h-9 flex items-center justify-center hover:bg-accent focus-visible:bg-accent group absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {/* Label affiché à gauche au survol */}
                  <span className="absolute right-full mr-2 px-2 py-1 rounded bg-muted text-xs text-muted-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pointer-events-none">
                    Copy
                  </span>
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500"/>
                  ) : (
                    <Copy className="w-4 h-4"/>
                  )}
                </Button>
              </div>
            </ContactInfoCard>
            {/* Social media card */}
            <ContactInfoCard
              title="Find me on social media"
              contentClassName="flex flex-col space-y-4"
            >
              <div className="flex items-center gap-3">
                <SocialLink
                  href="https://github.com/PierreLapolla"
                  icon={Github}
                  label="GitHub"
                />
              </div>
              <div className="flex items-center gap-3">
                <SocialLink
                  href="https://www.linkedin.com/in/pierrelapolla"
                  icon={Linkedin}
                  label="LinkedIn"
                />
              </div>
            </ContactInfoCard>
          </div>

          {/* Right column: contact form */}
          <div className="flex-1">
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
