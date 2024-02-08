var nodemailer=require('nodemailer');
var sender=nodemailer.createTransport({
    service:'gmail',
    auth :{
        user : 'arumugamak.21cse@kongu.edu',
        pass : 'arun2003'
    }
});
var composemail={
        from : 'arumugamak.21cse@kongu.edu',
        to : 'gobiv.21cse@kongu.edu',
        subject:'sender mail using node.js', 
        html : '<h1> HELLO <h1>'
        
};
sender.sendMail(composemail,function(error,data){
   if(error)
   {
    console.log(error);
   }
   else{
    console.log("email send successfully");
   }
});