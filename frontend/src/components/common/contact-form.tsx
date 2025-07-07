"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const contactFormSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const [result, setResult] =
    useState<{ success: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setResult({ success: true, message: "Message sent successfully!" });
        form.reset();
      } else {
        const data = await res.json();
        setResult({
          success: false,
          message: data.error || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error(error);
      setResult({ success: false, message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send me an email</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="How can I help you?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {result && (
              <div>
                <span
                  className={`text-sm ${
                    result.success ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {result.message}
                </span>
              </div>
            )}

            <Button type="submit" disabled={loading}>
              <Send className="w-4 h-4 mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
