import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Heart, 
  Users, 
  HandHeart, 
  Building2,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import DonationSection from "@/components/payment/DonationSection";

const GetInvolved = () => {
  const volunteerOpportunities = [
    {
      icon: Users,
      title: "Teaching & Mentoring",
      description: "Support students with tutoring, career guidance, and life skills development.",
      commitment: "4-6 hours per week",
      location: "Multiple locations",
      requirements: ["Bachelor's degree", "Good communication skills", "Background verification"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Building2,
      title: "Infrastructure Support",
      description: "Help with school renovation projects and facility improvements.",
      commitment: "Weekends",
      location: "Rural areas",
      requirements: ["Physical fitness", "Basic technical skills", "Team collaboration"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: HandHeart,
      title: "Community Outreach",
      description: "Organize awareness programs and community engagement activities.",
      commitment: "Flexible timing",
      location: "Urban & rural",
      requirements: ["Public speaking", "Cultural sensitivity", "Leadership qualities"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Plan and execute fundraising events, workshops, and educational programs.",
      commitment: "Project-based",
      location: "Various venues",
      requirements: ["Event planning experience", "Organizational skills", "Networking abilities"],
      color: "text-trust-gold",
      bgColor: "bg-trust-gold/10"
    }
  ];

  const partnershipTypes = [
    {
      title: "Corporate Partnerships",
      description: "Partner with us through CSR initiatives, employee volunteering, and skill-based programs.",
      benefits: [
        "Tax benefits under Section 80G",
        "Brand visibility and recognition",
        "Employee engagement opportunities",
        "Impact measurement and reporting"
      ]
    },
    {
      title: "Educational Institutions",
      description: "Collaborate with schools, colleges, and universities for student exchange and joint programs.",
      benefits: [
        "Research collaboration opportunities",
        "Student internship programs",
        "Faculty exchange initiatives",
        "Resource sharing agreements"
      ]
    },
    {
      title: "Government Partnerships",
      description: "Work with government bodies to scale educational initiatives and policy implementation.",
      benefits: [
        "Policy advocacy opportunities",
        "Scaled implementation",
        "Regulatory support",
        "Access to government schemes"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white text-center mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get <span className="hero-text bg-gradient-to-r from-trust-gold to-white bg-clip-text text-transparent">Involved</span>
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-8">
              Join our mission to transform education and create lasting impact in communities across India. 
              Every contribution, big or small, makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Ways to Make a Difference</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose how you'd like to contribute to our mission and become part of a community 
              dedicated to educational transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center card-shadow border-0 group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Donate</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Make a financial contribution to support our programs and directly impact students' lives.
                </p>
                <Button variant="donate" className="w-full" asChild>
                  <Link to="/donate">
                    Start Donating
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center card-shadow border-0 group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Volunteer</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Contribute your time and skills to mentor students and support our educational initiatives.
                </p>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => document.getElementById('volunteer-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join as Volunteer
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center card-shadow border-0 group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Partner</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Collaborate with us through corporate partnerships, institutional alliances, or government initiatives.
                </p>
                <Button 
                  variant="impact" 
                  className="w-full"
                  onClick={() => document.getElementById('partnership-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Partnerships
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="volunteer-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Volunteer Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect way to contribute your skills and make a meaningful impact 
              in the lives of students and communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="card-shadow border-0 group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${opportunity.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <opportunity.icon className={`w-6 h-6 ${opportunity.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-primary mb-2">{opportunity.title}</CardTitle>
                      <p className="text-muted-foreground">{opportunity.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>{opportunity.commitment}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{opportunity.location}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-2">Requirements:</h4>
                    <div className="space-y-1">
                      {opportunity.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-accent" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Volunteer Application Form */}
          <Card className="max-w-2xl mx-auto card-shadow border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Volunteer Application</CardTitle>
              <p className="text-muted-foreground">Join our community of changemakers</p>
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
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <Label htmlFor="interest">Area of Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teaching">Teaching & Mentoring</SelectItem>
                    <SelectItem value="infrastructure">Infrastructure Support</SelectItem>
                    <SelectItem value="outreach">Community Outreach</SelectItem>
                    <SelectItem value="events">Event Management</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="availability">Availability</Label>
                <Textarea id="availability" placeholder="Tell us about your availability and time commitment" />
              </div>
              
              <div>
                <Label htmlFor="experience">Relevant Experience</Label>
                <Textarea id="experience" placeholder="Share any relevant experience or skills" />
              </div>
              
              <Button variant="default" size="lg" className="w-full">
                Submit Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section id="partnership-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with us to amplify your impact and create sustainable change in education.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <Card key={index} className="card-shadow border-0 group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{partnership.title}</CardTitle>
                  <p className="text-muted-foreground">{partnership.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-primary mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <DonationSection />
    </Layout>
  );
};

export default GetInvolved;