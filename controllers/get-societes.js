const pool = require('../data-base')

exports.getAllSocietes = async (req, res) => {
    try {
        const getAllSocietes = await pool.query(
            `
            SELECT
	societe.societe_id, 
	societe.raison_social, 
	adresses.rue, 
	adresses.ville, 
	adresses.departement
FROM
	societe
	INNER JOIN
	adresses
	ON 
		societe.adresse = adresses.adresses_id
WHERE
	societe.adresse = adresses.adresses_id
            `

        )
        res.status(200).json({ "reponse": getAllSocietes.rows })
    } catch (error) {
        res.status(400).json({ "message": error.message })
    }
}

exports.getOne = async (req, res) => {
    try {
        const { id } = req.params
        const getOne = await pool.query(`
        SELECT * FROM societe WHERE societe_id =$1`, [id])
        res.status(200).json({ "reponse": getOne.rows })
    } catch (error) {
        res.status(400).json({ "message": error.message })
    }
}
exports.topRating = async (req, res) => {
    try {
        const topRating = await pool.query(`
        SELECT
	avis.note, 
	avis.commentaire, 
	avis.fk_societe, 
	societe.raison_social
FROM
	avis
	INNER JOIN
	societe
	ON 
		avis.fk_societe = societe.societe_id
WHERE
	avis.note = 5

      `)
        res.status(200).json({ "reponse": topRating.rows })
    } catch (error) {
        res.status(400).json({ "message": error.message })
    }
}