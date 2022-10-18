const port = process.env.PORT || 3000;
const app = require('./app');

const init = async() => {
    try{
        app.listen(port, () => console.log(`listenign on port ${port}`));
    }
    catch(ex) {
        console.log(ex);
    }
}

init();