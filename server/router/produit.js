module.exports = app =>{
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();

  app.post('/produit/commentaire/:id', async (req, res) => {
    const id = parseInt(req.params.id,30)
    try {
      const userWithAchat = await prisma.commentaire.findMany({
        where: {
          id_produit: id,
        },
        include: {
          user: true,
        },
      });
      res.status(200).send({ status: 'success', data: userWithAchat });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des utilisateurs.' });
    }
  });


  }
  
  