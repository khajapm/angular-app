const PROXY_CONFIG = [
    {
        context: [
            "/pie","/addPie","/removePie","editPie"
        ],
        target: "http://localhost:9000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;