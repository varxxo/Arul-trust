const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4242;

app.use(cors());
// For webhook verification you need raw body. We only accept JSON for our simple endpoints.
app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.post('/api/razorpay/order', async (req, res) => {
  try {
    const { amount, currency = 'INR', donationType, paymentMethod } = req.body;
    if (!amount || amount <= 0) return res.status(400).send('Invalid amount');

    const options = {
      amount: amount,
      currency: currency,
      receipt: `donation_${Date.now()}`,
      payment_capture: 1
    };

    const order = await razorpay.orders.create(options);

    res.json({ orderId: order.id, amount: order.amount, currency: order.currency, keyId: process.env.RAZORPAY_KEY_ID });
  } catch (err) {
    console.error('Order creation error', err);
    res.status(500).send('Could not create order');
  }
});

app.post('/api/razorpay/verify', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).send('Missing parameters');
    }

    const generated_signature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');

    if (generated_signature === razorpay_signature) {
      // TODO: record donation in DB, send receipt email, etc.
      return res.send('ok');
    } else {
      return res.status(400).send('Invalid signature');
    }
  } catch (err) {
    console.error('Verification error', err);
    res.status(500).send('Verification failed');
  }
});

app.listen(PORT, () => {
  console.log(`Razorpay server listening on port ${PORT}`);
});
