import * as fs from 'fs';

const path = 'src/data.ts';
let content = fs.readFileSync(path, 'utf-8');

const spyUpdates: Record<string, string> = {
  MG: '학생들 사이에서 친근하고 호탕한 인물로 위장했으나, 실상은 오래전부터 아카데미의 동향을 파악하던 검은 여명회의 첩자 였다. 혼란한 전투 중 잔혹한 본성을 드러내며 등 뒤에서 교관들을 기습한다.',
  ME: '빠른 속도로 아카데미의 규율을 무시하며 편하게 행동하는 교관으로 보였으나, 기실 검은 여명회의 첩자였다. 방어선에서 고의적으로 진형을 무너뜨려 아군을 위험에 빠뜨리고 혼란을 가중시킨 뒤 어둠 속으로 유유히 사라진다.',
  ZL: '고귀한 귀족 혈통으로서의 자존심을 내세웠지만, 사실 그 권력을 이용해 검은 여명회와 결탁하고 마법 아카데미의 정보를 팔아넘기던 핵심 첩자였다. 아리안토스 공세 당시 결계를 안에서 박살내고 오벨리아에게 충성을 맹세한다.',
  ZI: '깐깐하고 원칙주의적인 교수로 위장하여 방어 진형의 취약점을 치밀하게 수집하던 엘리트 첩자. 전쟁이 발발하자마자 자신이 통제하던 시간 마법으로 아군의 시간을 정지시켜 버린 뒤, 첩자로서의 임무를 완수하고 여명회의 진영에 합류한다.'
};

let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const match = lines[i].match(/id:\s*'([A-Z]{2})'/);
  if (match) {
    const id = match[1];
    if (spyUpdates[id]) {
      // Find futureDescription line for this character
      for (let j = i; j < i + 20; j++) {
        if (lines[j].includes('futureDescription:')) {
          lines[j] = lines[j].replace(/(futureDescription:\s*')[^']*?(',?)/, `$1${spyUpdates[id]}$2`);
          break;
        }
      }
    }
  }
}

fs.writeFileSync(path, lines.join('\n'));
console.log('Spies updated');
