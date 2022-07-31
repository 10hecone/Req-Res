import fetch from 'node-fetch' // Import fetch module
let res; // Create a variable res

export class req { // Export req class to module
  #url;
  constructor() { // Build a constructor contain uri
    this.#url;
  }

  // Function open 
  open(url) {
    this.#url = url // Set URL 
  }

  // Function get
  async get() { // Send request from URL
    if (!this.#url) throw new Error('URI is not defined...  The request could not be completed.') // Create error if is not uri
    let r = new Promise((resolve) => { // Create new promise
      fetch(this.#url).then(r => resolve(r)).catch(() => resolve(0)) // Get response of URI
    });
    res = await r // Send response of variable res
  }

  // Function fetchStatus
  fetchStatus() {
    if (!res) return 0; // Check status URI, if it doesn't exist return 0
    return res.status; // Else return status code
  }

  // Function checkStatus
  async checkStatus() {
    let reponse = await this.fetchStatus() // Get response status from fetchStatus
    if (reponse <= 399 && reponse >= 200) return true; // If URI exist return true
    else return false; // Else return false
  }
}