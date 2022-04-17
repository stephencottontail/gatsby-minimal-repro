module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "https://gatsby.stephencottontail.com/graphql",
                html: {
                    useGatsbyImage: true,
                    gatsbyImageOptions: {
                        placeholder: "tracedSVG"
                    }
                }
            } 
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp"
    ]
}