import * as constants from './constants';

export const retrieveContent = (serviceType, options) => ({type: constants.RETRIEVE_CONTENT, serviceType, options});