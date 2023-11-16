const express = require('express');
const router = express.Router();
const firestore = require ("firebase/firestore");
const db = firestore.getFirestore();

router.get('/:postId', (req, res) => {
  const postID = req.params.postId;
  const postsQuery = firestore.getDoc(firestore.doc(db,"posts", postID));
postsQuery.then((response) => {
    res.send(response.data);
    }).catch((error) => {
res.send(error);
    });
});

module.exports = router;


