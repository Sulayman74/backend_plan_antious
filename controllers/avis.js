const pool = require('../data-base')

exports.allAvis = async (req, res) => {
    try {
        const allAvis = await pool.query(
            `
          SELECT * FROM avis 
            `
        )
        res.status(200).json({ "reponse": allAvis.rows })
    } catch (error) {
        res.status(400).json({ "message": error.message })
    }
}
exports.avisFaible = async (req, res) => {
    try {
        const avisFaible = await pool.query(
            `
          SELECT * FROM avis WHERE note <=3
            `
        )
        res.status(200).json({ "reponse": avisFaible.rows })
    } catch (error) {
        res.status(400).json({ "message": error.message })
    }
}