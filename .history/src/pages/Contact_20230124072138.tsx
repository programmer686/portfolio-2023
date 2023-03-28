import sgMail from "@sendgrid/mail"

export default function Contact() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: 'programmer686@gmail.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}