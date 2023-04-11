// localStorage API

interface ILocalStorageAPI<T> {
  [key: string]: T;
}

abstract class ALocalStorageAPI<T> {
  protected localStorageApi: ILocalStorageAPI<T>;
  constructor() {
    this.localStorageApi = {};
  }
  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class LocalStorageAPI<T> extends ALocalStorageAPI<T> {
  setItem(key: string, value: T) {
    this.localStorageApi[key] = value;
  }
  getItem(key: string) {
    return this.localStorageApi[key];
  }
  clearItem(key: string) {
    delete this.localStorageApi[key];
  }
  clear() {
    this.localStorageApi = {};
  }
}

const stringLocalStorage = new LocalStorageAPI<string>();

// gelolocation API

interface Options {
  maximumAge: number;
  timeout: number;
  enableHighAccuracy: boolean;
}
interface WatchList {
  [id: number]: boolean;
}

type GetCurrentPosition = {
  (success: (geolocationPosition: object) => any): void;
  (
    success: (geolocationPosition: object) => any,
    error: (geolocationPositionError: object) => {}
  ): void;
  (
    success: (geolocationPosition: object) => any,
    error: (geolocationPositionError: object) => {},
    options: Options
  ): void;
};
type WatchPosition = {
  (success: () => {}): number;
  (success: () => {}, error: () => {}): number;
  (success: () => {}, error: () => {}, options: Options): number;
};

class GeolocationAPI {
  private watchList: WatchList = {};
  public getCurrentPosition: GetCurrentPosition = (success, error?, options?) => {};
  public watchPosition: WatchPosition = () => {
    const id = Math.floor(Math.random() * 10);
    this.watchList[id] = true;
    return id;
  };
  clearWatch(id: number) {
    this.watchList[id] = false;
  }
}

const geolocationAPI = new GeolocationAPI();
