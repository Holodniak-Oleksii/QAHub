import { QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { queryClient } from "./api";
import AppRouter from "./router";
import Theme from "./theme";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
          <AppRouter />
        </SnackbarProvider>
      </Theme>
    </QueryClientProvider>
  );
};

export default App;
