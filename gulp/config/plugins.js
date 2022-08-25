import replace from "gulp-replace"; // Поиск и замена
import browsersync from "browser-sync";
import newer from "gulp-newer"; // Проверка обновлений
import ifPlugin from "gulp-if"; // Условное ветвление

// Объект с общими плагинами 
export const plugins = {
    replace: replace,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}