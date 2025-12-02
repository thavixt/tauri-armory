interface CharacterSheet {
  class: number;
  race: number;
  name: string;
  level: number;
  realm: string;
  portrait_path: string;
  pts: number;
  faction_string_class: string;
  guildName: string;

  // Arena Team IDs
  arenaTeam2v2id: number;
  arenaTeam3v3id: number;
  arenaTeam5v5id: number;

  dualSpec: boolean;

  // Talent Build 0 (Primary)
  talent_builds_0: string; // Points of talent distribution (e.g., "1/5/10")
  treeName_0: string;
  treeIcon_0: string;
  ds_0: any[]; // Assuming an array of talent points or nodes. Needs dedicated interface.
  disabledDS_0: boolean;

  // Talent Build 1 (Secondary)
  talents_builds_1: string; // Points of talent distribution (e.g., "1/5/10")
  treeName_1: string;
  treeIcon_1: string;
  ds_1: any[]; // Assuming an array of talent points or nodes. Needs dedicated interface.
  disabledDS_1: boolean;

  // Array Properties - These need dedicated interfaces defined elsewhere
  characterItems: CharacterItem[];
  // primary_trade_skill_1: TradeSkill[]; // Array of primary trade skill info
  // primary_trade_skill_2: TradeSkill[]; // Array of secondary trade skill info
  // additionalBarInfo: AdditionalBarInfo[]; // Mana data, etc.
  // characterStat: CharacterStat[]; // Character's statistics
  // characterArenaTeamInfo: CharacterArenaTeamInfo[]; // Arena team info
  characterFeed: CharacterFeed[]; // Character's feed (activities/achievements)

  healthValue: number;
  playerHonorKills: number;
  title: string;
}
/**
 * Represents an individual item held by the character.
 */
interface CharacterItem {
  /**
   * Item entry (Template ID)
   */
  entry: number;

  /**
   * Actual item ID (Globally Unique Identifier, or GUID)
   */
  guid: number;

  /**
   * Icon name on server
   */
  icon: string;

  /**
   * Rarity of the item (e.g., 1=common, 5=epic)
   */
  rarity: number;

  /**
   * Item level
   */
  ilevel: number;

  /**
   * Item name
   */
  name: string;

  /**
   * Details about the gems slotted into the item.
   * NOTE: This array needs a dedicated interface (e.g., Gem[]).
   */
  gems: any[];

  /**
   * Details about the enchantment applied to the item.
   * NOTE: This array needs a dedicated interface (e.g., Enchant[]).
   */
  ench: any[];
}
/**
 * Represents a single activity entry in the character's feed (e.g., achievement earned, item found).
 */
interface CharacterFeed {
  /**
   * Feed type (e.g., a numerical ID for 'Achievement', 'Loot', etc.)
   */
  type: number;

  /**
   * Timestamp of activity. Using Date object for native type safety.
   */
  date: Date;

  /**
   * Feed entry (e.g., ID of the item or achievement)
   */
  data: number;

  /**
   * Number of feed (e.g., quantity of the item)
   */
  counter: number;

  /**
   * Feed name (e.g., the name of the achievement or item)
   */
  name: string;

  /**
   * Quality (e.g., a numerical ID for the item's quality/rarity)
   */
  Quality: number;

  /**
   * Icon name on server
   */
  icon: string;

  /**
   * Description of the activity/item
   */
  desc: string;

  /**
   * Point value (e.g., achievement point value)
   */
  point: number;

  /**
   * Reward string
   */
  reward: string;

  /**
   * Location of the activity
   */
  location: string;
}