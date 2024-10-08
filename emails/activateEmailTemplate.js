export const activateEmailTemplate = (to, url) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="und">
   <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New Template</title><!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]--><!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"><!--<![endif]-->
    <style type="text/css">
  .rollover:hover .rollover-first {
    max-height:0px!important;
    display:none!important;
    }
    .rollover:hover .rollover-second {
    max-height:none!important;
    display:inline-block!important;
    }
    .rollover div {
    font-size:0px;
    }
    u + .body img ~ div div {
    display:none;
    }
    #outlook a {
    padding:0;
    }
    span.MsoHyperlink,
  span.MsoHyperlinkFollowed {
    color:inherit;
    mso-style-priority:99;
    }
    a.es-button {
    mso-style-priority:100!important;
    text-decoration:none!important;
    }
    a[x-apple-data-detectors] {
    color:inherit!important;
    text-decoration:none!important;
    font-size:inherit!important;
    font-family:inherit!important;
    font-weight:inherit!important;
    line-height:inherit!important;
    }
    .es-desk-hidden {
    display:none;
    float:left;
    overflow:hidden;
    width:0;
    max-height:0;
    line-height:0;
    mso-hide:all;
    }
    .es-button-border:hover > a.es-button {
    color:#666666!important;
    }
  @media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p20b { padding-bottom:20px!important } .es-m-p0r { padding-right:0px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:42px!important; text-align:center; line-height:120% } h2 { font-size:26px!important; text-align:center; line-height:120% } h3 { font-size:20px!important; text-align:center; line-height:120% } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:42px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:16px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } a.es-button, button.es-button { border-bottom-width:15px!important; border-top-width:15px!important } }
  </style>
   </head>
   <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="und" style="background-color:#FFFFFF"><!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ffffff"></v:fill>
        </v:background>
      <![endif]-->
     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
       <tr>
        <td valign="top" style="padding:0;Margin:0">
         <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
           <tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:700px">
               <tr>
                <td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-bottom:10px;padding-left:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:660px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="DEXY-CREATION.co.uk" style="mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:14px"><img class="adapt-img" src="https://eclafxw.stripocdn.email/content/guids/CABINET_97e6e9d4fc156f525924a481ccf0fb369e6f3d9116460781cf3d5aa0a7b34a9e/images/logo3.png" alt="DEXY-CREATION" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none" height="34" title="DEXY-CREATION"></a></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;font-size:0">
                         <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;font-size:0">
                         <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
           <tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:700px">
               <tr>
                <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:40px;padding-bottom:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:660px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://eclafxw.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png" alt="" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none" width="100"></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;font-family:Montserrat, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:36px;font-style:normal;font-weight:normal;line-height:43px;color:#333333">Verify your email to finish signing up</h2></td>
                       </tr>
                       <tr>
                        <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;font-size:0">
                         <table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:40% !important;display:inline-table">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                       <tr>
                        <td align="center" class="es-m-p0r" style="padding:0;Margin:0;padding-top:5px;padding-right:40px;padding-bottom:5px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:24px;letter-spacing:0;color:#333333;font-size:16px">Thank you for choosing Dexy-Creations.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:24px;letter-spacing:0;color:#333333;font-size:16px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:24px;letter-spacing:0;color:#333333;font-size:16px">Please confirm that <strong>${to}</strong> is your email address by clicking on the button below or use this link <a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;color:#134F5C;font-size:16px;word-break:break-all">${url}</a> within <strong>48 hours</strong>.</p></td>
                       </tr>
                       <tr>
                        <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;font-size:0">
                         <table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:40% !important;display:inline-table">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                       <tr>
                        <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px"><span class="es-button-border" style="border-style:solid;border-color:#999999;background:#ffffff;border-width:1px;display:inline-block;border-radius:0px;width:auto"><a href="${url}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#666666;font-size:16px;padding:10px 30px 10px 30px;display:inline-block;background:#ffffff;border-radius:0px;font-family:Montserrat, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #FEF3E6;border-color:#ffffff">Verify my email</a></span></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
           <tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:700px">
               <tr>
                <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:660px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;font-size:0">
                         <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px"><!--[if mso]><table style="width:660px" cellpadding="0" cellspacing="0"><tr><td style="width:320px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:320px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-top:15px"><h3 style="Margin:0;font-family:Montserrat, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#333333">Like it! Love it! Share it!</h3></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table><!--[if mso]></td><td style="width:20px"></td><td style="width:320px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="center" style="padding:0;Margin:0;width:320px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;font-size:0">
                         <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="center" valign="top" class="es-m-p0r" style="padding:0;Margin:0;padding-right:30px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:12px"><img title="Facebook" src="https://eclafxw.stripocdn.email/content/assets/img/social-icons/square-black-bordered/facebook-square-black-bordered.png" alt="Fb" width="32" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                            <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:12px"><img title="Instagram" src="https://eclafxw.stripocdn.email/content/assets/img/social-icons/square-black-bordered/instagram-square-black-bordered.png" alt="Inst" width="32" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table><!--[if mso]></td></tr></table><![endif]--></td>
               </tr>
               <tr>
                <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:660px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;font-size:0">
                         <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" style="padding:20px;Margin:0">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:660px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Montserrat, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders).<br><a target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:12px;line-height:18px" href="https://viewstripo.email">Privacy police</a> | <a target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;color:#134F5C;font-size:12px;line-height:18px" href="">Unsubscribe</a></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
           <tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:700px">
               <tr>
                <td align="left" style="padding:20px;Margin:0">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:660px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" class="es-infoblock made_with" style="padding:0;Margin:0;font-size:0"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=fashion_17&utm_content=finishing_signing_up" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://eclafxw.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt="" width="125" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table></td>
       </tr>
     </table>
    </div>
   </body>
  </html>`;
};
