import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Our Commitment to Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                At ArulEducation Trust, we are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as when you make a donation, contact us, or sign up for our newsletter.
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">How We Use Your Information</h3>
              <p>
                We use your information to process donations, communicate with you, and improve our services.
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at info@aruleducation.in.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;