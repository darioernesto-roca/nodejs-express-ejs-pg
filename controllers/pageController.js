const getHome = (req, res) => {
    res.render('home');
};

const getAbout = (req, res) => {
    res.render('about');
};

const getBlog = (req, res) => {
    res.render('blog');
};

const getContact = (req, res) => {
    res.render('contact');
}

module.exports = {
    getHome,
    getAbout,
    getBlog,
    getContact
};