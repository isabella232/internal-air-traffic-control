export const Flights = {
  LIST_IN: 'Incoming list of flights',
  ONE_IN: 'Single incoming flight',

  replaceList(list) {
    return { type: this.LIST_IN, list };
  },
  replaceOne(flight) {
    return { type: this.ONE_IN, flight };
  }
};

export const Statuses = {
  LIST_IN: 'Incoming list of statuses',

  replaceList(list) {
    return { type: this.LIST_IN, list };
  }
};

export const Filter = {
  ADD_STATUS: 'Add status to the filter',
  REMOVE_STATUS: 'Remove status from the filter',
  ADD_LABEL: 'Add label to the filter',
  REMOVE_LABEL: 'Remove label from the filter',
  ADD_USER: 'Add user to the filter',
  REMOVE_USER: 'Remove user from the filter',
  ADD_LABEL: 'Add label to the filter',
  REMOVE_LABEL: 'Remove label from the filter',
  CHANGE_TEXT: 'Change filter text',

  addStatus(status) {
    return { type: Filter.ADD_STATUS, status };
  },
  removeStatus(status) {
    return { type: Filter.REMOVE_STATUS, status };
  },

  addLabel(label) {
    return { type: Filter.ADD_LABEL, label };
  },
  removeLabel(label) {
    return { type: Filter.REMOVE_LABEL, label };
  },

  addUser(user) {
    return { type: Filter.ADD_USER, user };
  },
  removeUser(user) {
    return { type: Filter.REMOVE_USER, user };
  },

  changeText(text) {
    return { type: Filter.CHANGE_TEXT, text };
  }
};

export const Members = {
  LIST_IN: 'Incoming list of members',

  replaceList(list) {
    return { type: this.LIST_IN, list };
  }
};

export const Labels = {
  LIST_IN: 'Incoming list of labels',

  replaceList(list) {
    return { type: this.LIST_IN, list };
  }
};

export const User = {
  IN: 'Current user incoming'
};

export const Message = {
  NETWORK_OPS: 'Network operations message',
  ERROR: 'Error message'
};
