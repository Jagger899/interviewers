const config = {
    mode: "production",
    entry: {
        index: "./src/js/index.js",
        news: "./src/js/news.js",
        contacts: "./src/js/contacts.js",
        pageNews: "./src/js/one-news.js",
        about: "./src/js/about.js",
        notFound: "./src/js/notFound.js",
        projects: "./src/js/projects.js",
        oneProject: "./src/js/oneProject.js",
    },

    output: {
        filename: "[name].bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

module.exports = config;
