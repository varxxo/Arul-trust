import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Terms and Conditions</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                By using ArulEducation Trust's website and services, you agree to these terms and conditions.
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Use of Services</h3>
              <p>
                You may use our services for lawful purposes only and in accordance with these terms.
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Donations</h3>
              <p>
                All donations are processed securely and are non-refundable unless required by law.
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Contact Information</h3>
              <p>
                For questions about these terms, contact us at info@aruleducation.in.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;