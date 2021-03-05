const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(
  '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'
)

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
