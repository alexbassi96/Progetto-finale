import Ranking from "../models/ranking.js"

export const getRanking = async (req, res) => {
    try {
        const ranking = await Ranking.findOne({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId,
            }
        });
        
        if (ranking) {
            res.send(ranking);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const createRanking = async (req, res) => {
    try {
        const ranking = await Ranking.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Ranking Created",
            data: ranking
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

/*export const updateRanking = async (req, res) => {
    try {
        const ranking = await Ranking.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Ranking Updated",
            data: ranking
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deleteRating = async (req, res) => {
    try {
        await Rating.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Rating Deleted"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}*/
