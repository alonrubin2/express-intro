const photos = [];
let photoCounter = 1;


class Photos {
    
    // CREATE PHOTO static
    static createPhoto(req, res) {
        const { title, filename } = req.body;
        if (!title || !filename) {
            res.status(402).send('incorrect body');
            return;
        }
        const newPhoto = {
            id: photoCounter,
            title,
            filename
        };
        photoCounter++;
        photos.push(newPhoto);
        res.sendStatus(201);
    }

    // FIND PHOTO static
    static findPhoto(req, res) {
        const photoId = parseInt(req.params.id);
        const requestedPhoto = photos.find(photo => photo.id === photoId)
        if (!requestedPhoto) {
            res.sendStatus(404);
            return;
        }
        res.send(requestedPhoto);
    }



    // DELETE PHOTO
    static deletePhoto(req, res) {
        const photoId = parseInt(req.params.id);
        const requestedPhoto = photos.find(photo => photo.id === photoId)
        if (!requestedPhoto) {
            res.sendStatus(404);
            return;
        }
        else {
            let index = photos.indexOf(requestedPhoto);
            photos.splice(index, 1);
            res.send(`${requestedPhoto.title} deleted`)
        }
    };

    // UPDATE PHOTO
    static updatePhoto(req, res) {
        const photoId = parseInt(req.params.id);
        const requestedPhoto = photos.find(photo => photo.id === photoId)
        if (!requestedPhoto) {
            res.sendStatus(404);
            return;
        }
        else {
            const { title, filename } = req.body;
            if (!title || !filename) {
                res.status(402).send('incorrect body');
                return;
            }
            const updatedPhoto = {
                id: photoId,
                title,
                filename
            };
            let index = photos.indexOf(requestedPhoto);
            photos.splice(index, 1, updatedPhoto);
            res.send(`${requestedPhoto.title} has been updated to ${updatedPhoto.title}`)
        }
    };

    //  GET ALL PHOTOS
    static getAllPhotos(req, res) {
        res.send(photos);
    };

}

module.exports = Photos;