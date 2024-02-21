const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const mail = async (to, subject, message) => {
  const info = await transporter.sendMail({
    from: '"Me" <saurav130giri@gmail.com>',
    to,
    subject,
    // plain text body
    html: `<b>${message}</b>`, // html body
  });
  return info.messageId;
};

module.exports = { mail };
