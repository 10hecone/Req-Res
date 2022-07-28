import fetch from 'node-fetch'
let res;
export class req {
  #url;
  constructor() {
    this.#url;
  }

  open(url) {
    this.#url = url
  }

  async get() {
    if(!this.#url) throw new Error('URI is not defined...  The request could not be completed.')
    let r = new Promise((resolve) => {
        fetch(this.#url).then(r => resolve(r)).catch(() => resolve(0))
    });
    res = await r
   }

  fetchStatus() {
    if(!res) return 0;
    return res.status;
   }

   async checkStatus() {
    let reponse = await this.fetchStatus()
      if(reponse <= 399 && reponse >= 200) return true;
      else return false;
   }
}