const controller = {
  index: (req, res, next) => {
    res.render('index', { title: 'Express'});
  },
};

module.exports = controller;
