export type Floor = '상층' | '중층' | '심층';

export interface MonsterInfo {
  name: string;
  imageUrl: string;
}

export interface BossInfo {
  name: string;
  imageUrl: string;
}

export interface LabyrinthInfo {
  name: Floor;
  desc: string;
  imageUrl: string;
  monsters: MonsterInfo[];
  traps: string[];
  boss: BossInfo;
  plants: string[];
  ores: string[];
}

export interface LocationInfo {
  id: string;
  name: string;
  desc: string;
  imageUrl: string;
  facilities: string[];
}

export type Faction = '기간토스 검술 아카데미' | '세오른 마법 아카데미' | '길드' | '검은 여명회';
export type Role = '4신5제' | '12권위자' | '교관' | '교수' | '학생' | '길드원' | '조직원' | '미상';
export type School = '원소' | '간섭' | '영역' | '정령';

export interface Character {
  id: string;
  name: string;
  title: string;
  gender: '남' | '여' | '미상';
  faction: Faction;
  role: Role;
  school?: School;
  rank: string;
  quote: string;
  mbti: string;
  enneagram: string;
  weaponOrMagic: string;
  combatDescription?: string;
  futureDescription?: string;
  description?: string;
  icon?: string;
  imageUrl: string;
}

export interface AcademyCourse {
  grade: string;
  requirement: string;
}

export interface RankInfo {
  rank: string;
  points: number;
  description: string;
}
