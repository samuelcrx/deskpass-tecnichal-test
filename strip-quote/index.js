/**
 * strip quote characters from a string
 *
 * @param  {String} query
 * @return {String}
 */
const stripquotes = (query) => {
  if (typeof query !== 'string')
    throw new Error(' Type is not a String!');
  if (!query.length) throw new Error(`Argument should't be empty`);

  // Replace single quotes first, since we need to keep apostrophes in our queries.
  // This works with apostrophes at the end of a plural noun to show possession (s').
  query = query.replace(/['](?=\W\s-'|$)|(?<=\W|^)[']/g, ''); //\u0022
  query = query.replace(/[’](?=\w\s-’|\W\s-’|$)/g, ''); //\u2019

  return query.replace(/["‘“‹«](?=\w|\W|$)|(?<=\w|\W|^)["”›»]/g, '');
};

if (!!process.argv[2]) {
  let size = process.argv.length
  console.log(stripquotes((process.argv || []).slice(2, size).toString()))
}