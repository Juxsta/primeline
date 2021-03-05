const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENGRID_API_KEY)

export const sendEmail = async ({ name, from, message }) => {
  const msg = {
    to: ' ericsreyes0808@outlook.com',
    from: 'ericjrreyes2@gmail.com',
    subject: 'Primeline Website Quote Campaign',
    text: `<div><strong>from:${from}</strong></div><div>name:${name}</div><div>${message}</div>`,
  }
  const val = await sgMail
    .send(msg)
    .then((res) => {
      console.log(res)
      return true
    })
    .catch(() => false)
  return {
    success: val,
  }
}
