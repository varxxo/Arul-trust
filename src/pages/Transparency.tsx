import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Transparency = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Transparency & Accountability</h1>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We believe in complete transparency regarding how donations are used to support our educational initiatives.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Annual Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our annual reports detail our impact, financial statements, and progress toward our educational goals.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Impact Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We track and report on key metrics including students reached, scholarships awarded, and educational outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transparency;