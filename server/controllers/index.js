<<<<<<< HEAD
// Display the Home Page
module.exports.DisplayHome = (req, res) => {
  res.render('content/index', {
    title: 'Home',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}

// Displays the Contact Page
module.exports.DisplayContact = (req, res) => {
  res.render('content/contact', {
    title: 'Contact',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
=======
// Display the Home Page
module.exports.DisplayHome = (req, res) => {
  res.render('content/index', {
    title: 'Home',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}

// Displays the Contact Page
module.exports.DisplayContact = (req, res) => {
  res.render('content/contact', {
    title: 'Contact',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
>>>>>>> e398eb947cbc510166d83e92d001865b2bfc6266
