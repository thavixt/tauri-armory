import { Realms } from "./const";

let guid = 0;

export class TauriArmoryApi {
  apikey: string;
  secret: string;

  constructor() {
    this.apikey = import.meta.env.VITE_TAURI_ARMORY_API_KEY;
    this.secret = import.meta.env.VITE_TAURI_ARMORY_API_SECRET;
  }

  private getApiUrl = () => {
    return `https://corsproxy.io/?url=http://chapi.tauri.hu/apiIndex.php?apiKey=${this.apikey}`;
  }

  getCharacter = async (character: string, realm = Realms.Tauri): Promise<CharacterData> => {
    const headers = new Headers();
    // headers.append("Accept", "application/json");
    // headers.append("Content-Type", "application/json");
    // headers.append("User-Agent", "ThavixtTauriArmory");
    const payload = {
      secret: this.secret,
      url: "character_sheet",
      params: {
        r: realm,
        n: character,
        guid: guid++,
      },
    };

    const response = await fetch(this.getApiUrl(), {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const charData = await response.json() as CharacterData;
    console.log(charData);
    return charData;
  }
}
