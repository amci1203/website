import q from './utils/query'
import './lib/waypoints.min'

import Accordion from './modules/accordion'
import Modals from './modules/modals'
import TaggedItems from './modules/tagged-items'

Accordion('.accordion')
Modals()
TaggedItems()

const printButton = q.find('#resume .print-button')
if (printButton) {
  const anchor = new Waypoint({
    element : q.find('footer'),
    offset  : '980px',
    handler (dir) {
      q.cls.toggle(printButton, 'anchored')
    }
  })
}