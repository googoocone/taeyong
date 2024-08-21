// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, message } = req.body;
    console.log('hi')
    console.log('ss',process.env.EMAIL_USER)
    // 이메일 전송을 위한 nodemailer 설정
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Gmail 사용
      auth: {
        user: process.env.EMAIL_USER, // 환경 변수로 설정된 이메일 사용자
        pass: process.env.EMAIL_PASS, // 환경 변수로 설정된 이메일 비밀번호
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // 보낸 사람 주소
      to: 'snu910501@naver.com', // 받는 사람 이메일 주소 (여기서 변경 가능)
      subject: '상담 신청 내역',
      text: `성함: ${name}\n연락처: ${phone}\n문의 내용: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: '이메일 전송 성공' });
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      res.status(500).json({ message: '이메일 전송 실패', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
