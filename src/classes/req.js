import fetch from 'node-fetch' // Import fetch module
let res; // Create a variable res

/**
 * Class representing a request
 */
export class req { // Export req class to module
  #url;
  constructor() { // Build a constructor contain uri
    this.#url;
  }

  /**
   * Open the request
   * @param {String} url
   */
  open(url) {
    this.#url = url // Set URL 
  }

  /**
   * Require the function to be open, use {@link req#open}
   * @returns {Promise<Response>}
   */
  async get(param) { // Send request from URL
    if (!this.#url) throw new Error('URI is not defined...  The request could not be completed.'); // Create error if is not uri
    res = await fetch(this.#url, param);
    return res; // Get response of URI
  }

  /**
   * Fetch the status of the request
   * @returns {Number}
   */
  fetchStatus() {
    if (!res) return 0; // Check status URI, if it doesn't exist return 0
    return res.status; // Else return status code
  }

  /**
   * Check if the request is OK or not
   * @returns {Promise<Boolean>}
   */
  async checkStatus() {
    let reponse = this.fetchStatus() // Get response status from fetchStatus
    if (reponse <= 399 && reponse >= 200) return true; // If URI exist return true
    else return false; // Else return false
  }
}