const pool = require('../data-base')

// * get tous les avis
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

// * get les avis faibles
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
exports.createReview = async (req, res) => {
    const { fk_societe, fk_utilisateur, note, commentaire } = req.body
    try {
        const createReview = await pool.query(
            `
          INSERT INTO avis (fk_societe,fk_utilisateur,note,commentaire) VALUES ($1,$2,$3,$4) RETURNING *;
            `, [fk_societe, fk_utilisateur, note, commentaire]
        )
        res.status(200).json({ "reponse": createReview.rows })
    } catch (error) {
        res.status(400).json({ "message": error.message })
    }
}