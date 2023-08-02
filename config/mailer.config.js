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
    to: process.env.NM_USER,
    from: email,
    subject: "GRUPO LETI | Formulario Trabaja con Nosotros",
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Formulario Trabaja con Nosotros</title>
        <style
          type="text/css"
          style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%"
        >
          table {
            color: #333;
          }

          .banner {    
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
          }

          .banner img {
            width: 180px;
            height: auto;
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
          background:#fff;
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
                  style="border-bottom: solid 2px #CD202F; border-top: solid 2px #CD202F; overflow: hidden; padding: 20px;"
                >
                <tr>
                <td class="banner">
                <img src="https://firebasestorage.googleapis.com/v0/b/grupoleti.appspot.com/o/images%2Fgrupoleti.png?alt=media&token=68cf1f79-3a60-4eb9-8b61-0524e91d9d3c" alt="logo GRUPO LETI"/>
                </td>
                </tr>
                  <tr>
                    <td>
                      <h4>${name} ${lastname}</h4>
                      <h4>¡Está interesado en formar parte de GRUPO LETI!</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                      <strong>Teléfono</strong> ${phone}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>
                      <strong>País</strong> ${country}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>
                      <strong>Ciudad</strong> ${city}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                      <strong><a href=${cv}>Ver currículum</a></strong>
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