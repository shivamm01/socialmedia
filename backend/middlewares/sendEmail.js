const nodeMailer = require("nodemailer")


exports.sendEmail = async (options) => {
    // const tranporter = nodeMailer.createTransport({

        // host:process.env.SMPT_HOST,
        // port:process.env.SMPT_PORT,
        // auth:{
        //     user:process.env.SMPT_MAIL,
        //     pass:process.env.SMPT_PASSWORD
        // },
        // service:process.env.SMPT_SERVICE,
    //  )}

        var tranporter = nodeMailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "36fb1b3c854bc5",
              pass: "6d447c5ef1fd63"
            }
          })
    




    const mailOptions = {
        from :process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message
    }

    await tranporter.sendMail(mailOptions)
}