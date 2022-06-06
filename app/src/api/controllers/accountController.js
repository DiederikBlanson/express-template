//------------ ROUTES ----------//

exports.check = async (req, res, next) => {
    try {
        return res.status(200).json({
            message: "API request is correct!"
        })
    } catch(e) {
        console.log(e)
        return res.status(500).send()
    }
}