import { createContext, useContext, useReducer } from "react";
import { LoadingProviderProps, LoadingContextProps, ReactLoadingContainer, ILoading, initialLoading } from ".";
import ReactLoading from "react-loading";

const LoadingContext = createContext<LoadingContextProps | null>(null);

/**
 * Хук глобальной загрузки
 */
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within an LoadingProvider");
  }
  return context;
};

/**
 * Провайдер глобальной загрузки
 */
export const LoadingProvider: React.FC<LoadingProviderProps> = (props) => {
  const [checked, toggleLoading] = useReducer(
    (checked: ILoading, newDetails: Partial<ILoading>) => ({ ...checked, ...newDetails }),
    initialLoading
  );

  return (
    <LoadingContext.Provider value={{ toggleLoading }}>
      {checked.checked && (
        <ReactLoadingContainer>
          <ReactLoading type={"cylon"} height={"20%"} width={"20%"} />
        </ReactLoadingContainer>
      )}
      {props.children}
    </LoadingContext.Provider>
  );
};
