require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');

app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Welcome Healthcare Backend server | Developed by Shivam Kumar Jha");
})

app.use('/api/auth', require('./routes/auth'));
app.use('/api/patients', require('./routes/patients'));
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/mappings', require('./routes/mappings'));



sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Unable to connect to the database:', err));



sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`));
});
