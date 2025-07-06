"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {Send} from "lucide-react"
import {useState} from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<null | { success: boolean; message: string }>(null)
  const [invalidFields, setInvalidFields] = useState<{ [key: string]: string }>({})

  // Enhanced client-side validation
  const validateForm = () => {
    const errors: { [key: string]: string } = {}
    if (!form.firstName.trim()) errors.firstName = "First name is required."
    if (!form.lastName.trim()) errors.lastName = "Last name is required."
    if (!form.email.trim()) errors.email = "Email is required."
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = "Invalid email address."
    if (!form.subject.trim()) errors.subject = "Subject is required."
    if (!form.message.trim()) errors.message = "Message is required."
    return errors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
    setInvalidFields((prev) => ({...prev, [e.target.name]: ""})) // Clear error on change
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setResult(null)
    const errors = validateForm()
    setInvalidFields(errors)
    if (Object.keys(errors).length > 0) {
      setResult({success: false, message: "Please correct the highlighted fields."})
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setResult({success: true, message: "Message sent successfully!"})
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: ""
        })
        setInvalidFields({})
      } else {
        const data = await res.json()
        setResult({success: false, message: data?.error || "Failed to send message."})
      }
    } catch (err) {
      console.error("Error sending message:", err)
      setResult({success: false, message: "Network error. Please try again."})
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              I&#39;d love to hear from you. Send me a message and I&#39;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Card>
          <CardHeader>
            <CardTitle>Send me a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="John" value={form.firstName}
                         onChange={handleChange}
                         className={invalidFields.firstName ? "border-red-500 focus-visible:ring-red-500" : ""}/>
                  {invalidFields.firstName && <span className="text-xs text-red-600">{invalidFields.firstName}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Doe" value={form.lastName}
                         onChange={handleChange}
                         className={invalidFields.lastName ? "border-red-500 focus-visible:ring-red-500" : ""}/>
                  {invalidFields.lastName && <span className="text-xs text-red-600">{invalidFields.lastName}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com"
                       value={form.email} onChange={handleChange}
                       className={invalidFields.email ? "border-red-500 focus-visible:ring-red-500" : ""}/>
                {invalidFields.email && <span className="text-xs text-red-600">{invalidFields.email}</span>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" name="phone" placeholder="33 612345678" value={form.phone}
                         onChange={handleChange}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" name="company" placeholder="Acme Inc." value={form.company}
                         onChange={handleChange}/>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="How can I help you?" value={form.subject}
                       onChange={handleChange}
                       className={invalidFields.subject ? "border-red-500 focus-visible:ring-red-500" : ""}/>
                {invalidFields.subject && <span className="text-xs text-red-600">{invalidFields.subject}</span>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell me more about your inquiry..."
                          className={`min-h-[120px] ${invalidFields.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                          value={form.message} onChange={handleChange}/>
                {invalidFields.message && <span className="text-xs text-red-600">{invalidFields.message}</span>}
              </div>

              <div className="flex items-center gap-4">
                <Button type="submit" className="w-full md:w-auto" disabled={loading}>
                  <Send className="w-4 h-4 mr-2"/>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {result && (
                  <span className={`text-sm font-medium ${result.success ? "text-green-600" : "text-red-600"}`}>
                                        {result.message}
                                    </span>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
