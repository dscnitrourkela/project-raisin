import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, orderId, callbackUrl } = req.body;

    const payload = {
      merchantId: process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID,
      amount: amount,
      merchantTransactionId: orderId,
      redirectUrl: callbackUrl,
      redirectMode: 'REDIRECT',
      callbackUrl: callbackUrl,
      paymentInstrument: {
        type: 'PAY_PAGE',
      },
    };

    const payloadString = JSON.stringify(payload);
    const base64Payload = Buffer.from(payloadString).toString('base64');

    const checksum = crypto
      .createHmac('sha256', process.env.NEXT_PUBLIC_PHONEPE_API_KEY)
      .update(base64Payload + '/pg/v1/pay' + process.env.NEXT_PUBLIC_PHONEPE_API_KEY)
      .digest('base64');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PHONEPE_API_URL}/pg/v1/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': `${checksum}###${process.env.NEXT_PUBLIC_PHONEPE_API_KEY_INDEX}`,
        },
        body: payloadString,
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Payment initiation failed:', error);
      res.status(500).json({ error: 'Payment initiation failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
