var nodemailer=require("nodemailer"),transporter=nodemailer.createTransport({service:"gmail",auth:{user:"asd@gmail.com",pass:"123456789"}}),mailOptions={from:"asd@gmail.com",to:"asdmo@ukr.net",subject:"Sending Email using Node.js",text:"That was easy!"};transporter.sendMail(mailOptions,function(e,t){console.log(e?e:"Email sent: "+t.response)});var http=require("http"),formidable=require("formidable"),fs=require("fs");http.createServer(function(e,t){if("/fileupload"!=e.url)return t.writeHead(200,{"Content-Type":"text/html"}),t.write('<form action="fileupload" method="post" enctype="multipart/form-data">'),t.write('<input type="file" name="filetoupload"><br>'),t.write('<input type="submit">'),t.write("</form>"),t.end();var r=new formidable.IncomingForm;r.parse(e,function(e,r,i){var o=i.filetoupload.path,n="C:/Users/user/myNode/"+i.filetoupload.name;fs.rename(o,n,function(e){if(e)throw e;t.write("File uploaded and moved!"),t.end()})})}).listen(8080);var http=require("http"),fs=require("fs");http.createServer(function(e,t){fs.readFile("myhtml.html",function(e,r){return t.writeHead(200,{"Content-Type":"text/html"}),t.write(r),t.end()})}).listen(8080);var fs=require("fs");fs.rename("myfile2.txt","myfile22.txt",function(e){if(e)throw e;console.log("Rename!")});
