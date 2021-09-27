const sgMail=require('@sendgrid/mail')

const dotenv=require('dotenv');

dotenv.config({path:'.../config.env'})
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const welcomeMail=(email,name) => {
    sgMail.send({
        to:email,
        from: 'vermashefali17@gmail.com',
        subject: 'Welcome',
        text: `Hello ${name}, Glad to have you with us!!`
    })

}
const updateMail=(email,name) => {
    sgMail.send({
        to:email,
        from: 'vermashefali17@gmail.com',
        subject: 'Updated',
        text: `Hello ${name}, Your records have been updated!!`
    })

}
 
module.exports={
    welcomeMail,
    updateMail
}