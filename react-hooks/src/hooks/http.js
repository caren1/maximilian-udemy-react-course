import { useReducer, useCallback } from "react";

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case "SEND":
      return { ...httpState, loading: true, data: null };

    case "RESPONSE":
      return { ...httpState, loading: false, data: action.responseData };

    case "ERROR":
      return { loading: false, error: action.error };

    case "CLEAR":
      return { ...httpState, error: null };

    default:
      throw new Error("Should not reach here");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
  });

  const sendRequest = useCallback((url, method, body) => {
    dispatchHttp({ type: "SEND" });
    fetch(url, {
      method,
      body,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        dispatchHttp({ type: "RESPONSE", responseData });
      })
      .catch((error) => {
        dispatchHttp({ type: "ERROR", error: error.message });
      });
    return {
      isLoading: httpState.loading,
      data: httpState.data,
      error: httpState.error,
      sendRequest: sendRequest,
    };
  }, []);
};

export default useHttp;
