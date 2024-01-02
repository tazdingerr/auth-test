export interface LoadingProviderProps {
  children: React.ReactNode;
}

export interface LoadingContextProps {
  toggleLoading: React.Dispatch<Partial<ILoading>>;
}

export const initialLoading: ILoading = {
  checked: false,
};
export interface ILoading {
  checked: boolean;
}
