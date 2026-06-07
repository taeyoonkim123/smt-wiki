import fs from 'fs';
let code = fs.readFileSync('src/data.ts', 'utf8');

code = code.replace(
  /\/\/ 임시 이미지 URL 생성기(.|\n)*?const thumb = [^\n]*\n\n/m,
  '// CloudFront 이미지 자산을 불러오는 유틸리티\n// FIXME: {각인물코드} 또는 장소/마물 이미지 코드를 입력해주세요 (예: \'MA.png\', \'MAP_1.jpg\')\nconst getAssetUrl = (assetCode: string) => `https://d3lna1f15u7pcs.cloudfront.net/media/characters/543f5844-2c82-43f1-b234-e968b6a68c36/assets/${assetCode}`;\n\n'
);

code = code.replace(/(?:img|thumb|avatar)\('([^']+)'(?:,\s*'[^']+')?\)/g, "getAssetUrl('$1_코드입력') /* TODO: 코드입력 */");

fs.writeFileSync('src/data.ts', code);
console.log('Success');
