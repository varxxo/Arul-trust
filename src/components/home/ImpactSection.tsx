import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, BookOpen, Lightbulb, Globe, Heart } from "lucide-react";
import studentsImage from "@/assets/students-success.jpg";
import libraryImage from "@/assets/library-study.jpg";
import partnershipImage from "@/assets/partnership.jpg";

const ImpactSection = () => {
  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Scholarship Programs",
      description: "Providing financial assistance to deserving students from underprivileged backgrounds to pursue higher education.",
      impact: "5,000+ scholarships awarded",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Teacher Training",
      description: "Empowering educators with modern teaching methodologies and digital literacy skills.",
      impact: "2,500+ teachers trained",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: BookOpen,
      title: "Digital Libraries",
      description: "Establishing digital learning centers in rural areas to bridge the technology gap.",
      impact: "150+ libraries established",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description: "Vocational training programs to enhance employability and entrepreneurship.",
      impact: "10,000+ individuals skilled",
      color: "text-trust-gold",
      bgColor: "bg-trust-gold/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Impact Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Through strategic initiatives and community partnerships, we're creating lasting change 
            in education across India.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 card-shadow">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${area.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <area.icon className={`w-8 h-8 ${area.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{area.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{area.description}</p>
                <div className={`text-lg font-semibold ${area.color}`}>{area.impact}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Story */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={studentsImage}
                  alt="Students celebrating success"
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Success Story: From Village to University</h3>
                  <p className="text-gray-200 mb-4">
                    How Priya, a farmer's daughter from rural Tamil Nadu, achieved her dream of becoming an engineer 
                    through our scholarship program.
                  </p>
                  <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Side Stories */}
          <div className="space-y-6">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img
                  src={libraryImage}
                  alt="Digital library initiative"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-lg font-bold mb-1">Digital Revolution in Rural Schools</h4>
                  <p className="text-sm text-gray-200">Bringing technology to remote areas</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img
                  src={partnershipImage}
                  alt="Partnership building"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-lg font-bold mb-1">Building Strategic Partnerships</h4>
                  <p className="text-sm text-gray-200">Collaborating for greater impact</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Global Impact */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 lg:p-12 text-white text-center">
          <Globe className="w-16 h-16 mx-auto mb-6 text-trust-gold animate-float" />
          <h3 className="text-3xl font-bold mb-4">Our Reach Across India</h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            From the mountains of Himachal Pradesh to the coastal regions of Kerala, 
            our educational initiatives span across 15 states, touching lives in both urban and rural communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-trust-gold">15</div>
              <div className="text-sm text-primary-foreground/80">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trust-gold">500+</div>
              <div className="text-sm text-primary-foreground/80">Communities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trust-gold">25+</div>
              <div className="text-sm text-primary-foreground/80">Partner Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trust-gold">100%</div>
              <div className="text-sm text-primary-foreground/80">Transparency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;