const config = {
    mode: "production",
    entry: {
        index: "./src/js/index.js",
        news: "./src/js/news.js",
      contacts: "./src/js/contacts.js",
      notFound: "./src/js/notFound.js"
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
