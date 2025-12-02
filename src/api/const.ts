export const Realms = {
  Tauri: "[HU] Tauri WoW Server",
  Reborn: "[HU] Reborn WoW Server",
  WoD: "[HU] Warriors of Darkness",
  TauriBattle: "[HU] TauriBattle",
  BurningBlade: "[EN] Burning Blade",
  Alaris: "[HU] Alaris WoW Server",
}

export const Races = {
  1: 'Human',
  2: 'Orc',
  3: 'Dwarf',
  4: 'Night elf',
  5: 'Undead',
  6: 'Tauren',
  7: 'Gnome',
  8: 'Troll',
  9: 'Goblin',
  10: 'Bloodelf',
  11: 'Draenei',
  12: 'Fel Orc',
  13: 'Naga',
  14: 'Broken',
  15: 'Skeleton',
  16: 'Vrykul',
  17: 'Tuskarr',
  18: 'Forest Troll',
  19: 'Taunka',
  20: 'Northrend Skeleton',
  21: 'Ice Troll',
  22: 'Worgen',
  23: 'Gilnean',
} as const;

export type RaceId = keyof typeof Races;
export type RaceName = typeof Races[RaceId];

export const Classes = {
  1: 'Warrior',
  2: 'Paladin',
  3: 'Hunter',
  4: 'Rogue',
  5: 'Priest',
  6: 'Death Knight',
  7: 'Shaman',
  8: 'Mage',
  9: 'Warlock',
  // Note: Class ID 10 is skipped in the provided list.
  11: 'Druid',
} as const;

export type ClassId = keyof typeof Classes;
export type ClassName = typeof Classes[ClassId];

export const Gender = {
  0: 'Male',
  1: 'Female',
} as const;

export const Faction = {
  0: 'Alliance',
  1: 'Horde',
} as const;

export const CharacterFeedTypes = {
  1: 'Achievement',
  2: 'Item',
  3: 'Boss kill',
} as const;

export const AchievementCriteriaTypes = {
  0: 'Kill creature',
  1: 'Win bg',
  7: 'Reach skill level',
  8: 'Complete achievement',
  9: 'Complete quest count',
  10: 'Complete daily quest daily',
  11: 'Complete quests in zone',
  13: 'Damage done',
  14: 'Complete daily quest',
  27: 'Complete quest',
  28: 'Be spell target',
  29: 'Cast spell',
  35: 'Honorable kill',
  36: 'Own item',
  37: 'Win rated arena',
  41: 'Use item',
  42: 'Loot item',
  43: 'Explore area',
  45: 'Buy bank slot',
  46: 'Gain reputation',
  47: 'Gain exalted reputation',
  49: 'Equip epic item',
  52: 'HK class',
  53: 'HK Race',
  54: 'Do emote',
  56: 'Get killing blows',
  62: 'Money from quest reward',
  67: 'Loot money',
  68: 'Use gameobject',
  69: 'Be spell target2',
  70: 'Special pvp kill',
  72: 'fish in gameobject',
  75: 'Learn skill line spell',
  109: 'Loot type',
  113: 'Earn honorable kill',
  119: 'Use lfd to group with players',
} as const;

export const AuctionHouseTypes = {
  2: 'Alliance Auction House',
  6: 'Horde Auction House',
  7: 'Blackwater Auction House',
} as const;