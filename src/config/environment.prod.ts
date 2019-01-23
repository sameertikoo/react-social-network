import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyD-KUha66I-NVflBkHMbiYxfllOybT0_s0',
    authDomain: 'netlink-2019.firebaseapp.com',
    databaseURL: 'https://netlink-2019.firebaseio.com',
    projectId: 'netlink-2019',
    storageBucket: 'netlink-2019.appspot.com',
    messagingSenderId: '1095351555918'
  },
  settings: {
    enabledOAuthLogin: true,
    appName: 'NetLink',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#F245ff',
    secondaryColor: '#6d545d'
  }
}
