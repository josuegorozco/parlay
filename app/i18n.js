import { addLocaleData } from 'react-intl'; /* eslint-disable no-restricted-syntax */
import enLocaleData from 'react-intl/locale-data/en';
import enTranslationMessages from './translations/en.json';
import {
    DEFAULT_LOCALE,
} from './containers/App/constants';

/*
|--------------------------------------------------------------------------
| i18n.js
|--------------------------------------------------------------------------
|
| This will setup the i18n language files and locale data for your app.
|
*/

export const appLocales = [
    'en',
];

addLocaleData(enLocaleData);

export const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
    const formattedMessages = {};
    const messageKeys = Object.keys(messages);
    for (const messageKey of messageKeys) {
        if (locale === DEFAULT_LOCALE) {
            formattedMessages[messageKey] = messages[messageKey];
        } else {
            formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey];
        }
    }

    return formattedMessages;
};

export const translationMessages = {
    en: formatTranslationMessages('en', enTranslationMessages),
};
