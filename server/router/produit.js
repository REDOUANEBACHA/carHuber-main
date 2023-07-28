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

  app.get('/produit', async (req, res) => {
    try {
      const produit = await prisma.produit.findMany({
        include: {
          Menucategorie: {
            include: {
              Categorie: true 
            }
          }
        }
      });
  
      res.status(200).send({ status: 'success', data: produit });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des catégories.' });
    }
  });
  
  

  app.post('/produits/:categorie/:menucategorie', async (req, res) => {
    const categorie = req.params.categorie
    const menucategorie = req.params.menucategorie
    try {
      const produitsElectroniquesTelephone = await prisma.produit.findMany({
        where: {
          Menucategorie: {
            Categorie: {
              type_categorie: categorie,
            },
            name: menucategorie,
          },
        },
        include: {
          Menucategorie: {
            include: {
              Categorie: true,
            },
          },
        },
      });
      res.status(200).send({ status: 'success', data: produitsElectroniquesTelephone });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des produits.' });
    }
  });


  }
  
  