const getHome = (req, res) => {
    res.send('Home page');
};

const getAbout = (req, res) => {
    res.send('About page');
};

const getBlog = (req, res) => {
    res.send('Blog page');
};

const getContact = (req, res) => {
    res.send('Contact page');
}

module.exports = {
    getHome,
    getAbout,
    getBlog,
    getContact
};