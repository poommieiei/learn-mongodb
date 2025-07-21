import app from './appSetting.js';

const port: number = 3000;

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});