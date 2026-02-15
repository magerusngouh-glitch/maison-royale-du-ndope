import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderConfirmation({
  to,
  orderNumber,
  customerName,
  items,
  total,
}: {
  to: string;
  orderNumber: string;
  customerName: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
}) {
  const itemsHtml = items
    .map(
      (item) => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${item.price.toLocaleString()} XAF</td>
    </tr>
  `
    )
    .join('');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Poppins', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1E2A44; color: #C8A24D; padding: 30px; text-align: center; }
          .content { padding: 30px; background: #fff; }
          .footer { background: #F5F1E8; padding: 20px; text-align: center; font-size: 14px; color: #666; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          .total { font-size: 18px; font-weight: bold; color: #1E2A44; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-family: 'Playfair Display', serif;">Maison Royale du Ndop</h1>
            <p style="margin: 10px 0 0 0;">L'élégance née du patrimoine</p>
          </div>
          
          <div class="content">
            <h2 style="color: #1E2A44;">Confirmation de commande</h2>
            <p>Bonjour ${customerName},</p>
            <p>Nous vous remercions pour votre commande. Voici le récapitulatif :</p>
            
            <p><strong>Numéro de commande :</strong> ${orderNumber}</p>
            
            <table>
              <thead>
                <tr style="background: #F5F1E8;">
                  <th style="padding: 10px; text-align: left;">Produit</th>
                  <th style="padding: 10px; text-align: center;">Quantité</th>
                  <th style="padding: 10px; text-align: right;">Prix</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" style="padding: 15px; text-align: right;"><strong>Total :</strong></td>
                  <td style="padding: 15px; text-align: right;" class="total">${total.toLocaleString()} XAF</td>
                </tr>
              </tfoot>
            </table>
            
            <p>Nous préparons votre commande avec soin. Vous recevrez un email de confirmation d'expédition dès que votre colis sera prêt.</p>
            
            <p>Pour toute question, n'hésitez pas à nous contacter via WhatsApp au <a href="https://wa.me/237678841257">+237 678 841 257</a>.</p>
            
            <p style="margin-top: 30px;">Cordialement,<br><strong>L'équipe Maison Royale du Ndop</strong></p>
          </div>
          
          <div class="footer">
            <p>Maison Royale du Ndop - Dschang, Cameroun</p>
            <p>WhatsApp: +237 678 841 257</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return resend.emails.send({
    from: 'Maison Royale du Ndop <noreply@maisonroyalendop.com>',
    to,
    subject: `Confirmation de commande #${orderNumber}`,
    html,
  });
}

export { resend };
