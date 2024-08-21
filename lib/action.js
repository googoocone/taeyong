'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_KEY,
  },
});

export const sendEmail = async (formData) => {
  try {
    const { name, number, consult } = Object.fromEntries(formData);

    await transporter.sendMail({
      from: process.env.GMAIL_USER, // 보내는 이메일
      to: 'helpsw@a-part.co.kr', // 받는 이메일
      subject: `문의하기: ${name}`,
      html: `<p>성함: ${name}</p><br/><p>연락처: ${number}</p><br /><p>문의 내용: ${consult}</p>`,
    });

    console.log('이메일 전송 성공');
    return { message: '이메일 전송 성공' };
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    throw new Error('이메일 전송 실패');
  }
};
