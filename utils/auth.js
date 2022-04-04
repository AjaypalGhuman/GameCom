const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the user to the login page.
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      // If the user is logged in, execute thr route function that will allow them to view posts
      next();
    }
  };
  
  module.exports = withAuth;
  