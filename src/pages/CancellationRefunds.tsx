import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RefreshCw, Shield, Mail, Clock } from "lucide-react";
import { useSEO } from "@/lib/seo";

const CancellationRefunds = () => {
  useSEO({
    title: 'Cancellation & Refunds',
    description: 'Cancellation and refund policy for donations and purchases at Arul Education.',
    canonical: 'https://example.com/cancellation-refunds',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cancellation & Refunds",
      "description": "Cancellation and refund policy for donations and purchases at Arul Education."
    }
  });
  return (
    <Layout>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl text-center mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">Cancellation & Refunds</h1>
            <p className="text-lg text-muted-foreground">
              We want you to be satisfied with every contribution. Below is our cancellation and refund policy for donations and purchases made through this website.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Donations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    All donations are generally non-refundable. If you believe your transaction was made in error or you need assistance,
                    please contact us within 7 days and we will review your request on a case-by-case basis.
                  </p>
                  <p>
                    For donation reversals due to payment gateway errors, we will work with the payment provider to resolve the issue
                    and, if appropriate, issue a refund.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Merchandise & Purchases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    For physical goods or event tickets purchased through this site, cancellations and refunds are handled according to the
                    product or event terms shown at checkout. If you need to request a refund, contact us with your order number.
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Requests received within 14 days of purchase will be reviewed for eligibility.</li>
                    <li>Refunds may take 5-10 business days to appear on your statement depending on your bank.</li>
                    <li>Shipping fees are non-refundable unless the item is defective or the return is our responsibility.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">How to Request a Refund</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>To request a refund, please email our support team with the following details:</p>
                  <ul className="list-disc pl-6">
                    <li>Order or transaction ID</li>
                    <li>Date of transaction</li>
                    <li>Reason for refund</li>
                    <li>Preferred contact email or phone</li>
                  </ul>
                  <p>
                    Email: <a className="text-primary" href="mailto:info@aruleducation.in">info@aruleducation.in</a>
                  </p>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="w-6 h-6 text-secondary" />
                    <h3 className="font-bold text-primary">Processing Time</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Refunds are processed within 5-10 business days after approval.</p>
                </CardContent>
              </Card>

              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-trust-gold" />
                    <h3 className="font-bold text-primary">Safe & Secure</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">We never store your payment card details. All transactions are handled by trusted payment providers.</p>
                </CardContent>
              </Card>

              <Card className="card-shadow border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-3">Need help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">Contact our support team for assistance with refunds or cancellations.</p>
                  <Button asChild>
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CancellationRefunds;
