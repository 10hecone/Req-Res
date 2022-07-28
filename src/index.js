
import { req } from './classes/req-res.js'; // Class request et reponse

// Export des imports dans le fichier Numr
export {
  req,
};

const e = new req()

    e.open()
    await e.checkStatus()
    await e.fetchStatus()
    await e.get()


