const PROXY_CONFIG = [
    {
        context: [
            "/pie","/addPie","/removePie"
        ],
        target: "http://localhost:9000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;