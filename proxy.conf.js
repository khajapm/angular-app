const PROXY_CONFIG = [
    {
        context: [
            "/pie","/addPie","/removePie","editPie"
        ],
        target: "http://springms:8087",
        secure: false
    }
]

module.exports = PROXY_CONFIG;