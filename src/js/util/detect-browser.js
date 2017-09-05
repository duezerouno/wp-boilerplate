import config from '../config'
import assign from 'lodash.assign'
import sniffer from 'sniffer'

function detectBrowser () {
  assign(config, sniffer.getInfos())
  sniffer.addClasses(config.body)
}

export default detectBrowser
