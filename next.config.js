// const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER} = require('next/constants')

// module.exports = (phase, {defaultConfig}) => {
//  if (phase === PHASE_DEVELOPMENT_SERVER){
//    console.log("i'm in development")
//    return defaultConfig
//  }
//  return defaultConfig
// }
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv()