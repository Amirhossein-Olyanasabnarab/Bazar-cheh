const express = require('express');
const setupSwagger = require('./src/configs/swagger.config');
require('dotenv').config();

function main(){
    const app = express();
    const PORT = process.env.PORT || 3000;

    require('./src/configs/mongoose.config');
    setupSwagger(app);
    
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

main();