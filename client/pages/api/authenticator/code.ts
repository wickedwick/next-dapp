import { NextApiRequest, NextApiResponse } from 'next';

export default function authenticatorCodeHandler(req: NextApiRequest, res: NextApiResponse) {
  const verifiedCode: string = 'CywjEdYmbMQ4Q3wr'
  const code = req.body.code as string

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }
  
  if (code === verifiedCode) {
    res.status(200).json({ message: 'Verified' })
  } else {
    res.status(400).json({ error: `Supplied verification code is invalid.` })
  }
}
