import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { transactionId } = req.body;

    const url = `${process.env.NEXT_PUBLIC_PHONEPE_API_URL}/status/${process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID}/${transactionId}`;
    const checksum = crypto
      .createHmac('sha256', process.env.NEXT_PUBLIC_PHONEPE_API_KEY)
      .update(`${url}${process.env.NEXT_PUBLIC_PHONEPE_API_KEY_INDEX}`)
      .digest('base64');

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': `${checksum}###${process.env.NEXT_PUBLIC_PHONEPE_API_KEY_INDEX}`,
        },
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to verify payment status' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
