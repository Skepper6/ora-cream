import {readFileSync,writeFileSync} from 'node:fs';
writeFileSync('dist/index.html',readFileSync('src/index.html','utf8').replace('</head>','<link rel="stylesheet" href="responsive.css"></head>'));
