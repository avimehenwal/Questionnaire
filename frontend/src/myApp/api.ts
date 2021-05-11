import axios, { AxiosInstance } from 'axios'

interface IgetQueryString {
  base?: string;
}

interface IPostData {
  firstName: string;
  address: string;
  numberOfChildren: number;
  occupation: string;
  email: string;
}

interface IapiPath {
  apiPath: string;
}

interface IgetCall extends IapiPath {
  queryString: IgetQueryString
}

interface IpostCall extends IapiPath {
  postData?: IPostData
}
// type IpostCall = IapiPath & IPostData
// type IgetCall = IapiPath & IgetQueryString


class Backend {
  _api: AxiosInstance
  _baseURL: string = 'https://challenge-dot-popsure-204813.appspot.com'
  readonly _timeout: number = 2000
  readonly _headers: object = { 'Content-Type': 'application/json' }

  constructor(urlBase?: string) {
    this._api = axios.create({
      baseURL: (urlBase) ? urlBase : this._baseURL,
      timeout: this._timeout,
      headers: this._headers
    });
  }

  getCall = async ({ apiPath = '/user', queryString = {} }: IgetCall) => {
    try {
      const response = await this._api.get(apiPath, { params: queryString });
      const data = await response.data
      // console.dir(data)
      return data
    } catch (error) {
      console.error(error);
    }
  }

  postCall = async (paramObj: IpostCall) => {
    paramObj = paramObj || {
      apiPath: '/user',
      postData: {
        firstName: "Jane",
        address: "Lohmühlenstraße 65",
        numberOfChildren: 2,
        occupation: "EMPLOYED",
        email: "jane.doe@getpopsure.com"
      }
    }
    try {
      const response = await this._api.post(paramObj.apiPath, paramObj.postData);
      const data = await response.data
      return data
    } catch (error) {
      console.error('API Error', error);
    }
  }
}

export const backend = new Backend()
