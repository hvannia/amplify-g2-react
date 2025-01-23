/* S3 bucket */
import { defineStorage } from '@aws-amplify/backend';
import { readTagline } from '../functions/read-tagline/resource';


export const taglineStorage = defineStorage({
    name: 'taglineStorage',
    access: (allow)=> ({
        'taglines/*':[
            allow.resource(readTagline).to(['read'])
        ]
    })

});