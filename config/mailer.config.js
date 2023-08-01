require("dotenv").config()
const nodemailer = require("nodemailer")
const {getMaxListeners} = require("process")

const user = process.env.NM_USER

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: process.env.NM_PASS,
  },
})

module.exports.sendFormEmail = (name, lastname, email, phone, country, city, cv) => {
  transport.sendMail({
    to: email,
    from: `Página Leti Formulario <${user}>`,
    subject: "Página Leti Formulario Trabaja con Nosotros",
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to VICTS activation</title>
        <style
          type="text/css"
          style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%"
        >
          table {
            color: #fff;
          }

          .banner {
            height: 425px;
          }

          h2 {
            text-transform: uppercase;
          }
    
          @media (max-width: 570px) {
            table {
              width: 95%;
            }
          }
        </style>
      </head>
      <body
        width="100%"
        style="
          margin: 0 !important;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          width: 100% !important;
          mso-table-lspace: 0pt !important;
          mso-table-rspace: 0pt !important;
          background:#1d1a2e;
          padding: 60px 0;
        "
      >
      
        <table cellpading="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="800"
                  align="center"
                  style="border: solid 2px #fece07; border-radius: 24px; overflow: hidden;"
                >
                <tr>
                <td class="banner"></td>
                </tr>
                  <tr>
                    <td style="padding-bottom: 60px;">
                      <h4>${name} ${lastname}</h4>
                      <h4>¡Está interesado en formar parte de GRUPO LETI!</h4>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="padding-top: 60px">
                      <strong>Teléfono</strong> ${phone}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p style="padding-top: 60px">
                      <strong>País</strong> ${country}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p style="padding-top: 60px">
                      <strong>Ciudad</strong> ${city}
                      </p>
                    </td>
                  </tr>


                  <tr>
                    <td>
                      <p style="padding-top: 60px">
                      <strong><a href=${cv}></a></strong>
                      </p>
                    </td>
                  </tr>
                </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
		`,
  })
}