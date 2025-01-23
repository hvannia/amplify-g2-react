import { defineFunction } from '@aws-amplify/backend';
import { taglineStorage } from '../../storage/resource';

export const readTagline = defineFunction({
    name: "read-tagline",
    entry: "./handler.ts",
    timeoutSeconds: 60,
    runtime:20, //node 20
    environment: {
        "env": "dev",
        "app":"taglines"
    }
});