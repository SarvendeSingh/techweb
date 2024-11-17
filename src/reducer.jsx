import React from 'react'

const reducer = (state, action) => {

  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      heading: action.payload.heading,
      description: action.payload.description,
      bImg: action.payload.bImg
    }
  }

  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      heading: action.payload.heading,
      description: action.payload.description,
      bImg: action.payload.bImg
    }
  }

  if (action.type === "SERVICES_UPDATE") {
    return {
      ...state,
      heading: action.payload.heading,
      description: action.payload.description,
      bImg: action.payload.bImg
    }
  }

  if (action.type === "GET_SERVICES") {
    return {
      ...state,
      service: action.payload
    }
  }

  return state;
}

export default reducer