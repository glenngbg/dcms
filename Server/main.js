import App from './index';
import config from './config/config';

const app = new App();
app.init().then(server => server.listen(config.get('port')));
