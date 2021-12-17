const controller = {
  index: (req, res, next) => {
    res.render('index', { title: 'Zebra' });
  },
};

module.exports = controller;
