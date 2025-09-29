import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Building2,
  Users,
  Calendar,
  MessageSquare,
  Heart
} from "lucide-react";
import { useSEO } from "@/lib/seo";

const Contact = () => {
  useSEO({ title: 'Contact Us', description: 'Contact Arul Education Trust for partnerships, donations, and support.' });
  const contactInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      details: [
        "123 Education Street",
        "Anna Nagar, Chennai",
        "Tamil Nadu 600001, India"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91-9876543210 (General)",
        "+91-9876543211 (Programs)",
        "+91-9876543212 (Partnerships)"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@aruleducation.in",
        "programs@aruleducation.in",
        "partnerships@aruleducation.in"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ],
      color: "text-trust-gold",
      bgColor: "bg-trust-gold/10"
    }
  ];

  const offices = [
    {
      city: "Chennai",
      type: "Headquarters",
      address: "123 Education Street, Anna Nagar",
      phone: "+91-9876543210",
      email: "chennai@aruleducation.in"
    },
    {
      city: "Bangalore",
      type: "Regional Office",
      address: "456 Tech Park, Electronic City",
      phone: "+91-9876543220",
      email: "bangalore@aruleducation.in"
    },
    {
      city: "Mumbai",
      type: "Regional Office",
      address: "789 Business District, Bandra Kurla",
      phone: "+91-9876543230",
      email: "mumbai@aruleducation.in"
    },
    {
      city: "Delhi",
      type: "Regional Office",
      address: "321 Connaught Place, New Delhi",
      phone: "+91-9876543240",
      email: "delhi@aruleducation.in"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white text-center mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="hero-text bg-gradient-to-r from-trust-gold to-white bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-8">
              We'd love to hear from you. Get in touch with our team to learn more about our programs, 
              partnerships, or how you can make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're interested in partnering with us, volunteering, or learning more about our impact, 
              we're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center card-shadow border-0 group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${info.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <MessageSquare className="w-6 h-6" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="volunteer">Volunteer Application</SelectItem>
                        <SelectItem value="donation">Donation Related</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="default" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Info */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="donate" className="w-full justify-start" asChild>
                    <Link to="/donate">
                      <Heart className="w-5 h-5 mr-3" />
                      Donate Now
                    </Link>
                  </Button>
                  <Button variant="default" className="w-full justify-start">
                    <Building2 className="w-5 h-5 mr-3" />
                    Explore Partnerships
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule a Meeting
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Education Street, Chennai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Our Offices</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have offices across major cities in India to better serve our communities and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="card-shadow border-0 group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-secondary">{office.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{office.city}</h3>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-secondary" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            For urgent matters or time-sensitive inquiries, please contact our emergency helpline.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Phone className="w-5 h-5" />
              Emergency Helpline: +91-9876543299
            </div>
            <div className="text-sm text-primary-foreground/80">
              Available 24/7 for urgent matters
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;