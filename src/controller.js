const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const putData = async (req, res) => {
    try{
        await prisma.user.create({
            data: {
                name: req.body.name,
            }
        });
        
        res.status(200).send('OK');
    }catch(e){
        console.log(e);

        res.status(500).send('Internal Server Error');
    }
}

const getData = async (req, res) => {
    try{
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }catch(e){
        console.log(e);

        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    putData,
    getData
}