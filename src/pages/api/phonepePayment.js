import crypto from 'crypto';
import generateToken from '@/utils/generateToken';

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

    const stringToHash = `${base64Payload}/pg/v1/pay/${process.env.NEXT_PUBLIC_PHONEPE_API_KEY}`;

    const checksum = crypto.createHash('sha256').update(stringToHash).digest('hex');

    const xVerify = `${checksum}###${process.env.NEXT_PUBLIC_PHONEPE_API_KEY_INDEX}`;

    const raw = JSON.stringify({
      request: base64Payload,
    });
    const authToken = generateToken();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PHONEPE_API_URL}/pg/v1/pay`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
          'X-VERIFY': xVerify,
        },
        body: raw,
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Payment initiation failed:', error);
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
