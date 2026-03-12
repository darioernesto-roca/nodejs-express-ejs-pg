const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

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

const getDocs = (req, res) => {
    const filePath = path.join(__dirname, '../docs/article-draft.md');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const htmlContent = marked(fileContent);
    res.render('docs', { content: htmlContent });
}

module.exports = {
    getHome,
    getAbout,
    getBlog,
    getContact,
    getDocs
};