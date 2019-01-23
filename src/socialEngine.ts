// import { useFirebase } from './data/firebaseClient/dependecyRegisterar'
// import { useAws } from './data/awsClient/dependecyRegisterar'
import { useFirestore } from './data/firestoreClient/dependecyRegisterar'
import { Container } from 'inversify'
import CommonAPI from 'api/CommonAPI'
window['console']['trace'] = CommonAPI.logger

export const provider = new Container()
useFirestore(provider)