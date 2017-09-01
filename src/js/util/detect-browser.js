import config from '../config'
import assign from 'lodash.assign'
import sniffer from 'sniffer'

class DetectBrowser {
  init () {
    assign(config, sniffer.getInfos())
    sniffer.addClasses(config.body)
  }
}

export default new DetectBrowser()
