module.exports = {
    homepage
  };

///get homepage

function homepage (req,res){

    const locals={
        title: 'User Management System'
    }
res.render('index',locals);


}