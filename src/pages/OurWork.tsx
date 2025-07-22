import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Lightbulb, 
  Building2, 
  Laptop,
  ArrowRight,
  MapPin,
  Calendar,
  TrendingUp
} from "lucide-react";
import studentsImage from "@/assets/students-success.jpg";
import libraryImage from "@/assets/library-study.jpg";

const OurWork = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Scholarship Programs",
      description: "Comprehensive financial support for deserving students from economically disadvantaged backgrounds.",
      impact: "5,000+ students supported",
      beneficiaries: "50,000+ indirect beneficiaries",
      locations: "15 states across India",
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        "Full tuition coverage",
        "Living stipends",
        "Books and materials",
        "Mentorship support",
        "Career guidance"
      ]
    },
    {
      icon: Users,
      title: "Teacher Training & Development",
      description: "Empowering educators with modern pedagogical methods and digital literacy skills.",
      impact: "2,500+ teachers trained",
      beneficiaries: "125,000+ students reached",
      locations: "200+ training centers",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      features: [
        "Digital classroom training",
        "Curriculum development",
        "Assessment methodologies",
        "Child psychology",
        "Leadership skills"
      ]
    },
    {
      icon: BookOpen,
      title: "Digital Libraries & Learning Centers",
      description: "Establishing state-of-the-art digital learning facilities in underserved communities.",
      impact: "150+ centers established",
      beneficiaries: "75,000+ regular users",
      locations: "Rural and semi-urban areas",
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: [
        "High-speed internet",
        "Digital content library",
        "Online courses access",
        "Computer training",
        "Digital literacy programs"
      ]
    },
    {
      icon: Lightbulb,
      title: "Skill Development & Vocational Training",
      description: "Practical skill development programs to enhance employability and entrepreneurship.",
      impact: "10,000+ individuals skilled",
      beneficiaries: "30,000+ family members impacted",
      locations: "25+ skill centers",
      color: "text-trust-gold",
      bgColor: "bg-trust-gold/10",
      features: [
        "Technical certifications",
        "Soft skills training",
        "Entrepreneurship development",
        "Job placement assistance",
        "Industry partnerships"
      ]
    },
    {
      icon: Building2,
      title: "Infrastructure Development",
      description: "Building and upgrading educational infrastructure in government and community schools.",
      impact: "200+ schools upgraded",
      beneficiaries: "100,000+ students",
      locations: "Rural and tribal areas",
      color: "text-trust-green",
      bgColor: "bg-trust-green/10",
      features: [
        "Classroom construction",
        "Laboratory setup",
        "Library establishment",
        "Playground development",
        "Sanitation facilities"
      ]
    },
    {
      icon: Laptop,
      title: "Digital Literacy Initiative",
      description: "Bridging the digital divide through comprehensive computer and internet literacy programs.",
      impact: "25,000+ digitally literate",
      beneficiaries: "100,000+ community members",
      locations: "300+ villages",
      color: "text-primary-light",
      bgColor: "bg-primary-light/10",
      features: [
        "Basic computer skills",
        "Internet navigation",
        "Digital communication",
        "Online government services",
        "E-commerce basics"
      ]
    }
  ];

  const impactStories = [
    {
      title: "From Village to IIT: Ravi's Journey",
      location: "Jharkhand",
      image: studentsImage,
      summary: "How our scholarship program helped Ravi, a farmer's son, secure admission to IIT Mumbai and transform his family's future.",
      date: "March 2024",
      category: "Scholarship Success"
    },
    {
      title: "Digital Revolution in Sundarpur School",
      location: "Rajasthan",
      image: libraryImage,
      summary: "Complete transformation of a rural school through our digital library initiative, improving learning outcomes by 40%.",
      date: "February 2024",
      category: "Infrastructure"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-secondary opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="hero-text bg-gradient-to-r from-trust-gold to-white bg-clip-text text-transparent">Impact</span> Areas
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-8">
              Through strategic initiatives and community partnerships, we're creating lasting change 
              in education across India, one student at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="text-base px-4 py-2">15 States</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">200+ Schools</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">50K+ Students</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">15 Years Experience</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Our Key Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive educational initiatives designed to address various aspects of learning 
              and development across different age groups and communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="card-shadow border-0 group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${program.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <program.icon className={`w-8 h-8 ${program.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-primary mb-2">{program.title}</CardTitle>
                      <p className="text-muted-foreground">{program.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Impact Metrics */}
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="font-medium text-sm">{program.impact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{program.beneficiaries}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{program.locations}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-medium text-primary mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Impact Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories of transformation, hope, and success from the communities we serve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {impactStories.map((story, index) => (
              <Card key={index} className="overflow-hidden card-shadow border-0 group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{story.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-4 text-sm mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {story.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {story.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                    <p className="text-gray-200 text-sm">{story.summary}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg">
              View All Impact Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Together, we can create a world where quality education is accessible to every child, 
            regardless of their background or circumstances.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              Partner with Us
            </Button>
            <Button variant="secondary" size="xl">
              Volunteer Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurWork;