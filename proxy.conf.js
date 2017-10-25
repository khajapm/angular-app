const PROXY_CONFIG = [
    {
        context: [
            "/posts"
        ],
        target: "http://172.17.0.3:3000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;