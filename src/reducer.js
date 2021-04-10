import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        stories: action.payload.stories,
        numberOfPages: action.payload.numberOfPages,
      };

    case REMOVE_STORY:
      return {
        ...state,
        stories: state.stories.filter(
          (story) => story.objectID !== action.payload
        ),
      };

    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      };

    case HANDLE_PAGE:
      let newPage;
      if (action.payload === 'inc') {
        newPage = state.page < state.numberOfPages - 1 ? state.page + 1 : 0;
      } else {
        newPage = state.page > 0 ? state.page - 1 : state.numberOfPages - 1;
      }
      return { ...state, page: newPage };

    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};

export default reducer;
