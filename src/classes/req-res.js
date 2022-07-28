import fetch from 'node-fetch'
export class req {
  #url;
  constructor() {
    this.#url = undefined
  }

  async open(url) {
    this.#url = url
  }

  async get() {
    return new Promise((resolve) => {
        fetch(this.#url).then(r => resolve(r)).catch(() => resolve(0))
    });
   }

  async fetchStatus() {
    return new Promise((resolve) => {
        fetch(this.#url).then(r => resolve(r.status)).catch(() => resolve(0))
    });
   }

   async checkStatus() {
    let reponse = await this.fetchStatus()
      if(reponse === 200) return true;
      else return false;
   }
}