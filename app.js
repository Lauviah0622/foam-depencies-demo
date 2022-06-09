import fs from 'fs';
import markdownParse from 'remark-parse';
import wikiLinkPlugin from 'remark-wiki-link';
import frontmatterPlugin from 'remark-frontmatter';
import { unified } from 'unified';

const file = fs.readFileSync('./test.md', { encoding: 'utf-8' });

// console.log(file);

const parser = unified()
  .use(markdownParse, { gfm: true })
  .use(frontmatterPlugin, ['yaml'])
  .use(wikiLinkPlugin, { aliasDivider: '|' });

const res = parser.parse(file)

console.log(JSON.stringify(res));
// console.log(res.position);
// console.log(res.children[0].children);
