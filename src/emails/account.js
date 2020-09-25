const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'contato@cardapios.app',
        subject: 'Thanks for joining us',
        text: `Hey ${name}, welcome to our app! Let us know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'contato@cardapios.app',
        subject: 'Good Bye',
        text: `Hey ${name}, you ok? We'd like to understand why you left us`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}