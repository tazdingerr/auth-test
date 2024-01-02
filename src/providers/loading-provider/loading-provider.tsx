import { createContext, useContext, useReducer } from "react";
import { LoadingProviderProps, LoadingContextProps, ReactLoadingContainer } from ".";
import ReactLoading from "react-loading";

const LoadingContext = createContext<LoadingContextProps | null>(null);

/**
 * Хук глобальной загрузки
 */
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

/**
 * Провайдер глобальной загрузки
 */
export const LoadingProvider: React.FC<LoadingProviderProps> = (props) => {
  const [checked, toggleLoading] = useReducer((checked) => !checked, false);

  return (
    <LoadingContext.Provider value={{ toggleLoading }}>
      {checked && (
        <ReactLoadingContainer>
          <ReactLoading type={"cylon"} height={"20%"} width={"20%"} />
        </ReactLoadingContainer>
      )}
      {props.children}
    </LoadingContext.Provider>
  );
};
