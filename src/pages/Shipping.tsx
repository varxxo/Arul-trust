import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, CreditCard, Clock, MapPin } from "lucide-react";
import { useSEO } from "@/lib/seo";

const Shipping = () => {
  useSEO({ title: 'Shipping', description: 'Shipping timelines, costs and tracking for Arul Education merchandise.' });
  return (
    <Layout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Shipping</h1>
            <p className="text-lg text-muted-foreground">Information about shipping timelines, costs, and tracking for merchandise and materials.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Shipping Options</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-4">
                  <p>We offer standard and expedited shipping for physical products. Shipping costs are calculated at checkout based on weight and destination.</p>
                  <ul className="list-disc pl-6">
                    <li>Standard: 5–10 business days</li>
                    <li>Expedited: 2–4 business days</li>
                    <li>International shipping times vary by country</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Order Tracking</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-4">
                  <p>Once your item ships, you'll receive a confirmation email with tracking details. Use the tracking number provided to view delivery status.</p>
                  <p>If you have questions about an order, please contact our support team with your order number.</p>
                </CardContent>
              </Card>

              <Card className="card-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Delivery Areas & Restrictions</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-4">
                  <p>We ship to most regions within India. Some remote locations may incur additional delays or charges. Certain items may have restrictions for international shipment.</p>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck className="w-6 h-6 text-secondary" />
                    <h3 className="font-bold text-primary">Shipping Times</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Orders are typically processed within 1–2 business days.</p>
                </CardContent>
              </Card>

              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="font-bold text-primary">Address Accuracy</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Please ensure your shipping address is accurate to avoid delivery delays or returns.</p>
                </CardContent>
              </Card>

              <Card className="card-shadow border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-3">Need help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">Contact our support team for shipping inquiries.</p>
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

export default Shipping;
