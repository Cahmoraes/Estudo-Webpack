export class ListInformationsService {

  constructor() { }

  getListInformation(url: string): Promise<Response> {
    return fetch(url)
  }
}