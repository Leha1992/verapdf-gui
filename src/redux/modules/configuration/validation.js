import { createAction, handleActions } from 'redux-actions';

//- Actions
export const validationActions = {
  toggleValidationActive: createAction('VALIDATION_ACTIVE_TOGGLE'),
  selectFixMetadata: createAction('SELECT_FIX_METADATA'),
  selectIncludeInformation: createAction('SELECT_INCLUDE_INFORMATION'),
  stopValidation: createAction('SELECT_STOP_VALIDATION'),
  selectValidationProfile: createAction('SELECT_VALIDATION_PROFILE'),
  getProfilePath: createAction('GET_PROFILE_PATH'),
  selectAmountFails: createAction('SELECT_AMOUNT_FAILS'),
  selectPrefix: createAction('SELECT_PREFIX')
};

//- State
const initialState = {
  active: false,
  profile: 'custom',
  profileFilePath: null,
  fixMetadata: false,
  prefix: 'veraFixMd_',
  includeInformationInReport: false,
  stopValidation: false,
  amountFails: 100
};

//- Reducers
export default handleActions(
  {
    VALIDATION_ACTIVE_TOGGLE: state => {
      return { ...state, active: !state.active };
    },
    SELECT_VALIDATION_PROFILE: (state, action) => {
      return { ...state, profile: action.payload };
    },
    GET_PROFILE_PATH: (state, action) => {
      return { ...state, profileFilePath: action.payload };
    },
    SELECT_FIX_METADATA: state => {
      return { ...state, fixMetadata: !state.fixMetadata };
    },
    SELECT_PREFIX: (state, action) => {
      return {
        ...state,
        prefix: action.payload
      };
    },
    SELECT_INCLUDE_INFORMATION: state => {
      return {
        ...state,
        includeInformationInReport: !state.includeInformationInReport
      };
    },
    SELECT_STOP_VALIDATION: state => {
      return {
        ...state,
        stopValidation: !state.stopValidation
      };
    },
    SELECT_AMOUNT_FAILS: (state, action) => {
      return {
        ...state,
        amountFails: action.payload
      };
    }
  },
  initialState
);
