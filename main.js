const { crawlPage } = require('./crawl.js');

async function main() {
  if (process.argv.length < 3) {
    console.log('no website provided');
    return;
  }
  if (process.argv.length > 3) {
    console.log('too many arguments provided');
    return;
  }
  
  const baseURL = process.argv[2];
  
  console.log(`starting JSDOM Link Analyzer of: ${baseURL}`);
  await crawlPage(baseURL, baseURL, {});
}
  
main();