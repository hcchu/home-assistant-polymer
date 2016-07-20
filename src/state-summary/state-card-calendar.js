import Polymer from '../polymer';

require('../components/state-info');

export default new Polymer({
  is: 'state-card-calendar',

  properties: {
    stateObj: {
      type: Object,
    },
  },

  computeCalendarEvents(events) {
      let text;
      let i;
      text = "";
      for (i=0; i < events.length; i++) {
          text += "<span class='calendar-icon'><iron-icon icon='mdi:calendar'></iron-icon></span>";
      };
      return text;
  },

});
