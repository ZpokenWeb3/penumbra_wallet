export interface LocalStorage {
  cities: string[];
}

export type LocalStorageKeys = keyof LocalStorage;

export function setStoredCities(cities: string[]): Promise<void> {
  const vals: LocalStorage = {
    cities,
  };
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve();
    });
  });
}

export function getStoredCities(): Promise<string[]> {
    const keys: LocalStorageKeys[] = ['cities']

    return new Promise((resolve) => {
         chrome.storage.local.get(keys, (res) => {
            resolve(res.cities)
         });
    })
}
