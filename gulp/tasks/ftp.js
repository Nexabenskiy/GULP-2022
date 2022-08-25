// Подключаю конфигурационный файл из папки config
import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp'; // отправляет
import util from 'gulp-util'; // отображает ход отправки


export const ftp = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
}
